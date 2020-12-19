import { All, Body, Controller, Query, Response } from '@nestjs/common';
import * as request from 'request';

@Controller('api/exercise')
export class ExerciseController {
  // 练习列表
  @All('getPracticeList')
  index5(@Response() res, @Body() body, @Query() query) {
    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/Practice/getPracticeList',
        method: 'post',
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
    }, 2000);
  }
  // 练习详情
  @All('getOnePractice')
  index6(@Response() res, @Body() body, @Query() query) {
    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/Practice/getOnePractice',
        method: 'post',
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
    }, 2000);
  }
}
