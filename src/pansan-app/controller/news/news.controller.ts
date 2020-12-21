import common from '../common';
import { All, Body, Controller, Query, Response } from '@nestjs/common';
import * as request from 'request';

@Controller('pansanApp/api/news')
export class NewsController {
  // 推荐新闻
  @All('getIndexNewsList')
  index1(@Response() res, @Body() body, @Query() query) {
    console.log('推荐新闻', common);

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
    }, common.millisecond);
  }

  // 新闻导航
  @All('getNewsItemList')
  index2(@Response() res, @Body() body, @Query() query) {
    console.log('新闻导航', common);

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
    }, common.millisecond);
  }

  // 通过导航获取新闻
  @All('newsList')
  index3(@Response() res, @Body() body, @Query() query) {
    console.log('通过导航获取新闻', common);

    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/news/newsList',
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
    }, common.millisecond);
  }

  // 新闻详情
  @All('getNewsOne')
  index4(@Response() res, @Body() body, @Query() query) {
    console.log('新闻详情');

    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/news/getNewsOne',
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
    }, common.millisecond);
  }

  // 新闻阅读完成
  @All('newsUserScore')
  index5(@Response() res, @Body() body, @Query() query) {
    console.log('新闻阅读完成');

    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/news/newsUserScore',
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
    }, common.millisecond);
  }
}
