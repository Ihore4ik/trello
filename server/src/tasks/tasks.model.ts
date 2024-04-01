import { Model, Column, Table, DataType } from 'sequelize-typescript';

interface TaskCreationAttr {
  name: string;
  description: string;
  priority: string;
  status: string;
}

@Table({ tableName: 'tasks' })
export class Task extends Model<Task, TaskCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  description: string;

  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  priority: string;

  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  status: string;
}
