import { Controller, Get, Post, Body } from "@nestjs/common";
import { ItemService } from "./item.service";
import { Item } from "./item.entity";

@Controller('item')
export class ItemController {
    constructor(private readonly itemService: ItemService) {}
    
    @Get()
    findAll(): Promise<Item[]> {
        return this.itemService.findAll();
    }

    @Post()
    createItem(@Body() data){
        console.log(data);
        return this.itemService.createItem(data);
    }
}