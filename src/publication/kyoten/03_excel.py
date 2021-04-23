import time
# モジュールのインポート
from bs4 import BeautifulSoup
import requests
import os
import json
import unicodedata
import glob

import pandas as pd

files = glob.glob("data/json/*.json")

dfs = {}

fields = ["研究課題名", "研究経費", "研究代表者", "所外共同研究者", "所内共同研究者", "研究協力者", "研究の概要"]

for file in files:
    with open(file) as f:
        data = json.load(f)

    year = file.split("/")[-1].split(".")[0]

    arr = []
    arr.append(fields)

    for key in data:

        row = []

        row.append(key)

        values = data[key]

        fields_tmp = fields[1:]
            
        for i in range(len(fields_tmp)):
            key2 = fields_tmp[i]
            value = ""
            if key2 in values:
                value = values[key2]

            row.append(value)

        arr.append(row)


    df = pd.DataFrame(arr)
    dfs[year] = df

with pd.ExcelWriter('data/kyoten.xlsx') as writer:
    for key in dfs:
        print("*******", key)
        dfs[key].to_excel(writer, sheet_name=key, header=False, index=False)
