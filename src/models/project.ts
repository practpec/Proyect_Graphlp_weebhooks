import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    nombre: {
        type: String
    },
    createdBy: {
        type: String
    },
    updatedBy: {
        type: String
    },
    deletedBy: {
        type: String
    },
});

export default mongoose.model('Proyecto', projectSchema);
