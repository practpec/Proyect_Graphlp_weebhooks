import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    nombre: {
        type: String
    },
    descripcion: {
        type: String
    },
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: "Proyecto"
    },
    createdBy: {
        type: String
    },
    updatedBy: {
        type: String
    },
    deletedBy: {
        type: String
    }
});

export default mongoose.model('Tarea', taskSchema);