import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    nombre: {
        type: String
    },
    createdBy: {
        type: String
    },
});

export default mongoose.model('Tarea', projectSchema);
