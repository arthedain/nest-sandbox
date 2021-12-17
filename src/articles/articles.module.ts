import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from '../entities/article';
import { FilesModule } from '../files/files.module';
import { Category } from '../entities/category';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService],
  imports: [TypeOrmModule.forFeature([Article, Category]), FilesModule],
})
export class ArticlesModule {}
