<h1 align="center">K Pop Information System</h1>


## Pre-requirements
---

1. Install the docker-compose in order to launch MongoDB
2. Launch MongoDB
3. Install dependencies with npm install
4. Install Scrapy with Python3 (install Python3 if not installed)
6. Install PyMongo

## Start the application 

1. Verify the DB
Before starting this Node services, we should first start our MongoDB Database, to achieve this:
                
> docker-compose up

In a production mode, run docker-compose -d up letting the container run in background. 

3.Store data into db

>scrapy crawl importData/kpoplist/kpoplist

3. Produce json file: kpopgroups.json

>python3 models/datagroups.py

