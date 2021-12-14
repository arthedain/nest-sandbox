import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './articles.entity';
import { DeleteResult, Repository } from 'typeorm';
import { ArticleDto } from './dto/article.dto';
import { FilesService } from '../files/files.service';
import { Category } from '../categories/categories.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article) private articleRepository: Repository<Article>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    private filesService: FilesService,
  ) {}

  public async all(): Promise<Article[]> {
    return await this.articleRepository.find({ relations: ['category'] });
  }

  public async findById(id: number | string): Promise<Article> {
    return await this.articleRepository.findOne(id);
  }

  public async create(articleDto: ArticleDto, file): Promise<Article> {
    const image = await this.filesService.save(file);

    const category = await this.categoryRepository.findOne(
      articleDto.categoryId,
    );

    return await this.articleRepository.save({
      ...articleDto,
      category,
      image,
    });
  }

  public async delete(id: number | string): Promise<DeleteResult> {
    return await this.articleRepository.delete(id);
  }
}
