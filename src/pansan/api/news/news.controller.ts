import { All, Body, Controller, Query, Response } from '@nestjs/common';
import * as request from 'request';

@Controller('api/news')
export class NewsController {
  // 推荐新闻
  @All('getIndexNewsList')
  index1(@Response() res, @Body() body, @Query() query) {
    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/news/getIndexNewsList',
        method: 'post',
        form: {
          ...body,
          ...query,
        },
      };
      request(options, (err, req, body) => {
        try {
          res.send(JSON.parse(body));
        } catch (error) {
          res.send(body);
        }
      });
    }, 2000);
  }

  // 新闻导航
  @All('getNewsItemList')
  index2(@Response() res, @Body() body, @Query() query) {
    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/news/getNewsItemList',
        method: 'get',
        form: {
          ...body,
          ...query,
        },
      };
      request(options, (err, req, body) => {
        try {
          res.send(JSON.parse(body));
        } catch (error) {
          res.send(body);
        }
      });
    }, 2000);
  }
}
