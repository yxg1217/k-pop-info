<h1 align="center" id="0">API 文档</h1>



---

**Table of Content:**


- [1 Music](#music)
- [2 Singer](#singer)

---


<h2 id="singer">1. singer</h2>

We read all the infomations of the singers here

<h3 id="singer-insert">1.1 singer info </h3>


**Access Point**:

| Method | Path |
|:----------------:|:----------------:|
| POST | /singer |

**Content**:

{"name":"bubble", "children":[
{"image":"pathTo/example.jpg","description":"BTS",
"children":[
    {"name": "Bangtan Boys"},
    {"fleur": "cerclefleur.png"},
    {"link": "http://2am.jype.com"},
    {"origin": "Seoul, South Korea"},
    {"genres_str": "K-pop hip hop[1] R&B EDM"},
    {"labels": "Big Hit Entertainment Pony Canyon Def Jam Japan"},
    {"members_str":"Jin,Suga,J-Hope,RM,Jimin,V,Jungkook}
]}

**Example:**

~~~bash
curl -H "Content-Type: application/json" \
-X POST "http://localhost:3000/singer" \
-d '{"name":"Bangtan Boys", "link": "http://2am.jype.com", "origin": "Seoul, South Korea","genres_str": "K-pop hip hop[1] R&B EDM","labels": "Big Hit Entertainment Pony Canyon Def Jam Japan","members_str":"Jin,Suga,J-Hope,RM,Jimin,V,Jungkook}'

~~~
