__author__ = 'rcj1492'
__created__ = '2017.03'
__license__ = 'MIT'

import csv
est_path = '../data/insights/bar_products with IDs.csv'

prod_map = {}
with open(est_path, 'rt', encoding='utf-8') as f:
    est_reader = csv.DictReader(f)
    for row in est_reader:
        prod_map[row['bar_product_id']] = row['External_id']

establishment_count = {}

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
                product_id = row['bar_product_id']
                product_name = row['Product_Name'].lower()
                try:
                    product_price = float(row['price'])
                except:
                    product_price = 0.0
                product_type = row['category_name']
                establishment_id = ''
                if product_id in prod_map.keys():
                    establishment_id = prod_map[product_id]
                if establishment_id:
                    if not establishment_id in establishment_count.keys():
                        establishment_count[establishment_id] = {}
                    est_map = establishment_count[establishment_id]
                    if not product_name in est_map.keys():
                        est_map[product_name] = { 'c': 0, 't': product_type, 'p': product_price }
                    est_map[product_name]['c'] += 1

output_path = './menus.json'

import json

with open(output_path, 'wt') as f:
    f.write(json.dumps(establishment_count, indent=2))
    f.close()
