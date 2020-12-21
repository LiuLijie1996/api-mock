import common from '../common';
import { All, Body, Controller, Query, Response } from '@nestjs/common';
import * as request from 'request';

@Controller('pansanApp/api/user')
export class UserController {
  // 用户一日一题列表
  @All('getTodayUserStudy')
  index1(@Response() res, @Body() body, @Query() query) {
    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/user/getTodayUserStudy',
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

  // 职工服务
  @All('getUserServiceList')
  index2(@Response() res, @Body() body, @Query() query) {
    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/user/getUserServiceList',
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
