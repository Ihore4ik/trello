import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from './tasks.model';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task) private taskRepository: typeof Task) {}

  async createTask(data: Task) {
    const task = await this.taskRepository.create(data);
    return task;
  }

  async getAll() {
    const tasks = await this.taskRepository.findAll();
    return tasks;
  }

  async remove(id: number) {
    return this.taskRepository.destroy({ where: { id } });
  }

  async update(id: number, data: Task) {
    const [affectedCount, affectedRows] = await this.taskRepository.update(
      data,
      {
        where: { id },
        returning: true,
      },
    );
    return [affectedCount, affectedRows as Task[]];
  }
}
