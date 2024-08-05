import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

import { catchAsync } from '../utils/catchAsync';
import { AppError } from '../utils/appError';
import supabase from '../database/createConnection';
import APIFeatures from '../utils/apiFeatures';
import { bookingSchema, OptionalBookingSchema } from '../utils/validateSchema';

export const getBookings = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const queryPromise = supabase.from('bookings').select('*');
    const bookingPromise = new APIFeatures(queryPromise, req.query).filter().order().paginate();

    const { data, error } = await bookingPromise.query;
    if (error) return next(new Error('Đã có lỗi xảy ra. Vui lòng thử lại sau.'));
    // Return data
    res.status(StatusCodes.OK).json(data);
});

export const getBooking = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // Validate params
    const bookingId = req.params.bookingId;
    if (!bookingId) return next(new AppError(StatusCodes.BAD_REQUEST, 'Dữ liệu đầu vào không hợp lệ.'));

    // Query data
    const { data: bookings, error } = await supabase.from('bookings').select('*').eq('bookingId', bookingId);
    if (error) return next(new Error('Đã có lỗi xảy ra. Vui lòng thử lại sau.'));
    if (bookings.length === 0) return next(new AppError(StatusCodes.NOT_FOUND, 'Không tìm thấy dữ liệu'));

    // Return data
    res.status(StatusCodes.OK).json(bookings[0]);
});

export const createBooking = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // Validate data
    const bookingData = req.body;
    const { data, success } = bookingSchema.safeParse(bookingData);
    if (!success && !data) return next(new AppError(StatusCodes.BAD_REQUEST, 'Dữ liệu đăng kí không hợp lệ.'));

    const { error } = await supabase.from('bookings').insert(data);
    if (error) return next(new Error('Đã có lỗi xảy ra. Vui lòng thử lại sau.'));

    // Return data
    res.status(StatusCodes.CREATED).json({ status: 'success' });
});

export const updateBooking = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // Validate data
    const bookingData = req.body;
    const { data, success } = OptionalBookingSchema.safeParse(bookingData);
    if (!success && !data) return next(new AppError(StatusCodes.BAD_REQUEST, 'Dữ liệu cập nhật không hợp lệ.'));

    // Validate params
    const bookingId = req.params.bookingId;
    if (!bookingId) return next(new AppError(StatusCodes.BAD_REQUEST, 'Dữ liệu cập nhật không hợp lệ.'));

    const { error } = await supabase.from('bookings').update(data).eq('bookingId', bookingId);
    if (error) return next(new Error('Đã có lỗi xảy ra. Vui lòng thử lại sau.'));

    // Return data
    res.status(StatusCodes.OK).json({ status: 'success' });
});

export const deleteBooking = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // Validate params
    const bookingId = req.params.bookingId;
    if (!bookingId) return next(new AppError(StatusCodes.BAD_REQUEST, 'Dữ liệu đầu không hợp lệ.'));

    const { error } = await supabase.from('bookings').delete().eq('bookingId', bookingId);
    if (error) return next(new Error('Đã có lỗi xảy ra. Vui lòng thử lại sau.'));

    // Return data
    res.status(StatusCodes.OK).json({ status: 'success' });
});
