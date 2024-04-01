import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { List } from './lists.model';

@Injectable()
export class ListsService {
  constructor(@InjectModel(List) private listRepository: typeof List) {}

  async createList(data: List) {
    const list = await this.listRepository.create(data);
    return list;
  }

  async getLists() {
    const lists = await this.listRepository.findAll();
    return lists;
  }

  async remove(id: number) {
    return this.listRepository.destroy({ where: { id } });
  }

  async update(id: number, List) {
    const [affectedCount, affectedRows] = await this.listRepository.update(
      List,
      {
        where: { id },
        returning: true,
      },
    );
    return [affectedCount, affectedRows as List[]];
  }
}
