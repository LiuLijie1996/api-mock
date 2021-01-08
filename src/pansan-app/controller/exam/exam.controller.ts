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
        url: 'http://192.168.0.8:88/index.php/appApi/test/newKaoshi',
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
        url: 'http://192.168.0.8:88/index.php/appApi/test/getTestItemList',
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
        url:
          'http://192.168.0.8:88/index.php/appApi/Practice/getPracticeItemList',
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
        url: 'http://192.168.0.8:88/index.php/appApi/test/kaoTi',
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
      console.log('考试考题', options);

      request(options, (err, req, body) => {
        console.log(JSON.parse(body));
        let data = JSON.parse(body).data;
        delete data.list;
        console.log(data);

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
        url: 'http://192.168.0.8:88/index.php/appApi/test/getTestList',
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
        url: 'http://192.168.0.8:88/index.php/appApi/test/saveUserTest',
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
        url:
          'http://192.168.0.8:88/index.php/appApi/Practice/getAllQuestionItemList',
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
        url: 'http://192.168.0.8:88/index.php/appApi/Practice/getQuestionList',
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
        url: 'http://192.168.0.8:88/index.php/appApi/user/saveeErrorCorrection',
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
        url: 'http://192.168.0.8:88/index.php/appApi/user/addQuestionCollect',
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
