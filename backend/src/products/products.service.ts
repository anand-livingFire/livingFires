import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  create(product: Product): Promise<Product> {
    return this.productRepository.save(product);
  }

  update(id: string, product: Product): Promise<Product> {
    return this.productRepository.save({ ...product, id });
  }

  remove(id: string): Promise<void> {
    return this.productRepository.delete(id).then(() => undefined);
  }
}
