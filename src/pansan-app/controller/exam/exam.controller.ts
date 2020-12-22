import common from '../common';
import { All, Body, Controller, Query, Response } from '@nestjs/common';
import * as request from 'request';

@Controller('pansanApp/api/exam')
export class ExamController {
  // 最新考试
  @All('newKaoshi')
  index1(@Response() res, @Body() body, @Query() query) {
    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/test/newKaoshi',
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

  // 我要考试分类
  @All('getTestItemList')
  index2(@Response() res, @Body() body, @Query() query) {
    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/test/getTestItemList',
        method: 'get',
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

  // 我要练习分类
  @All('getPracticeItemList')
  index3(@Response() res, @Body() body, @Query() query) {
    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/Practice/getPracticeItemList',
        method: 'get',
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

  // 考试考题
  @All('kaoTi')
  index4(@Response() res, @Body() body, @Query() query) {
    console.log(body.type, body.id);

    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/test/kaoTi',
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

  // 考试考题
  @All('getTestList')
  index5(@Response() res, @Body() body, @Query() query) {
    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/test/getTestList',
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

  // 考试结束提交试卷
  @All('saveUserTest')
  index6(@Response() res, @Body() body, @Query() query) {
    console.log({ ...body, ...query });

    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/test/saveUserTest',
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
    res.send({ code: 200 });
  }
}
