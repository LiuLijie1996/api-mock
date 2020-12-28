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
}
