import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './articles.entity';
import { Repository } from 'typeorm';
import { ArticleDto } from './dto/article.dto';
import { FilesService } from '../files/files.service';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article) private articleRepository: Repository<Article>,
    private filesService: FilesService,
  ) {}

  public async all(): Promise<Article[]> {
    return await this.articleRepository.find();
  }

  public async findById(id: number | string) {
    return await this.articleRepository.findOne(id);
  }

  public async create(articleDto: ArticleDto, file): Promise<Article> {
    const image = await this.filesService.save(file);

    return await this.articleRepository.save({ ...articleDto, image });
  }
}
