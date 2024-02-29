import mongoose from 'mongoose';

export const conectarBD = async (url: string) => {
    try {
        await mongoose.connect(url);
        console.log('Conexión exitosa a Mongo Atlas');
    } catch (error) {
        console.log('Error al conectar la base de datos:', error);
        process.exit(1);
    }
};