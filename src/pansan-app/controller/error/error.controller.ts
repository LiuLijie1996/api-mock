import common from '../common';
import * as request from 'request';
import {
  All,
  Body,
  Controller,
  Query,
  Request,
  Response,
} from '@nestjs/common';

@Controller('pansanApp/api/error')
export class ErrorController {
  @All()
  index1(@Request() req, @Response() res, @Body() body, @Query() query) {
    setTimeout(() => {
      let options = {
        url: common.normal + '/base/saveErrorLog',
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
