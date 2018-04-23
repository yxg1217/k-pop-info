import scrapy


class KpopurlsSpider(scrapy.Spider):
    name = "kpopurls"
    start_urls = [
        'https://en.wikipedia.org/wiki/Category:K-pop_music_groups'
    ]

    def parse(self, response):
        for kpopurls in response.css('div.mw-parser-output'):
            yield {
            'urls' : response.xpath('//div[@class="mw-category"]//div/ul//li/a/@href').extract()
            }
