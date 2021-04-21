import time
# モジュールのインポート
from bs4 import BeautifulSoup
import requests
import os
import json
import unicodedata
import glob


for i in range(37, 56):
    if i == 16:
        continue

    print(i)
    url = "https://www.hi.u-tokyo.ac.jp/publication/syoho/syoho"+str(i).zfill(4)+".html"

    path = "data/" + str(i) + ".html"

    if not os.path.exists(path):
        rr = requests.get(url)
        html = rr.content
        soup = BeautifulSoup(html, "lxml")

        with open(path, mode='x') as f:
            f.write(str(soup))

    soup = BeautifulSoup(open(path), "lxml")

    tables = soup.find_all("table")

    if i <= 28:
        year = 1965 + i
    else:
        year = 1964 + i

    arr = [
        {
            "year": year,
            "head": "",
            "title": "",
            "creator": "",
            "page": "",
            "id": "",
            "url": "",
            "content": ""
        }
    ]

    tables = [tables[0], tables[1]]

    for table in tables:

        trs = table.find_all("tr")

        

        for tr in trs:
            # print(tr)

            tds = tr.find_all("td")

            print(tds)

            if len(tds) == 0:
                continue

            td0 = tds[0]

            obj = {}

            if "bgcolor" in str(td0):

                obj = {
                    "vol": "",
                    "head": td0.text.replace("＜", "").replace("＞", ""),
                    "title": "",
                    "creator": "",
                    "page": "",
                    "id": "",
                    "url": "",
                    "content": ""
                }

                
                # pass
            else:

                title = td0.text

                url = ""
                a = td0.find("a")
                if a:
                    url2 = a.get("href")

                    if "http" not in url2:
                        pass
                    else:
                        url = url2

                if len(tds) > 1:
                    creator = tds[1].text
                    page = tds[2].text

                else:
                    creator = ""
                    page = ""

                obj = {
                    "vol": "",
                    "head": "",
                    "title": title,
                    "creator": creator,
                    "page": page,
                    "id": "",
                    "url": url,
                    "content": ""
                }
                
                # pass

            arr.append(obj)

        # print(td0)

    # print(table)

    f2 = open("json/"+str(i)+".json", 'w')
    json.dump(arr, f2, ensure_ascii=False, indent=4, separators=(',', ': '))

    # break