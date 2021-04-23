import time
# モジュールのインポート
from bs4 import BeautifulSoup
import requests
import os
import json
import unicodedata
import glob

url = "https://www.hi.u-tokyo.ac.jp/collaboration/collaboration-j.html"

path = "data/kaken_new.html"

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
    print(c.name)

    if c.name == "h4":
        key = c.text

    elif c.name == "p":

        aas = c.find_all("a")

        arr = []

        for a in aas:
            href = a.get("href")
            arr.append(href)


        map[key] = arr

f2 = open("data/tmp_new.json", 'w')
json.dump(map, f2, ensure_ascii=False, indent=4, separators=(',', ': '))
