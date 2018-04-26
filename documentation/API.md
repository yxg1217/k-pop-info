<h1 align="center" id="0">Information sur la K-pop</h1>



---

**Table of Content:**


- [1 Music](#music)
- [2 Singer](#singer)
- [3 Member](#member)

---


<h2 id="music">1. music</h2>

We read all the infomations of the music here

<h3 id="piao-insert">1.1 music info </h3>


**Access Point**:

| Method | Path |
|:----------------:|:----------------:|
| POST | /music |

**Content**:

{"name":"bubble", "children":[
{"image":"pathTo/example.jpg","description":"BTS",
"children":[
    {"name": "Bangtan Boys"},
    {"origin": "Seoul, South Korea"},
    {"genres_str": "K-pop hip hop[1] R&B EDM"},
    {"years_active": "2013–present"},
    {"labels": "Big Hit Entertainment Pony Canyon Def Jam Japan"},
    {"website":"bts.ibighit.com"},
    {"members_str":"Jin,Suga,J-Hope,RM,Jimin,V,Jungkook}
]}
]}
**Example:**

~~~bash
curl -H "Content-Type: application/json" \
-X POST "http://localhost:3000/music" \
-d '{"name":"Save Me", "singer":"BTS", "yearPublic":"2016-01-01T07:42:10.800Z", "addDate":"2016-01-01T07:42:10.800Z"}'

~~~
