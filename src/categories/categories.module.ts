import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './categories.entity';
import { AuthModule } from '../auth/auth.module';
import { Article } from '../articles/articles.entity';
import { BullModule } from '@nestjs/bull';
import { CategoryProcessor } from './category.processor';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService, CategoryProcessor],
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([Category, Article]),
    BullModule.registerQueue({
      name: 'category',
    }),
  ],
})
export class CategoriesModule {}
