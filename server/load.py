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
  for line in f:
    count += 1
    data = patt.search(line)
    if data:
      data = json.dumps(data.group(1).split(','))
      r = requests.post(__endpoint, data=data, headers=headers)
      print("%d objects posted" % count)

