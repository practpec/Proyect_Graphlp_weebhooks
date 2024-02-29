import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
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
    }
});

export default mongoose.model('Task', taskSchema);