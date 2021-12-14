import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './categories.entity';
import { AuthModule } from '../auth/auth.module';
import { Article } from '../articles/articles.entity';
// import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([Category, Article]),
    // JwtModule.register({}),
  ],
})
export class CategoriesModule {}
