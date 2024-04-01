import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
} from '@nestjs/common';
// import { CreateListDTO } from 'src/dto/create-list.dto';
import { List } from './lists.model';
import { ListsService } from './lists.service';

@Controller('lists')
export class ListsController {
  constructor(private listService: ListsService) {}

  @Post()
  create(@Body() data: List) {
    return this.listService.createList(data);
  }

  @Get()
  getAll() {
    return this.listService.getLists();
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.listService.remove(Number(id));
  }

  @Patch(':id')
  updateList(@Param('id') id: string, @Body() data: List) {
    return this.listService.update(Number(id), data);
  }
}
