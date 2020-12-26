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
        url: '',
        method: 'post',
        form: {
          ...query,
          ...body,
        },
      };

      // request(options, (err, req, body) => {
      //   try {
      //     res.send(JSON.parse(body));
      //   } catch (error) {
      //     res.send(body);
      //   }
      // });

      res.send({
        code: 200,
        msg: '提交成功',
        data: options.form,
      });
    }, common.millisecond);
  }
}
