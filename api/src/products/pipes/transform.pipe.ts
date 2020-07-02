import { PipeTransform } from '@nestjs/common';

import { FindProductsDto } from '../dto/find-products.dto';

export class TransformPipe implements PipeTransform {
    transform(data: FindProductsDto): any {
        ['withNestedCategories'].forEach(field => {
            if (data[field] !== undefined) {
                data[field] = data[field] === '1';
            }
        });
        return data;
    }
}
