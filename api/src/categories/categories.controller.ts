import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { CategoriesService } from './categories.service';
import { FindCategoriesDto } from './dto/find-categories.dto';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { AllowedRoles } from '../common/decorators/allowed-roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {
  }

  @Get()
  @UsePipes(ValidationPipe)
  getAllCategories(@Query() filters: FindCategoriesDto): Promise<Category[]> {
    return this.categoriesService.getAllCategories(filters);
  }

  @Get('/:id')
  getCategoryById(@Param('id', ParseIntPipe) id: number): Promise<Category> {
    return this.categoriesService.getCategoryById(id);
  }

  @Post()
  @AllowedRoles('admin')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @UsePipes(ValidationPipe)
  createCategory(@Body() data: CreateCategoryDto): Promise<Category> {
    return this.categoriesService.createCategory(data);
  }

  @Patch('/:id')
  @AllowedRoles('admin')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @UsePipes(ValidationPipe)
  updateCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateCategoryDto
  ): Promise<Category> {
    return this.categoriesService.updateCategory(id, data);
  }

  @Delete('/:id')
  @AllowedRoles('admin')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @HttpCode(204)
  deleteCategory(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.categoriesService.deleteCategory(id);
  }
}
