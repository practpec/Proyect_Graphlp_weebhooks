import jwt from 'jsonwebtoken';

export const createJWTToken = (user: any) => {
    const jwtSecret = process.env.JWT_SECRET || '';
    
    return jwt.sign({ user }, jwtSecret, {
        expiresIn: '1h',
    });
};