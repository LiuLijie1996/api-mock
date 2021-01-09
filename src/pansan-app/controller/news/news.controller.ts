import common from '../common';
import {
  All,
  Body,
  Controller,
  Query,
  Response,
  Request,
} from '@nestjs/common';
import * as request from 'request';

@Controller('pansanApp/api/news')
export class NewsController {
  // 推荐新闻
  @All('getIndexNewsList')
  index1(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('推荐新闻', common);

    setTimeout(() => {
      let options = {
        url: common.normal + '/news/getIndexNewsList',
        method: 'post',
        headers: {
          token: req.headers.token,
        },
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
  index2(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('新闻导航', common);

    setTimeout(() => {
      let options = {
        url: common.normal + '/news/getNewsItemList',
        method: 'get',
        headers: {
          token: req.headers.token,
        },
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
  index3(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('通过导航获取新闻', common);

    setTimeout(() => {
      let options = {
        url: common.normal + '/news/newsList',
        method: 'post',
        headers: {
          token: req.headers.token,
        },
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
  index4(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('新闻详情');

    setTimeout(() => {
      let options = {
        url: common.normal + '/news/getNewsOne',
        method: 'post',
        headers: { token: '5e80dabd1caa00b0e82b15efacc051c1', versionCode: 1 },
        form: {
          id: 180,
          nonce: 'AZBzCN',
          t: 1610181119378,
          sign: '45A0B4FEDB8E45D4A3772D9B13A55F7C',
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
  index5(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('新闻阅读完成');

    setTimeout(() => {
      let options = {
        url: common.normal + '/news/newsUserScore',
        method: 'post',
        headers: {
          token: req.headers.token,
        },
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

  // 新闻点赞
  @All('saveUserUpvote')
  index6(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('新闻点赞');

    setTimeout(() => {
      let options = {
        url: common.normal + '/news/saveUserUpvote',
        method: 'post',
        headers: {
          token: req.headers.token,
        },
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

  // 获取收藏的新闻
  @All('getNewsCollect')
  index7(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('获取收藏的新闻');

    setTimeout(() => {
      let options = {
        url: common.normal + '/news/getNewsCollect',
        method: 'post',
        headers: {
          token: req.headers.token,
        },
        form: {
          ...body,
          ...query,
        },
        qs: {
          ...body,
          ...query,
        },
      };
      console.log(options.form);

      request(options, (err, req, body) => {
        try {
          res.send(JSON.parse(body));
        } catch (error) {
          res.send(body);
        }
      });
    }, common.millisecond);
  }

  // 收藏新闻
  @All('addNewsCollect')
  index8(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('收藏新闻');

    setTimeout(() => {
      let options = {
        url: common.normal + '/news/addNewsCollect',
        method: 'post',
        headers: {
          token: req.headers.token,
        },
        form: {
          ...body,
          ...query,
        },
        qs: {
          ...body,
          ...query,
        },
      };
      console.log(options.form);

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
