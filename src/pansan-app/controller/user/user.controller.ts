import common from '../common';
import * as request from 'request';
import {
  All,
  Body,
  Controller,
  Query,
  Response,
  Request,
} from '@nestjs/common';

@Controller('pansanApp/api/user')
export class UserController {
  // 用户一日一题列表
  @All('getTodayUserStudy')
  index1(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('用户一日一题列表');

    setTimeout(() => {
      let options = {
        url: common.normal + '/user/getTodayUserStudy',
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
          console.log(JSON.parse(body));

          res.send(JSON.parse(body));
        } catch (error) {
          res.send(body);
        }
      });
    }, common.millisecond);
  }

  // 职工服务
  @All('getUserServiceList')
  index2(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('职工服务');

    setTimeout(() => {
      let options = {
        url: common.normal + '/user/getUserServiceList',
        method: 'post',
        headers: {
          token: req.headers.token,
        },
        form: {
          ...query,
          ...body,
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
    }, common.millisecond);
  }

  // 添加咨询
  @All('addUserService')
  index3(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('添加咨询');

    setTimeout(() => {
      let options = {
        url: common.normal + '/user/addUserService',
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

  // 获取咨询详情
  @All('getUserServiceReply')
  index4(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('获取咨询详情');

    setTimeout(() => {
      let options = {
        url: common.normal + '/user/getUserServiceReply',
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

  // 获取我的班级
  @All('getUserClass')
  index5(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('获取我的班级');

    setTimeout(() => {
      let options = {
        url: common.normal + '/user/getUserClass',
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

  // 获取考勤记录
  @All('getAttendDetail')
  index6(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('获取考勤记录');

    setTimeout(() => {
      let options = {
        url: common.normal + '/user/getAttendDetail',
        method: 'post',
        headers: {
          token: req.headers.token,
        },
        form: {
          ...query,
          ...body,
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
    }, common.millisecond);
  }

  // 获取课程计划
  @All('getTimeTableList')
  index7(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('获取课程计划');

    setTimeout(() => {
      let options = {
        url: common.normal + '/user/getTimeTableList',
        method: 'post',
        headers: {
          token: req.headers.token,
        },
        form: {
          ...query,
          ...body,
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
    }, common.millisecond);
  }

  // 获取考试排行
  @All('testRankList')
  index8(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('获取考试排行');

    setTimeout(() => {
      let options = {
        url: common.normal + '/user/testRankList',
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

  // 获取考试时间线
  @All('getTestList')
  index9(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('获取考试时间线');

    setTimeout(() => {
      let options = {
        url: common.normal + '/user/getTestList',
        method: 'post',
        headers: { token: '5e80dabd1caa00b0e82b15efacc051c1', versionCode: 1 },
        form: {
          id: 2,
          nonce: 'Si7wFM',
          t: 1610094915365,
          sign: '8FE80276BEECFC056481BE64F0B6ABF9',
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
    }, common.millisecond);
  }

  // 获取我的课程
  @All('getUserCourseList')
  index10(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('获取我的课程');

    setTimeout(() => {
      let options = {
        url: common.normal + '/user/getUserCourseList',
        method: 'post',
        headers: {
          token: req.headers.token,
        },
        form: {
          ...query,
          ...body,
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
    }, common.millisecond);
  }

  // 获取我的错题
  @All('getUserErrQuestion')
  index11(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('获取我的错题', req.headers.token);

    setTimeout(() => {
      let options = {
        url: common.normal + '/user/getUserErrQuestion',
        method: 'post',
        headers: {
          token: req.headers.token,
        },
        form: {
          ...query,
          ...body,
        },
      };

      console.log(options.headers);

      request(options, (err, req, body) => {
        try {
          res.send(JSON.parse(body));
        } catch (error) {
          console.log(body);

          res.send(body);
        }
      });
    }, common.millisecond);
  }

  // 获取收藏的题目
  @All('getQuestionCollect')
  index12(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('获取收藏的题目');

    setTimeout(() => {
      let options = {
        url: common.normal + '/user/getQuestionCollect',
        method: 'post',
        headers: {
          token: req.headers.token,
        },
        form: {
          ...query,
          ...body,
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
    }, common.millisecond);
  }

  // 获取考试记录
  @All('getUserTestRecordList')
  index13(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('获取考试记录');

    setTimeout(() => {
      let options = {
        url: common.normal + '/user/getUserTestRecordList',
        method: 'post',
        headers: {
          token: req.headers.token,
        },
        form: {
          ...query,
          ...body,
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
    }, common.millisecond);
  }

  // 获取考试记录对应的考题
  @All('getUserTestAnswerList')
  index14(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('获取考试记录对应的考题');

    setTimeout(() => {
      let options = {
        url: common.normal + '/user/getUserTestAnswerList',
        method: 'post',
        headers: { token: '5e80dabd1caa00b0e82b15efacc051c1', versionCode: 1 },
        form: {
          user_id: 5019,
          test_id: 256,
          test_type: 2,
          nonce: 'wESjFK',
          t: 1610336452054,
          sign: 'C6C89E542FDCEA9DD9BA6B9F48B59ADD',
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
    }, common.millisecond);
  }

  // 一日一题详情
  @All('getOneTodayStudy')
  index15(@Request() req, @Response() res, @Body() body, @Query() query) {
    setTimeout(() => {
      let options = {
        url: common.normal + '/user/getOneTodayStudy',
        method: 'post',
        headers: {
          token: req.headers.token,
        },
        form: {
          ...query,
          ...body,
        },
      };

      console.log(options.form);

      request(options, (err, req, body) => {
        console.log('一日一题详情', body);

        try {
          res.send(JSON.parse(body));
        } catch (error) {
          res.send(body);
        }
      });
    }, common.millisecond);
  }

  // 一日一题阅读完成
  @All('saveTodayStudy')
  index16(@Request() req, @Response() res, @Body() body, @Query() query) {
    setTimeout(() => {
      let options = {
        url: common.normal + '/user/saveTodayStudy',
        method: 'post',
        headers: {
          token: req.headers.token,
        },
        form: {
          ...query,
          ...body,
        },
      };

      console.log(options.form);

      request(options, (err, req, body) => {
        console.log('一日一题阅读完成', body);

        try {
          res.send(JSON.parse(body));
        } catch (error) {
          res.send(body);
        }
      });
    }, common.millisecond);
  }

  // 证书详情
  @All('getUserCert')
  index17(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('证书详情');

    setTimeout(() => {
      let options = {
        url: common.normal + '/user/getUserCert',
        method: 'post',
        headers: {
          token: req.headers.token,
        },
        form: {
          ...query,
          ...body,
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
    }, common.millisecond);
  }

  // 通知公告
  @All('getUserMessage')
  index18(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('通知公告');

    setTimeout(() => {
      let options = {
        url: common.normal + '/user/getUserMessage',
        method: 'post',
        headers: {
          token: req.headers.token,
        },
        form: {
          ...query,
          ...body,
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
    }, common.millisecond);
  }

  // 发送已读通知公告
  @All('saveUserMessage')
  index19(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('发送已读通知公告');

    setTimeout(() => {
      let options = {
        url: common.normal + '/user/saveUserMessage',
        method: 'post',
        headers: {
          token: req.headers.token,
        },
        form: {
          ...query,
          ...body,
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
    }, common.millisecond);
  }

  // 公告详情
  @All('getOneMessage')
  index20(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('公告详情');

    setTimeout(() => {
      let options = {
        url: common.normal + '/user/getOneMessage',
        method: 'post',
        headers: {
          token: req.headers.token,
        },
        form: {
          ...query,
          ...body,
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
    }, common.millisecond);
  }

  // 扫码加入班级
  @All('userAddClass')
  index21(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('扫码加入班级');

    setTimeout(() => {
      let options = {
        url: common.normal + '/user/userAddClass',
        method: 'post',
        headers: {
          token: req.headers.token,
        },
        form: {
          ...query,
          ...body,
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

  // 真正的加入班级请求
  @All('addClass')
  index22(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('真正的加入班级请求');

    setTimeout(() => {
      let options = {
        url: common.normal + '/user/addClass',
        method: 'post',
        headers: {
          token: req.headers.token,
        },
        form: {
          ...query,
          ...body,
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

  // 签到
  @All('signClass')
  index23(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('签到');

    setTimeout(() => {
      let options = {
        url: common.normal + '/user/signClass',
        method: 'post',
        headers: {
          token: req.headers.token,
        },
        form: {
          ...query,
          ...body,
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

  // 获取用户总积分
  @All('getuserScoreTotal')
  index24(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('获取用户总积分');

    setTimeout(() => {
      let options = {
        url: common.normal + '/user/getuserScoreTotal',
        method: 'post',
        headers: {
          token: req.headers.token,
        },
        form: {
          ...query,
          ...body,
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

  // 修改密码
  @All('editPassWord')
  index25(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('修改密码');

    setTimeout(() => {
      let options = {
        url: common.normal + '/user/editPassWord',
        method: 'post',
        headers: {
          token: req.headers.token,
        },
        form: {
          ...query,
          ...body,
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
}
