__author__ = 'rcj1492'
__created__ = '2017.03'
__license__ = 'MIT'

import csv
est_path = '../data/insights/Quality and Location.csv'

est_map = {}
with open(est_path, 'rt', encoding='utf-8', errors='ignore') as f:
    est_reader = csv.DictReader(f)
    for row in est_reader:
        est_id = row['external_id']
        if est_id not in est_map.keys():
            est_map[row['external_id']] = { 'latitude': row['Latitude'][:-4], 'longitude': row['Longitude'][:-4] }

import json
menu_path = './menus.json'
menu_map = json.loads(open(menu_path).read())
for key, value in est_map.items():
    if key in menu_map.keys():
        for k, v in menu_map[key].items():
            if v['t'] not in value.keys():
                value[v['t']] = []
            details = { 'n': k }
            details.update(**v)
            value[v['t']].append(details)
        for j in value.keys():
            if not j in ['latitude', 'longitude']:
                value[j] = sorted(value[j], key=lambda k: k['c'], reverse=True)

output_path = 'establishments.json'

with open(output_path, 'wt') as f:
    f.write(json.dumps(est_map, indent=2))
    f.close()
