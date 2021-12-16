import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoryDto } from './dto/category.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RoleGuard } from '../auth/role.guard';
import { Roles } from '../auth/roles.decorator';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Controller('categories')
export class CategoriesController {
  constructor(
    private categoriesService: CategoriesService,
    @InjectQueue('category') private readonly audioQueue: Queue,
  ) {}

  @Roles('admin')
  @UseGuards(RoleGuard, JwtAuthGuard)
  @Post('/create')
  public create(@Body() categoryDto: CategoryDto, @Request() req) {
    return this.categoriesService.create(categoryDto);
  }

  @Get('/all')
  public all() {
    // this.audioQueue.add('test', {
    //   text: 'укн457457',
    // });
    return this.categoriesService.all();
  }
}
