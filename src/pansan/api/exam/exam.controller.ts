import { All, Body, Controller, Query, Response } from '@nestjs/common';
import * as request from 'request';

@Controller('api/exam')
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
    }, 2000);
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
    }, 2000);
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
    });
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
    }, 2000);
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
    }, 2000);
  }
}
