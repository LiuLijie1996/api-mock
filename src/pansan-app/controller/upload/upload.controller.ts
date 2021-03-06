import { resolve } from 'path';
import { createWriteStream } from 'fs';
import common from '../common';
import * as request from 'request';

import {
  Controller,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
  Post,
  Query,
  Request,
  Response,
  Body,
} from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('pansanApp/api/upload')
export class UploadController {
  @Post()
  @UseInterceptors(AnyFilesInterceptor())
  index1(@UploadedFiles() files, @Request() req, @Response() res) {
    // files.forEach((file) => {
    //   this.saveFile(file);
    // });

    // return {
    //   code: 200,
    //   msg: '上传成功',
    // };

    console.log(files[0]);

    setTimeout(() => {
      let options = {
        url: common.normal + '/upload/uploadImg',
        method: 'post',
        headers: {
          token: req.headers.token,
        },
        formData: files[0],
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

  // 保存文件
  saveFile(@UploadedFile() file) {
    // 设置文件名
    let fileName = new Date().getTime() + file.originalname;
    // 拼接出保存文件的路径
    let savePath = resolve(__dirname, '../../../../static/images/' + fileName);
    // 创建写入流
    let createWrite = createWriteStream(savePath);
    // 写入文件
    createWrite.write(file.buffer);
  }
}
