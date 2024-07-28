import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

import { catchAsync } from '../utils/catchAsync';
import { AppError } from '../utils/appError';
import supabase from '../database/createConnection';
import APIFeatures from '../utils/apiFeatures';
import { serviceFormSchema, serviceFormSchemaType } from '../utils/validateSchema';

export const getServices = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const queryPromise = supabase.from('services').select('*');
    const servicesPromise = new APIFeatures(queryPromise, req.query).filter().order().paginate();

    const { data, error } = await servicesPromise.query;
    if (error) return next(new Error('Đã có lỗi xảy ra. Vui lòng thử lại sau.'));
    // Return data
    res.status(StatusCodes.OK).json(data);
});

export const getService = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // Validate params
    const serviceId = req.params.serviceId;
    if (!serviceId) return next(new AppError(StatusCodes.BAD_REQUEST, 'Dữ liệu lấy dịch vụ không hợp lệ.'));

    // Query data
    const { data: services, error } = await supabase.from('services').select('*').eq('serviceId', serviceId);
    if (error) return next(new Error('Đã có lỗi xảy ra. Vui lòng thử lại sau.'));
    if (services.length === 0) return next(new AppError(StatusCodes.NOT_FOUND, 'Không tìm thấy dữ liệu'));

    // Return data
    res.status(StatusCodes.OK).json(services[0]);
});

export const createService = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // Validate data
    const serviceData = req.body;
    const { data, success } = serviceFormSchema.safeParse(serviceData);
    if (!success && !data) return next(new AppError(StatusCodes.BAD_REQUEST, 'Dữ liệu đăng kí dịch vụ không hợp lệ.'));

    const { error } = await supabase.from('services').insert(data);
    if (error) return next(new Error('Đã có lỗi xảy ra. Vui lòng thử lại sau.'));

    // Return data
    res.status(StatusCodes.CREATED).json({ status: 'success' });
});

export const updateService = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // Validate data
    const serviceData = req.body;
    const { data, success } = serviceFormSchema.partial().safeParse(serviceData);
    if (!success && !data) return next(new AppError(StatusCodes.BAD_REQUEST, 'Dữ liệu cập nhật dịch vụ không hợp lệ.'));

    // Validate params
    const serviceId = req.params.serviceId;
    if (!serviceId) return next(new AppError(StatusCodes.BAD_REQUEST, 'Dữ liệu cập nhật dịch vụ không hợp lệ.'));

    const { error } = await supabase.from('services').update(data).eq('serviceId', serviceId);
    if (error) return next(new Error('Đã có lỗi xảy ra. Vui lòng thử lại sau.'));

    // Return data
    res.status(StatusCodes.OK).json({ status: 'success' });
});

export const deleteService = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // Validate params
    const serviceId = req.params.serviceId;
    if (!serviceId) return next(new AppError(StatusCodes.BAD_REQUEST, 'Dữ liệu xóa dịch vụ không hợp lệ.'));

    const { error } = await supabase.from('services').delete().eq('serviceId', serviceId);
    if (error) return next(new Error('Đã có lỗi xảy ra. Vui lòng thử lại sau.'));

    // Return data
    res.status(StatusCodes.OK).json({ status: 'success' });
});
