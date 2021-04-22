import time
# モジュールのインポート
from bs4 import BeautifulSoup
import requests
import os
import json
import unicodedata
import glob

import pandas as pd

sheets = ["S"]

for sheet in sheets:
    url = "https://script.google.com/a/macros/g.ecc.u-tokyo.ac.jp/s/AKfycbxuEDrdngeqHbtCp3wjp09ZMPmxr_pWGdA4V6Mhfkdp5PWRWW9VLyOHuwTY7F8JrCni/exec?sheet=" + sheet
    
    print(url)
    
    data = requests.get(url).json()


    with open("data/json/" + sheet + ".json", mode='w') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)