import mongoose, { Document } from 'mongoose';

export interface UserDocument extends Document {
    name: string;
    email: string;
    password: string;
}

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
});

export default mongoose.model<UserDocument>('User', userSchema);