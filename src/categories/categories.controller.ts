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

@UseGuards(JwtAuthGuard)
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Roles('admin')
  @UseGuards(RoleGuard, JwtAuthGuard)
  @Post('/create')
  public create(@Body() categoryDto: CategoryDto, @Request() req) {
    console.log(req.user);
    return this.categoriesService.create(categoryDto);
  }

  @Get('/all')
  public all() {
    return this.categoriesService.all();
  }
}
