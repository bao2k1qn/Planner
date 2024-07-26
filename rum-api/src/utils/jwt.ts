import jwt, { JwtPayload } from 'jsonwebtoken';

export const createToken = (id: string): string => {
    return jwt.sign({ id }, process.env.JWT_SECRET_KEY || 'jwt', {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};

export const verifyToken = (token: string) => {
    try {
        const key = process.env.JWT_SECRET_KEY as string;
        const decode = jwt.verify(token, key);
        if (typeof decode === 'string') return { decode: null, error: new Error('Xác thực token không thành công.') };
        return { decode, error: null };
    } catch (error) {
        return { decode: null, error };
    }
};
