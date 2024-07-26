import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcryptjs';

import { catchAsync } from '../utils/catchAsync';
import { createToken } from '../utils/jwt';
import { AppError } from '../utils/appError';
import supabase from '../database/createConnection';

export const signin = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    //Check data from body data.
    const { username, password } = req.body;
    if (!(password && username))
        return next(new AppError(StatusCodes.UNAUTHORIZED, 'Vui lòng cung cấp username và password.'));

    // Get user from database.
    const { data, error } = await supabase.from('users').select('*').eq('username', username);
    if (error) return next(new Error('Đã có lỗi xảy ra. Vui lòng thử lại sau.'));
    if (!data || data.length === 0)
        return next(new AppError(StatusCodes.UNAUTHORIZED, 'Username hoặc password không chính xác.'));

    // Compare password.
    const user = data[0];
    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (!isCorrectPassword)
        return next(new AppError(StatusCodes.UNAUTHORIZED, 'Username hoặc password không chính xác'));

    // Create accessToken
    const token = createToken(user.user_id);

    // Remove password when return data for clients
    delete (user as Partial<typeof user>).password;

    // Return data
    res.status(StatusCodes.ACCEPTED).json({
        token,
        user,
    });
});
