import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Param, Post } from '@nestjs/common/decorators';
import { Patch } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Task } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  findAll() {
    return this.taskService.getAll();
  }

  @Post()
  createTask(@Body() data: Task) {
    return this.taskService.createTask(data);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.remove(Number(id));
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() data: Task) {
    return this.taskService.update(Number(id), data);
  }
}
