import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateListDto } from 'src/dto/listsDTO';
import { List } from './lists.model';

@Injectable()
export class ListsService {
  constructor(@InjectModel(List) private listRepository: typeof List) {}

  async createList(data: CreateListDto): Promise<List> {
    return await this.listRepository.create<List>(data);
  }

  async getLists(): Promise<List[]> {
    return await this.listRepository.findAll<List>();
  }

  async remove(id: number) {
    return this.listRepository.destroy({ where: { id } });
  }

  async update(id: number, data: List) {
    const [affectedCount, affectedRows] = await this.listRepository.update(
      data,
      {
        where: { id },
        returning: true,
      },
    );
    return [affectedCount, affectedRows as List[]];
  }
}
