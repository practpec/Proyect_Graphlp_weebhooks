import { GraphQLID, GraphQLString } from 'graphql';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../../models/user';
import { UserType } from '../typeDefs/userType';

export const createUser = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    },
    async resolve(_: any, args: any) {
        const { name, email, password } = args;
        const encryptPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: encryptPassword });
        await newUser.save();
        return newUser;
    }
}

export const login = {
    type: GraphQLString,
    args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve(_: any, { email, password }: any) {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        if (!user.password) {
            throw new Error('El usuario no tiene una contraseña válida');
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            throw new Error('Contraseña incorrecta');
        }
        const jwtSecret = process.env.JWT_SECRET || '';
        const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '1h' });
        return token;
    },
};

export const deleteUser = {
    type: GraphQLString,
    args: {
        id: { type: GraphQLID }
    },
    async resolve(_: any, { id }: any) {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            throw new Error('Usuario no encontrado');
        }
        return 'Usuario eliminado exitosamente';
    }
}

export const updateUser = {
    type: GraphQLString,
    args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    },
    async resolve(_: any, args: any) {
        const { id, name, email, password } = args;
        const newPassword = await bcrypt.hash(password, 10);
        const updatedUser = await User.findByIdAndUpdate(id,
            { name, email, password: newPassword }
        );
        if (!updatedUser) {
            throw new Error('Usuario no encontrado');
        }
        return 'Usuario actualizado exitosamente'
    }
}