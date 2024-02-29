import bcrypt from 'bcrypt';

export const encryptPassword = async (password: string) => {
    return bcrypt.hash(password, 10);
};

export const comparePassword = async (password: string, hash: any) => {
    return await bcrypt.compare(password, hash);
};