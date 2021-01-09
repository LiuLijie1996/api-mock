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

@Controller('pansanApp/api/exam')
export class ExamController {
  // 最新考试
  @All('newKaoshi')
  index1(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('最新考试');

    setTimeout(() => {
      let options = {
        url: common.normal + '/test/newKaoshi',
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
      console.log(options);

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
  index2(@Request() req, @Response() res, @Body() body, @Query() query) {
    setTimeout(() => {
      let options = {
        url: common.normal + '/test/getTestItemList',
        method: 'get',
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

  // 我要练习分类
  @All('getPracticeItemList')
  index3(@Request() req, @Response() res, @Body() body, @Query() query) {
    setTimeout(() => {
      let options = {
        url: common.normal + '/Practice/getPracticeItemList',
        method: 'get',
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

  // 考试考题
  @All('kaoTi')
  index4(@Request() req, @Response() res, @Body() body, @Query() query) {
    setTimeout(() => {
      let options = {
        url: common.normal + '/test/kaoTi',
        method: 'post',
        headers: { token: '5e80dabd1caa00b0e82b15efacc051c1', versionCode: 1 },
        form: {
          user_id: 5019,
          id: 256,
          type: 2,
          nonce: 'ttB6mf',
          t: 1610183400585,
          sign: 'B863A8CCBF4F55936DBA05B9899827BF',
        },
      };
      console.log('考试考题', options);

      request(options, (err, req, body) => {
        try {
          res.send(JSON.parse(body));
        } catch (error) {
          res.send(body);
        }
      });
    }, common.millisecond);
  }

  // 考试列表
  @All('getTestList')
  index5(@Request() req, @Response() res, @Body() body, @Query() query) {
    setTimeout(() => {
      let options = {
        url: common.normal + '/test/getTestList',
        method: 'post',
        headers: {
          token: req.headers.token,
          versionCode: req.headers.versioncode,
        },
        form: {
          ...query,
          ...body,
        },
      };
      request(options, (err, req, body) => {
        console.log(JSON.parse(body));

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
  index6(@Request() req, @Response() res, @Body() body, @Query() query) {
    setTimeout(() => {
      let options = {
        url: common.normal + '/test/saveUserTest',
        method: 'post',
        headers: {
          token: req.headers.token,
          versionCode: req.headers.versioncode,
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

    // res.send({ code: 200 });
  }

  // 获取专项练习列表
  @All('exerciseSpecialtySelect')
  index7(@Request() req, @Response() res, @Body() body, @Query() query) {
    setTimeout(() => {
      let options = {
        url: common.normal + '/Practice/getAllQuestionItemList',
        method: 'post',
        headers: {
          token: req.headers.token,
          versionCode: req.headers.versioncode,
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

  // 获取专项练习列表中的题目
  @All('getQuestionList')
  index8(@Request() req, @Response() res, @Body() body, @Query() query) {
    setTimeout(() => {
      let options = {
        url: common.normal + '/Practice/getQuestionList',
        method: 'post',
        headers: {
          token: req.headers.token,
          versionCode: req.headers.versioncode,
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

  // 题目纠错
  @All('saveeErrorCorrection')
  index9(@Request() req, @Response() res, @Body() body, @Query() query) {
    setTimeout(() => {
      let options = {
        url: common.normal + '/user/saveeErrorCorrection',
        method: 'post',
        headers: {
          token: req.headers.token,
          versionCode: req.headers.versioncode,
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

  // 题目收藏
  @All('addQuestionCollect')
  index10(@Request() req, @Response() res, @Body() body, @Query() query) {
    setTimeout(() => {
      let options = {
        url: common.normal + '/user/addQuestionCollect',
        method: 'post',
        headers: {
          token: req.headers.token,
          versionCode: req.headers.versioncode,
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
