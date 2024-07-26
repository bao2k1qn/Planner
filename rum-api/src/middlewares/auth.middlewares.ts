import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

import supabase from '../database/createConnection';
import { catchAsync } from '../utils/catchAsync';
import { verifyToken } from '../utils/jwt';
import { AppError } from '../utils/appError';

export const protect = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // Get bearer token from request header
    const bearerToken = req.headers.authorization;
    if (!bearerToken || !bearerToken.startsWith('Bearer'))
        return next(
            new AppError(StatusCodes.UNAUTHORIZED, 'Bạn chưa đăng nhập! Vui lòng đăng nhập để có quyền truy cập.'),
        );

    // Extract access token from bearer token
    const token = bearerToken.split(' ')[1];

    // Verify access token and recieve a decoded data
    const { decode, error: verifyError } = verifyToken(token);
    if (verifyError)
        return next(
            new AppError(StatusCodes.UNAUTHORIZED, 'Bạn chưa đăng nhập! Vui lòng đăng nhập để có quyền truy cập.'),
        );

    // Get user from database.
    const { data, error } = await supabase.from('users').select('*').eq('user_id', decode?.id);
    if (error) return next(new Error('Đã có lỗi xảy ra. Vui lòng thử lại sau.'));
    if (!data || data.length === 0)
        return next(new AppError(StatusCodes.UNAUTHORIZED, 'User sở hữu access token này không còn tồn tại.'));

    // TODO: Check if the user changed the password after generating the access token
    // if (user.changedPasswordAfter(decode.iat))
    //     return next(new AppError(StatusCodes.UNAUTHORIZED, 'User recently changed password! Please log in again.'));

    // Mount user data to request session
    const user = data[0];
    req.user = user;

    next();
});

export const restrictTo = (...roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!(req.user && roles.includes(req.user.role))) {
            return next(new AppError(403, 'You do not have permission to perform this action'));
        }

        next();
    };
};
