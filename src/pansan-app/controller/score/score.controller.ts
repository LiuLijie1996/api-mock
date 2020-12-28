import { All, Controller, Response, Body, Query } from '@nestjs/common';
import common from '../common';
import * as request from 'request';

@Controller('pansanApp/api/score')
export class ScoreController {
  // 积分明细
  @All('getUserScoreList')
  index1(@Response() res, @Body() body, @Query() query) {
    console.log('积分明细');

    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/user/getUserScoreList',
        method: 'post',
        form: {
          ...query,
          ...body,
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

  // 积分规则
  @All('getScoreRule')
  index2(@Response() res, @Body() body, @Query() query) {
    console.log('积分规则');

    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/score/getScoreRule',
        method: 'post',
        form: {
          ...query,
          ...body,
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

  // 积分商品
  @All('goodsList')
  index3(@Response() res, @Body() body, @Query() query) {
    console.log('积分商品');

    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/score/goodsList',
        method: 'post',
        form: {
          ...query,
          ...body,
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

  // 兑换记录
  @All('getUserScoreExchange')
  index4(@Response() res, @Body() body, @Query() query) {
    console.log('兑换记录');

    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/user/getUserScoreExchange',
        method: 'post',
        form: {
          ...query,
          ...body,
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

  // 兑换商品
  @All('userExchangeScore')
  index5(@Response() res, @Body() body, @Query() query) {
    console.log('兑换商品');

    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/score/userExchangeScore',
        method: 'post',
        form: {
          ...query,
          ...body,
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
