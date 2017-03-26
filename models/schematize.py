__author__ = 'rcj1492'
__created__ = '2017.03'
__license__ = 'MIT'

import csv

import json
data_model = {}

file_path = '../data/insights/POS Table 1.csv'
with open(file_path, 'rt') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    for row in csv_reader:
        for header in csv_reader.fieldnames:
            data_model[header] = row[header]
        break

def jsonify(data_dict):

    typed_dict = {}
    for key, value in data_dict.items():
        if value.lower() == 'true':
            typed_dict[key] = True
        elif value.lower() == 'false':
            typed_dict[key] = False
        elif value.lower() == 'null':
            typed_dict[key] = None
        elif value.lower() == 'none':
            typed_dict[key] = None
        else:
            try:
                try:
                    typed_dict[key] = int(value)
                except:
                    typed_dict[key] = float(value)
            except:
                typed_dict[key] = value

    return typed_dict

output_path = './order-model.json'

with open(output_path, 'wt') as f:
    f.write(json.dumps(jsonify(data_model), indent=2))
    f.close()