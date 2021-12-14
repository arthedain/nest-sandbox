import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
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

  @Delete('/delete/:id')
  public delete(@Param('id') id: number) {
    return this.articleService.delete(id);
  }
}
