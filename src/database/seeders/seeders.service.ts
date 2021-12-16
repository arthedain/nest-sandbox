import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../../categories/categories.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SeedersService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  public async seed() {
    const faker = require('faker');

    for (const i = 0; i <= 10; i + 1) {
      this.categoryRepository.save({
        name: faker.random.name,
      });
    }
  }
}
