# script to do a one-off parse of the taxonomy file and deposit it into meteor

import json
import requests
import re

headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

# these variables may need to be set
__path = "taxonomy.txt"
__endpoint = "http://localhost:3000/load"

# build regex
patt = re.compile('\[([^\]]+)\]')

count = 0

with open(__path) as f:
  res = []
  for line in f:
    count += 1
    data = patt.search(line)
    if data:
      data = data.group(1).split(',')
      res.append(data)
      print("%d objects posted" % count)
    if count % 1000 == 0:
      r = requests.post(__endpoint, data=json.dumps(res), headers=headers)
      res = []

