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
    console.log('/api/index接口数据', { ...body, ...query });

    return { ...body, ...query };
  }

  // 轮播图
  @All('banner')
  index1(@Request() req, @Response() res, @Body() body, @Query() query) {
    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/appApi/index/indexBanner',
        method: 'post',
        headers: {
          versionCode: req.headers.versioncode,
          token: req.headers.token,
        },
        form: {
          ...body,
          ...query,
        },
      };
      console.log('轮播图', options);

      request(options, (err, req, body) => {
        try {
          res.send(JSON.parse(body));
        } catch (error) {
          res.send(body);
        }
      });
    }, common.millisecond);
  }

  // 检查更新
  @All('version')
  index2(@Request() req, @Response() res, @Body() body, @Query() query) {
    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/appApi/login/version',
        method: 'post',
        headers: {
          token: req.headers.token,
          versionCode: req.headers.versioncode,
        },
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
