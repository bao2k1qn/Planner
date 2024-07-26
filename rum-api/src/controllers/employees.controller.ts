import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

import { catchAsync } from '../utils/catchAsync';
import { AppError } from '../utils/appError';
import supabase from '../database/createConnection';
import APIFeatures from '../utils/apiFeatures';
import { employeeSchema } from '../utils/validateSchema';

export const getEmployees = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const queryPromise = supabase.from('employees').select('*');
    const employeePromise = new APIFeatures(queryPromise, req.query).filter().order().paginate();

    const { data, error } = await employeePromise.query;
    if (error) return next(new Error('Đã có lỗi xảy ra. Vui lòng thử lại sau.'));
    // Return data
    res.status(StatusCodes.OK).json(data);
});

export const getEmployee = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // Validate params
    const employeeId = req.params.employee_id;
    if (!employeeId) return next(new AppError(StatusCodes.BAD_REQUEST, 'Dữ liệu lấy nhân viên không hợp lệ.'));

    // Query data
    const { data: employees, error } = await supabase.from('employees').select('*').eq('employee_id', employeeId);
    if (error) return next(new Error('Đã có lỗi xảy ra. Vui lòng thử lại sau.'));
    if (employees.length === 0) return next(new AppError(StatusCodes.NOT_FOUND, 'Không tìm thấy dữ liệu'));

    // Return data
    res.status(StatusCodes.OK).json(employees[0]);
});

export const createEmployee = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // Validate data
    const employeeData = req.body;
    const { data, success } = employeeSchema.safeParse(employeeData);
    if (!success && !data)
        return next(new AppError(StatusCodes.BAD_REQUEST, 'Dữ liệu đăng kí nhân viên không hợp lệ.'));

    const { error } = await supabase.from('employees').insert(data);
    if (error) return next(new Error('Đã có lỗi xảy ra. Vui lòng thử lại sau.'));

    // Return data
    res.status(StatusCodes.CREATED).json({ status: 'success' });
});

export const updateEmployee = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // Validate data
    const employeeData = req.body;
    const { data, success } = employeeSchema.partial().safeParse(employeeData);
    if (!success && !data)
        return next(new AppError(StatusCodes.BAD_REQUEST, 'Dữ liệu cập nhật nhân viên không hợp lệ.'));

    // Validate params
    const employeeId = req.params.employee_id;
    if (!employeeId) return next(new AppError(StatusCodes.BAD_REQUEST, 'Dữ liệu cập nhật nhân viên không hợp lệ.'));

    const { error } = await supabase.from('employees').update(data).eq('employee_id', employeeId);
    if (error) return next(new Error('Đã có lỗi xảy ra. Vui lòng thử lại sau.'));

    // Return data
    res.status(StatusCodes.OK).json({ status: 'success' });
});

export const deleteEmployee = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // Validate params
    const employeeId = req.params.employee_id;
    if (!employeeId) return next(new AppError(StatusCodes.BAD_REQUEST, 'Dữ liệu xóa nhân viên không hợp lệ.'));

    const { error } = await supabase.from('employees').delete().eq('service_id', employeeId);
    if (error) return next(new Error('Đã có lỗi xảy ra. Vui lòng thử lại sau.'));

    // Return data
    res.status(StatusCodes.OK).json({ status: 'success' });
});
