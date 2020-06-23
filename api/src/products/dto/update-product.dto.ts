import { IsBoolean, IsInt, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { UpdateProductTranslationDto } from './update-product-translation.dto';
import { CreateProductCategoryDto } from './create-product-category.dto';

export class UpdateProductDto {
    @IsOptional()
    @IsInt()
    price?: number;

    @IsOptional()
    @IsInt()
    oldPrice?: number;

    @IsOptional()
    @IsInt()
    inStock: number;

    @IsOptional()
    @IsBoolean()
    inNew: boolean;

    @IsOptional()
    @IsBoolean()
    inTop: boolean;

    @IsOptional()
    @ValidateNested()
    @Type(() => CreateProductCategoryDto)
    category?: CreateProductCategoryDto;

    @IsOptional()
    @ValidateNested({
        each: true
    })
    @Type(() => UpdateProductTranslationDto)
    translations: UpdateProductTranslationDto[];
}
