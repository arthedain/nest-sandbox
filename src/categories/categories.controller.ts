import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoryDto } from './dto/category.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Post('/create')
  public create(@Body() categoryDto: CategoryDto) {
    return this.categoriesService.create(categoryDto);
  }

  @Get('/all')
  public all() {
    return this.categoriesService.all();
  }
}
