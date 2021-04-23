import time
# モジュールのインポート
from bs4 import BeautifulSoup
import requests
import os
import json
import unicodedata
import glob



map2 = {
    "r01": "2019",
    "h30": "2018",
    "h29": "2017",
    "h28": "2016",
    "h27": "2015",
    "h26": "2014",
    "h25": "2013",
    # "h24": "2012",
    # "h23": "2011",
    # "h22": "2010"
}

for key3 in map2:

    year = map2[key3]

    url = "http://www.hi.u-tokyo.ac.jp/collaboration/kyoten/{}/seika.{}.html".format(key3, year)

    path = "data/html/{}.html".format(year)

    if not os.path.exists(path):
        rr = requests.get(url)
        html = rr.content
        soup = BeautifulSoup(html, "lxml")

        with open(path, mode='x') as f:
            f.write(str(soup))

    soup = BeautifulSoup(open(path), "lxml")

    body = soup.find(id="txtBody")

    print(body)

    contents = body.findChildren()

    map = {}

    key = ""

    for c in contents:

        if c.name == "a":
            key = c.text.replace("一般共同研究 研究課題　", "").strip()

        elif c.name == "table":
            

            trs = c.find_all("tr")

            item = {}

            for tr in trs:

                field = tr.find("th").text
                value = tr.find("td").text.strip()

                print(tr, field, value)

                '''

                arr = []

                for a in aas:
                    href = a.get("href")
                    arr.append(href)


                map[key] = arr

                '''

                item[field] = value

            if key != "":

                map[key] = item

            key = ""

    f2 = open("data/json/"+year+".json", 'w')
    json.dump(map, f2, ensure_ascii=False, indent=4, separators=(',', ': '))

    # break
