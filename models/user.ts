import {DataType, Model} from 'sequelize'
import Sequelize from 'sequelize'

class user extends Model{
    public id!: number;
    public email!: string;
    public password!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}