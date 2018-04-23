# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class KpoplistItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    '''
    Defining the storage containers for the data we
    plan to scrape
    '''

    image = scrapy.Field()
    name = scrapy.Field()
    alias = scrapy.Field()
    origin = scrapy.Field()
    genres_str = scrapy.Field()
    labels = scrapy.Field()
    link = scrapy.Field()
    members_str = scrapy.Field()
