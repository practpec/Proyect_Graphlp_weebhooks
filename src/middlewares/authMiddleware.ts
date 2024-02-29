import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User, { UserDocument } from '../models/user';

export interface AuthenticatedRequest extends Request {
    user?: UserDocument;
}

export const verifyToken = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const jwtSecret = process.env.JWT_SECRET || '';
    const token = req.headers.authorization?.split(' ')[1] || '';
    try {
        const decoded = jwt.verify(token, jwtSecret) as { userId: string };
        const user = await User.findById(decoded.userId);
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        req.user = user;
        console.log(req.user);
        next();
    } catch (error) {
        next();
    }
};