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

@Controller('pansanApp/api/exercise')
export class ExerciseController {
  // 练习列表
  @All('getPracticeList')
  index5(@Request() req, @Response() res, @Body() body, @Query() query) {
    setTimeout(() => {
      let options = {
        url: common.normal + '/Practice/getPracticeList',
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
        try {
          res.send(JSON.parse(body));
        } catch (error) {
          res.send(body);
        }
      });
    }, common.millisecond);
  }
  // 练习详情
  @All('getOnePractice')
  index6(@Request() req, @Response() res, @Body() body, @Query() query) {
    setTimeout(() => {
      let options = {
        url: common.normal + '/Practice/getOnePractice',
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
        try {
          res.send(JSON.parse(body));
        } catch (error) {
          res.send(body);
        }
      });
    }, common.millisecond);
  }

  // 普通练习提交数据
  @All('saveUserPractice')
  index9(@Request() req, @Response() res, @Body() body, @Query() query) {
    setTimeout(() => {
      let options = {
        url: common.normal + '/Practice/saveUserPractice',
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
