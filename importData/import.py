import requests
import datetime
import time



dt = datetime.datetime(2011,12,13)
s = time.mktime(dt.timetuple())
r=requests.post('http://localhost:3000/music', json={"name":"hello", "singer":"world", "yearPublic":s, "addDate":s});
