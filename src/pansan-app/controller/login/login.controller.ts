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

@Controller('pansanApp/api/login')
export class LoginController {
  // 登录
  @All('login')
  index1(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('登录');

    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/login/login',
        method: 'post',
        headers: req.headers,
        form: {
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
