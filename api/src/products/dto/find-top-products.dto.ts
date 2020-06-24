import { IsInt, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class FindTopProductsDto {
    @IsOptional()
    @IsInt()
    @Transform(Number)
    take?: number;

    @IsOptional()
    @IsInt()
    @Transform(Number)
    skip?: number;

    @IsOptional()
    @IsString()
    orderBy?: string;
}
