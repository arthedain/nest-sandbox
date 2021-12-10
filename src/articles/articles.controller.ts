import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticleDto } from './dto/article.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('articles')
export class ArticlesController {
  constructor(private articleService: ArticlesService) {}

  @Get('/all')
  public all() {
    return this.articleService.all();
  }

  @Post('/create')
  @UseInterceptors(FileInterceptor('file'))
  public create(@Body() articleDto: ArticleDto, @UploadedFile() file) {
    return this.articleService.create(articleDto, file);
  }
}
