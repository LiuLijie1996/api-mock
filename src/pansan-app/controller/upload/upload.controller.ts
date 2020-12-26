import { resolve } from 'path';
import { createWriteStream } from 'fs';
import {
  Controller,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('pansanApp/api/upload')
export class UploadController {
  @Post()
  @UseInterceptors(AnyFilesInterceptor())
  index1(@UploadedFiles() files) {
    files.forEach((file) => {
      this.saveFile(file);
    });

    return {
      code: 200,
      msg: '上传成功',
    };
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
