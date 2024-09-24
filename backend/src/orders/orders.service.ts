import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
  ) {}

  async findAll() {
    return this.ordersRepository.find();
  }

  async create(orderData: Partial<Order>) {
    const newOrder = this.ordersRepository.create(orderData);
    return this.ordersRepository.save(newOrder);
  }
}
