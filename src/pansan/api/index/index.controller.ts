import { All, Body, Controller, Query, Response } from '@nestjs/common';
import * as request from 'request';

@Controller('api/index')
export class IndexController {
  // 轮播图
  @All('banner')
  index1(@Response() res, @Body() body, @Query() query) {
    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/index/indexBanner',
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
    }, 2000);
  }
}
