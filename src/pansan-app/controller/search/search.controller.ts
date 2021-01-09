import common from '../common';
import * as request from 'request';
import * as Mock from 'mockjs';
import {
  All,
  Body,
  Controller,
  Post,
  Query,
  Response,
  Request,
} from '@nestjs/common';

@Controller('pansanApp/api/search')
export class SearchController {
  // 联想词
  @All('associate')
  index1(@Request() req, @Body() body, @Query() query, @Response() res) {
    setTimeout(() => {
      let options = {
        url: common.normal + '/course/courseList',
        method: 'post',
        headers: {
          token: req.headers.token,
        },
        form: {
          ...body,
          ...query,
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

      // console.log(body.inputValue);

      // let data = [];
      // // 如果前端发来null就不给他数据了
      // if (body.inputValue) {
      //   let mockData = Mock.mock({
      //     'data|10-20': [
      //       {
      //         id: 155,
      //         name: '@county(true)',
      //       },
      //     ],
      //   });

      //   data = mockData.data;
      // }

      // res.send({
      //   code: 200,
      //   data,
      // });
    }, common.millisecond);
  }

  // 关键词
  @All('antistop')
  index2(@Request() req, @Body() body, @Query() query, @Response() res) {
    setTimeout(() => {
      let options = {
        url: common.normal + '/course/getCourseTags',
        method: 'get',
        headers: {
          token: req.headers.token,
        },
        form: {
          ...body,
          ...query,
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

      // let mockData = Mock.mock({
      //   //'data|10':[]   表示数组中有10个数据
      //   'data|10-20': ['@province'],
      // });

      // res.send({
      //   code: 200,
      //   data: mockData.data,
      // });
    }, common.millisecond);
  }
}
