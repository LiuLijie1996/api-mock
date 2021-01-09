import {
  All,
  Controller,
  Response,
  Body,
  Query,
  Request,
} from '@nestjs/common';
import common from '../common';
import * as request from 'request';

@Controller('pansanApp/api/score')
export class ScoreController {
  // 积分明细
  @All('getUserScoreList')
  index1(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('积分明细');

    setTimeout(() => {
      let options = {
        url: common.normal + '/user/getUserScoreList',
        method: 'post',
        headers: {
          token: req.headers.token,
        },
        form: {
          ...query,
          ...body,
        },
      };
      console.log(options);

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
  index2(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('积分规则');

    setTimeout(() => {
      let options = {
        url: common.normal + '/score/getScoreRule',
        method: 'post',
        headers: { token: '5e80dabd1caa00b0e82b15efacc051c1', versionCode: 1 },
        form: {
          nonce: 'iNAZZB',
          t: 1610177810679,
          sign: 'FA2D35DD22EE51B905172014F282F319',
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
  index3(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('积分商品');

    setTimeout(() => {
      let options = {
        url: common.normal + '/score/goodsList',
        method: 'post',
        headers: {
          token: req.headers.token,
        },
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
  index4(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('兑换记录');

    setTimeout(() => {
      let options = {
        url: common.normal + '/user/getUserScoreExchange',
        method: 'post',
        headers: {
          token: req.headers.token,
        },
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
  index5(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('兑换商品');

    setTimeout(() => {
      let options = {
        url: common.normal + '/score/userExchangeScore',
        method: 'post',
        headers: {
          token: req.headers.token,
        },
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
