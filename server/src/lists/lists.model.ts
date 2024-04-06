import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface ListCreationAttr {
  name: string;
}

@Table({ tableName: 'lists' })
export class List extends Model<List, ListCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({ type: DataType.STRING, unique: true, allowNull: false, primaryKey: false })
  name: string;
}
