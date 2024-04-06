import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { List } from './lists/lists.model';
import { ListsModule } from './lists/lists.module';
import { Task } from './tasks/tasks.model';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // envFilePath: ['.env'],
    }),
    SequelizeModule.forRoot({
      // useFactory: (configService: ConfigService) => ({
        dialect: 'postgres',
        // host: configService.get<string>('POSTGRES_HOST'),
        host: 'localhost',
        // port: configService.get<number>('POSTGRES_PORT'),
        port: 5432,
        // username: configService.get<string>('POSTGRES_USER'),
        username: 'postgres',
        // database: configService.get<string>('POSTGRES_DB'),
        database: 'task-board',
        // password: configService.get<string>('POSTGRES_PASSWORD'),
        password: '12345',
        autoLoadModels: true,
        synchronize: true,
        models: [List, Task],
      }),
      // inject: [ConfigService],
    // }),
    ListsModule,
    TasksModule,
  ],
  controllers: [],
  // controllers: [AppController],
  providers: [],
  // providers: [AppService],
})
export class AppModule {}
