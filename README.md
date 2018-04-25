<h1 align="center">K Pop Information System</h1>


## Pre-requirements
---

1. Install the docker-compose in order to launch MongoDB
2. Launch MongoDB
3. Install dependencies with npm install

## Start the application 

1. Verify the DB

Before starting this Node services, we should first start our MongoDB Database, to achieve this:
                
> docker-compose up

Then all the Data persistent will be saved to ./Mongodb-mount

In a production mode, run docker-compose -d up letting the container run in background. 

2. npm start 

3. Add Datas: kpopgroups.json


## Annexe 

<a herf="./documents/api.md">API DOC</a>
