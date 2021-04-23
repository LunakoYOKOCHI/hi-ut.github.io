import time
# モジュールのインポート
from bs4 import BeautifulSoup
import requests
import os
import json
import unicodedata
import glob

import pandas as pd

path = "data/tmp_new.json"

with open(path) as f:
    data = json.load(f)

dfs = {}

for key in data:

    arr = []
    arr.append(["研究課題名", "start", "end", "kaken"])

    values = data[key]

    for value in values:
        if "./kaken/" not in value:
            continue
        url = "https://www.hi.u-tokyo.ac.jp/collaboration/" + value.replace("./", "")
        print(url)

        id = url.split("/")[-1].split(".")[0]

        path = "data/"+id+".html"

        if not os.path.exists(path):
            rr = requests.get(url)
            html = rr.content
            soup = BeautifulSoup(html, "lxml")

            with open(path, mode='x') as f:
                f.write(str(soup))

        soup = BeautifulSoup(open(path), "lxml")

        trs = soup.find_all("tr")

        map = {}

        for tr in trs:
            tds = tr.find_all("td")

            if len(tds) > 2:

                label = tds[0].text
                value = tds[2].text

                print(label, value)

                if label == "研究課題名":
                    map[label] = value

                if label == "研究期間":
                    values = value.split("～")

                    if len(values) == 2:

                        map["start"] = values[0].replace("年度", "")
                        map["end"] = values[1].replace("年度", "")
                    else:
                        map["start"] = ""
                        map["end"] = ""

        arr.append([map["研究課題名"], map["start"], map["end"], id])


    df = pd.DataFrame(arr)

    if key != "":
        dfs[key] = df

with pd.ExcelWriter('data/test_new.xlsx') as writer:
    for key in dfs:
        print("*******", key)
        dfs[key].to_excel(writer, sheet_name=key, header=False, index=False)
