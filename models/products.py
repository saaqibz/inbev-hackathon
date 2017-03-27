__author__ = 'rcj1492'
__created__ = '2017.03'
__license__ = 'MIT'

import csv
est_path = '../data/insights/bar_products with IDs.csv'

prod_map = {}
prod_list = []
with open(est_path, 'rt', encoding='utf-8') as f:
    est_reader = csv.DictReader(f)
    for row in est_reader:
        if row['External_id'] == '212434':
            prod_map[row['bar_product_id']] = {}

for i in range(5):
    if i == 0:
        pass
    else:
        print(i)
        file_path = '../data/insights/POS Table %s.csv' % str(i)
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as csv_file:
            csv_reader = csv.DictReader(csv_file)
            for row in csv_reader:
                if row['bar_product_id'] in prod_map.keys():
                    if not prod_map[row['bar_product_id']]:
                        details = {
                            'product_name': row['Product_Name'].lower(),
                            'product_type': row['category_name'],
                            'product_id': row['bar_product_id'],
                            'brand_name': '',
                            'product_price': 0.0
                        }
                        if row['brand_name'] != 'NULL':
                            details['brand_name'] = row['brand_name']
                        try:
                            details['product_price'] = float(row['price'])
                        except:
                            pass
                        prod_list.append(details)
                        prod_map[row['bar_product_id']] = details

output_path = './products.json'

import json

with open(output_path, 'wt') as f:
    f.write(json.dumps(prod_list, indent=2))
    f.close()