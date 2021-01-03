import common from '../common';
import * as request from 'request';
import {
  All,
  Body,
  Controller,
  Query,
  Request,
  Response,
} from '@nestjs/common';

@Controller('pansanApp/api/course')
export class CourseController {
  // 最新课程
  @All('courseList')
  index1(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log({
      ...query,
      ...body,
    });

    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/course/courseList',
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
  // 课程分类导航
  @All('getCourseItemList')
  index2(@Request() req, @Response() res, @Body() body, @Query() query) {
    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/course/getCourseItemList',
        method: 'get',
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
  // 课程详情
  @All('courseDetail')
  index3(@Request() req, @Response() res, @Body() body, @Query() query) {
    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/course/courseDetail',
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

  // 课程阅读完成
  @All('courseProgress')
  index4(@Request() req, @Response() res, @Body() body, @Query() query) {
    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/course/courseProgress',
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

  // 完成情况
  @All('courseSituation')
  index5(@Request() req, @Response() res, @Body() body, @Query() query) {
    console.log('完成情况');

    setTimeout(() => {
      // let options = {
      //   url: 'http://192.168.0.8:88/index.php/v2/course/courseSituation',
      //   method: 'post',
      //   headers: { token: '5e80dabd1caa00b0e82b15efacc051c1' },
      //   form: {
      //     id: 158,
      //     page: 1,
      //     psize: 20,
      //     nonce: 'YShJSh',
      //     t: 1609643510419,
      //     sign: '2BC3B4CE8E543F05341555A9425697FC',
      //   },
      // };

      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/course/courseSituation',
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
