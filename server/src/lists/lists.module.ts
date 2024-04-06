import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ListsController } from './lists.controller';
import { List } from './lists.model';
import { ListsService } from './lists.service';

@Module({
  imports: [SequelizeModule.forFeature([List])],
  providers: [ListsService],
  controllers: [ListsController],
})
export class ListsModule {}
