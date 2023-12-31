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
        'productID',
        'name',
        'productNumber',
        'color',
        'standardCost',
        'listPrice',
        'size',
        'weight',
        'productLine',
        'modifiedDate'
      ],
      nullSort: 'last',
      defaultSortBy: [['productID', 'ASC']],
      searchableColumns: ['productID', 'name', 'productNumber', 'color', 'size', 'productLine', 'modifiedDate'],
      select: ['productID', 'name', 'productNumber', 'color', 'size', 'productLine', 'modifiedDate'],
      filterableColumns: {
        productID: [FilterOperator.EQ, FilterSuffix.NOT],
        name: [FilterOperator.CONTAINS, FilterOperator.EQ, FilterSuffix.NOT],
        productNumber: [FilterOperator.CONTAINS, FilterOperator.EQ, FilterSuffix.NOT],
        color: [FilterOperator.CONTAINS, FilterOperator.EQ, FilterSuffix.NOT],
        size: [FilterOperator.CONTAINS, FilterOperator.EQ, FilterSuffix.NOT],
        productLine: [FilterOperator.CONTAINS, FilterOperator.EQ, FilterSuffix.NOT],
        modifiedDate: [FilterOperator.CONTAINS, FilterOperator.EQ, FilterSuffix.NOT],
      }
    })
}

  findOne(productID: number) {
    const options = { where: { productID } };
    return this.productsRepository.findOne(options);
  }
  
  update(productID: number, updateProductDto: UpdateProductDto) {
    return this.productsRepository.update(productID, updateProductDto);
  }

  remove(productID: number) {
    return this.productsRepository.delete(productID);
  }
}
