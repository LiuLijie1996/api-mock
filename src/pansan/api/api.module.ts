import { Module } from '@nestjs/common';
import { CourseController } from './course/course.controller';
import { ExamController } from './exam/exam.controller';
import { ExerciseController } from './exercise/exercise.controller';
import { IndexController } from './index/index.controller';
import { NewsController } from './news/news.controller';
import { UserController } from './user/user.controller';

@Module({
  controllers: [CourseController, ExamController, ExerciseController, IndexController, NewsController, UserController]
})
export class ApiModule {}
