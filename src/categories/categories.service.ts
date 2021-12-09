import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './categories.entity';
import { Repository } from 'typeorm';
import { CategoryDto } from './dto/category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  public async create(categoryDto: CategoryDto): Promise<Category> {
    return await this.categoryRepository.save(categoryDto);
  }

  public async all(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }
}
