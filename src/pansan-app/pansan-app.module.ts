import { Module } from '@nestjs/common';
import { CourseController } from './controller/course/course.controller';
import { ExamController } from './controller/exam/exam.controller';
import { ExerciseController } from './controller/exercise/exercise.controller';
import { IndexController } from './controller/index/index.controller';
import { NewsController } from './controller/news/news.controller';
import { UserController } from './controller/user/user.controller';
import { ErrorController } from './controller/error/error.controller';
import { SearchController } from './controller/search/search.controller';
import { UploadController } from './controller/upload/upload.controller';
import { ScoreController } from './controller/score/score.controller';
import { LoginController } from './controller/login/login.controller';

@Module({
  controllers: [CourseController, ExamController, ExerciseController, IndexController, NewsController, UserController, ErrorController, SearchController, UploadController, ScoreController, LoginController]
})
export class PansanAppModule {}
