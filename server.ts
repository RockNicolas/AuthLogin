import express from  'express';
import cors from 'cors'
import { sequelize } from './sequelize';
import { router } from './router/authRoutes'; 

const app = express();

app.use(cors());
app.use(express.json());

sequelize.authenticate()
    .then(() => {
        console.log('conectado ao banco de dados Mysql');
        return sequelize.sync();
    })
    .catch(err => console.log('Erro ao conectar ao banco de dados:', err));

app.use('/api/auth', router);

app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000');
});