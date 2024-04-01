import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ListsController } from './lists.controller';
import { List } from './lists.model';
import { ListsService } from './lists.service';

@Module({
  imports: [
    SequelizeModule.forFeature([List])
  ],
  controllers: [ListsController],
  providers: [ListsService],
  
})
export class ListsModule {}
