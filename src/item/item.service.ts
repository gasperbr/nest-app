import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './item.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
  ) {}

  async findAll(): Promise<Item[]> {
    return await this.itemRepository.find();
  }
  async createItem(data) {
    const item = new Item();
    item.name = data.name || "undefined";
    item.description = data.description || "undefined";
    return await this.itemRepository.save(item);
  }
}