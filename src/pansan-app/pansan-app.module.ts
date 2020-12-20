import { Module } from '@nestjs/common';
import { CourseController } from './controller/course/course.controller';
import { ExamController } from './controller/exam/exam.controller';
import { ExerciseController } from './controller/exercise/exercise.controller';
import { IndexController } from './controller/index/index.controller';
import { NewsController } from './controller/news/news.controller';
import { UserController } from './controller/user/user.controller';

@Module({
  controllers: [CourseController, ExamController, ExerciseController, IndexController, NewsController, UserController]
})
export class PansanAppModule {}
