import pymongo
from pymongo import MongoClient
import pprint
import json
from bson import json_util

client = MongoClient()
db = client.kpopproject
kpopg = db.kpop_groups
data = {'name': 'Kpop', 'image': 'https://cdn.pixabay.com/photo/2017/06/26/20/33/icon-2445092_960_720.png', 'children': []}
NPERNODE = 10
i = 0
#Faire des groupes de 10 pour chaque noeud
for record in kpopg.find():
    if i%NPERNODE == 0:
        data['children'].append({
        'name':'Group'+str(int(i/NPERNODE)),
        'children': []
        })
    #Creer tableau de dict avec les NPERNODE groupes pour chaque noeud
    d_tmp = dict(record)
    d_tmp['fleur'] = 'https://cdn.pixabay.com/photo/2012/05/07/15/46/white-48645_960_720.png'
    data['children'][int(i/NPERNODE)]['children'].append(d_tmp)
    i+=1

with open('/home/chou/Documents/M1/BasedeDonnees/KpopInfo/k-pop-info/public/kpopgroups.json', 'w') as outfile:
     json.dump(data, outfile, indent = 4, default=json_util.default)
#line = json.dumps(data, default=json_util.default)
#print(line)
