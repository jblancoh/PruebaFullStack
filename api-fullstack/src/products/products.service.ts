import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}
  
  create(createProductDto: CreateProductDto) {
    return this.productsRepository.save(createProductDto);
  }
  
  findAll() {
    return this.productsRepository.find();
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
