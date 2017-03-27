__author__ = 'rcj1492'
__created__ = '2017.03'
__license__ = 'MIT'

import csv
brand_count = {}


file_prefix = 'POS Table '
for i in range(5):
    if i == 0:
        pass
    else:
        print(i)
        file_path = '../data/insights/POS Table %s.csv' % str(i)
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as csv_file:
            csv_reader = csv.DictReader(csv_file)
            for row in csv_reader:
                brand_name = row['brand_name']
                if not brand_name in brand_count.keys():
                    brand_count[brand_name] = 0
                brand_count[brand_name] += 1

output_path = './brands.json'

import json

with open(output_path, 'wt') as f:
    f.write(json.dumps(brand_count, indent=2))
    f.close()
