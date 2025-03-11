import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    process.env.DB_NAME || 'authdb',
    process.env.DB_USER || 'root',
    process.env.DB_NAME || '',
    {
        host: process.env.HOST || 'localhost',
        dialect: 'mysql',
        logging: false,
    }
)