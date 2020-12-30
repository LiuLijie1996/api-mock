import common from '../common';
import * as request from 'request';
import { All, Body, Controller, Query, Response } from '@nestjs/common';

@Controller('pansanApp/api/error')
export class ErrorController {
  @All()
  index1(@Response() res, @Body() body, @Query() query) {
    console.log({
      ...query,
      ...body,
    });

    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/base/saveErrorLog',
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
