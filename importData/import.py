import requests
import datetime
import time



dt = datetime.datetime(2016,01,01)
s = time.mktime(dt.timetuple())
r=requests.post('http://localhost:3000/music', json={"name":"Save Me", "singer":"BTS", "yearPublic":s, "addDate":s});
