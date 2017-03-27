__author__ = 'rcj1492'
__created__ = '2017.03'
__license__ = 'MIT'

import json
est_path = './establishments.json'
est_map = json.loads(open(est_path).read())

pop_list = []
for key, value in est_map.items():
    details = { 'name': key, 'count': 0 }
    if 'Food' in value.keys():
        for food in value['Food']:
            details['count'] += food['c']
        for beer in value['Beer']:
            details['count'] += beer['c']
    pop_list.append(details)

pop_list = sorted(pop_list, key=lambda k: k['count'], reverse=True)

pop_id = pop_list[0]['name']

output_path = 'popular.json'

pop_details = est_map[pop_id]
pop_details['external_id'] = pop_id

with open(output_path, 'wt') as f:
    f.write(json.dumps(pop_details, indent=2))
    f.close()