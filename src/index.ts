import express from 'express';
import dotenv from 'dotenv';
import { conectarBD } from './database';
dotenv.config();

const app = express();
app.use(express.json());

const iniciarServer = async () => {
    const url = process.env.DB_URL || '';
    await conectarBD(url);
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Servidor escuchando en el puerto ${port}`);
    });
};

iniciarServer();