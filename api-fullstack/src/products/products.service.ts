import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { FilterOperator, FilterSuffix, Paginate, PaginateQuery, paginate, Paginated } from 'nestjs-paginate'

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}
  
  create(createProductDto: CreateProductDto) {
    return this.productsRepository.save(createProductDto);
  }
  
  findAll(query: PaginateQuery): Promise<Paginated<Product>> {
    return paginate(query, this.productsRepository, {
      sortableColumns: [
        'ProductID',
        'Name',
        'ProductNumber',
        'Color',
        'StandardCost',
        'ListPrice',
        'Size',
        'Weight',
        'ProductLine',
        'ModifiedDate'
      ],
      nullSort: 'last',
      defaultSortBy: [['ProductID', 'ASC']],
      searchableColumns: ['ProductID', 'Name', 'ProductNumber', 'Color', 'Size', 'ProductLine'],
      select: ['ProductID', 'Name', 'ProductNumber', 'Color', 'Size', 'ProductLine', 'ModifiedDate'],
      filterableColumns: {
        ProductID: [FilterOperator.EQ, FilterSuffix.NOT],
        Name: [FilterOperator.CONTAINS, FilterOperator.EQ, FilterSuffix.NOT],
        ProductNumber: [FilterOperator.CONTAINS, FilterOperator.EQ, FilterSuffix.NOT],
        Color: [FilterOperator.CONTAINS, FilterOperator.EQ, FilterSuffix.NOT],
        Size: [FilterOperator.CONTAINS, FilterOperator.EQ, FilterSuffix.NOT],
        ProductLine: [FilterOperator.CONTAINS, FilterOperator.EQ, FilterSuffix.NOT],
        ModifiedDate: [FilterOperator.CONTAINS, FilterOperator.EQ, FilterSuffix.NOT],
      }
    })
}

  findOne(ProductID: number) {
    const options = { where: { ProductID } };
    return this.productsRepository.findOne(options);
  }
  
  update(ProductID: number, updateProductDto: UpdateProductDto) {
    return this.productsRepository.update(ProductID, updateProductDto);
  }

  remove(ProductID: number) {
    return this.productsRepository.delete(ProductID);
  }
}
