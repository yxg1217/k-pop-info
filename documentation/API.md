<h1 align="center" id="0">API 文档</h1> 



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

| Attribute | Description | Example |
|:----------------:|:----------------:|:-----------:|
| name | Name of the song | Save Me|
| singer | Singer's name | BTS |
| yearPublic | publish time | 2016-01-01T07:42:10.800Z |
| addDate | add time | 2018-04-01T07:42:10.800Z |

**Example:**

~~~bash
curl -H "Content-Type: application/json" \
-X POST "http://localhost:3000/music" \
-d '{"name":"Save Me", "singer":"BTS", "yearPublic":"2016-01-01T07:42:10.800Z", "addDate":"2016-01-01T07:42:10.800Z"}'

~~~

