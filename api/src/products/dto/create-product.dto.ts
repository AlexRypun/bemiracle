import { CreateProductTranslationDto } from './create-product-translation.dto';
import { IsBoolean, IsInt, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateProductCategoryDto } from './create-product-category.dto';

export class CreateProductDto {
    @IsInt()
    price: number;

    @IsOptional()
    @IsInt()
    oldPrice?: number;

    @IsInt()
    inStock: number;

    @IsOptional()
    @IsBoolean()
    inNew: boolean;

    @IsOptional()
    @IsBoolean()
    inTop: boolean;

    @ValidateNested()
    @Type(() => CreateProductCategoryDto)
    category: CreateProductCategoryDto;

    @ValidateNested({
        each: true
    })
    @Type(() => CreateProductTranslationDto)
    translations: CreateProductTranslationDto[];
}
