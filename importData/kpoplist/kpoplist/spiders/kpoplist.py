import scrapy
from kpoplist.items import KpoplistItem

class KpoplistSpider(scrapy.Spider):
    name = "kpoplist"
    with open('/home/chou/Documents/M1/BasedeDonnees/Kpop/kpop/kpopurls/kpopurls.csv', 'r') as f:
      urllist = f.read()
    tmp = urllist.split(",")
    start_urls = []
    for u in tmp:
            start_urls.append("https://en.wikipedia.org"+u)

    def parse(self, response):
        for kpoplist in response.css('div.mw-parser-output'):
            item = KpoplistItem()


            tmp_list = response.xpath('//table[@class="infobox vcard plainlist"]//img/@src').extract()
            item['image'] = ''.join(tmp_list)

            tmp_list = response.xpath('//span[@class="fn org"]/text()').extract()
            item['name'] = ''.join(tmp_list)

            tmp_list = response.xpath('//td[@class="nickname"]//li//text()').extract()
            item['alias'] = ','.join(tmp_list)

            tmp_list = response.xpath('//th[@scope="row"][contains(text(),"Origin")]/following-sibling::td//text()').extract()
            tmp_list = [it.strip(',\n1234567890[] ') for it in tmp_list]
            item['origin'] = ','.join(filter(None, tmp_list))

            tmp_list = response.xpath('//th[@scope="row"][contains(text(),"Genres")]/following-sibling::td//text()').extract()
            tmp_list = [it.strip(',\n1234567890[] ') for it in tmp_list]
            item['genres_str'] = ','.join(filter(None, tmp_list))

            tmp_list = response.xpath('//th[@scope="row"][contains(text(),"Labels")]/following-sibling::td//text()').extract()
            tmp_list = [it.strip(',\n1234567890[] ') for it in tmp_list]
            item['labels'] = ','.join(filter(None, tmp_list))

            tmp_list = response.xpath('//th[@scope="row"][contains(text(),"Website")]/following-sibling::td//@href').extract()
            item['link'] = ''.join(tmp_list)

            tmp_list = response.xpath('//th[@scope="row"][contains(text(),"Members")]/following-sibling::td//text()').extract()
            tmp_list = [it.strip(',\n1234567890[] ') for it in tmp_list]
            item['members_str'] = ','.join(filter(None, tmp_list))

            yield item
