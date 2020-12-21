import common from '../common';
import { All, Body, Controller, Post, Query, Response } from '@nestjs/common';
import * as request from 'request';

@Controller('pansanApp/api/index')
export class IndexController {
  @Post()
  index(@Body() body, @Query() query) {
    console.log({ ...body, ...query });

    return { ...body, ...query };
  }

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
    }, common.millisecond);
  }
}
