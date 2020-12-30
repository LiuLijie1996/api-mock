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
        url: 'http://192.168.0.8:88/index.php/v2/news/getIndexNewsList',
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
        url: 'http://192.168.0.8:88/index.php/v2/news/getNewsItemList',
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
        url: 'http://192.168.0.8:88/index.php/v2/news/newsList',
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
        url: 'http://192.168.0.8:88/index.php/v2/news/getNewsOne',
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

  // 新闻阅读完成
  @All('newsUserScore')
  index5(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('新闻阅读完成');

    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/news/newsUserScore',
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
        url: 'http://192.168.0.8:88/index.php/v2/news/saveUserUpvote',
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
        url: 'http://192.168.0.8:88/index.php/v2/news/getNewsCollect',
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
