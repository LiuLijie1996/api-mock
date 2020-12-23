import common from '../common';
import { All, Body, Controller, Query, Response } from '@nestjs/common';
import * as request from 'request';

@Controller('pansanApp/api/course')
export class CourseController {
  // 最新课程
  @All('courseList')
  index1(@Response() res, @Body() body, @Query() query) {
    console.log({
      ...query,
      ...body,
    });

    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/course/courseList',
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
  // 课程分类导航
  @All('getCourseItemList')
  index2(@Response() res, @Body() body, @Query() query) {
    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/course/getCourseItemList',
        method: 'get',
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
  index3(@Response() res, @Body() body, @Query() query) {
    setTimeout(() => {
      let options = {
        url: 'http://192.168.0.8:88/index.php/v2/course/courseDetail',
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
}
