import common from '../common';
import * as request from 'request';
import { All, Body, Controller, Query, Response } from '@nestjs/common';

@Controller('pansanApp/api/user')
export class UserController {
  // 用户一日一题列表
  @All('getTodayUserStudy')
  index1(@Response() res, @Body() body, @Query() query) {
    console.log('用户一日一题列表');

    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/user/getTodayUserStudy',
        method: 'post',
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
  index2(@Response() res, @Body() body, @Query() query) {
    console.log('职工服务');

    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/user/getUserServiceList',
        method: 'post',
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
  index3(@Response() res, @Body() body, @Query() query) {
    console.log('添加咨询');

    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/user/addUserService',
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

  // 获取咨询详情
  @All('getUserServiceReply')
  index4(@Response() res, @Body() body, @Query() query) {
    console.log('获取咨询详情');

    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/user/getUserServiceReply',
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

  // 获取我的班级
  @All('getUserClass')
  index5(@Response() res, @Body() body, @Query() query) {
    console.log('获取我的班级');

    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/user/getUserClass',
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

  // 获取考勤记录
  @All('getAttendDetail')
  index6(@Response() res, @Body() body, @Query() query) {
    console.log('获取考勤记录');

    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/user/getAttendDetail',
        method: 'post',
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
  index7(@Response() res, @Body() body, @Query() query) {
    console.log('获取课程计划');

    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/user/getTimeTableList',
        method: 'post',
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
  index8(@Response() res, @Body() body, @Query() query) {
    console.log('获取考试排行');

    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/user/testRankList',
        method: 'post',
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

  // 获取考试时间线
  @All('getTestList')
  index9(@Response() res, @Body() body, @Query() query) {
    console.log('获取考试时间线');

    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/user/getTestList',
        method: 'post',
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

  // 获取我的课程
  @All('getUserCourseList')
  index10(@Response() res, @Body() body, @Query() query) {
    console.log('获取我的课程');

    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/user/getUserCourseList',
        method: 'post',
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
  index11(@Response() res, @Body() body, @Query() query) {
    console.log('获取我的错题');

    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/user/getUserErrQuestion',
        method: 'post',
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

  // 获取收藏的题目
  @All('getQuestionCollect')
  index12(@Response() res, @Body() body, @Query() query) {
    console.log('获取收藏的题目');

    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/user/getQuestionCollect',
        method: 'post',
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
  index13(@Response() res, @Body() body, @Query() query) {
    console.log('获取考试记录');

    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/user/getUserTestRecordList',
        method: 'post',
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
  index14(@Response() res, @Body() body, @Query() query) {
    console.log('获取考试记录对应的考题');

    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/user/getUserTestAnswerList',
        method: 'post',
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
}
