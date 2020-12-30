import common from '../common';
import {
  All,
  Body,
  Controller,
  Post,
  Query,
  Request,
  Response,
} from '@nestjs/common';
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
  index1(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log(req.headers.token);

    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/index/indexBanner',
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
        console.log(body);

        try {
          res.send(JSON.parse(body));
        } catch (error) {
          res.send(body);
        }
      });
    }, common.millisecond);
  }
}
