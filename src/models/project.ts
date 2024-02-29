import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    name: {
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

export default mongoose.model('Project', projectSchema);
