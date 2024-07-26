import moment from 'moment';
import { z } from 'zod';

const serviceFormSchema = z.object({
    name: z
        .string({ required_error: 'Vui lòng cung cấp tên dịch vụ.' })
        .max(255, { message: 'Tên dịch vụ không được vượt quá 255 kí tự.' }),
    period: z
        .number()
        .or(
            z.string({ required_error: 'Vui lòng cung cấp khoảng thời gian.' }).refine((arg) => arg !== '', {
                message: 'Vui lòng cung cấp khoảng thời gian.',
            }),
        )
        .pipe(
            z.coerce
                .number()
                .int({ message: 'Thời gian phải là một số nguyên.' })
                .nonnegative({ message: 'Thời gian phải là một số dương.' }),
        ),
    price: z
        .number()
        .or(
            z.string({ required_error: 'Vui lòng cung cấp giá tiền.' }).refine((arg) => arg !== '', {
                message: 'Vui lòng cung cấp giá tiền.',
            }),
        )
        .pipe(
            z.coerce
                .number()
                .int({ message: 'Giá tiền phải là một số nguyên.' })
                .nonnegative({ message: 'Giá tiền phải là một số dương.' }),
        ),
});

const employeeSchema = z.object({
    id: z.string(),
    name: z
        .string()
        .min(1, { message: 'Vui lòng cung cấp tên nhân viên.' })
        .max(255, { message: 'Tên nhân viên không được vượt quá 255 kí tự' }),
    nameAlias: z.string().max(255, { message: 'Tên ẩn danh không được vượt quá 255 kí tự' }).optional(),
    skills: z.string().max(255, { message: 'Tên ẩn danh không được vượt quá 255 kí tự' }).optional(),
    gender: z.enum(['Nam', 'Nữ']).optional(),
    dob: z
        .string()
        .optional()
        .refine((date) => !date || (date && moment(date).isValid()), {
            message: 'Vui lòng cung cấp ngày hợp lệ.',
        }),
    joiningDate: z
        .string()
        .optional()
        .refine((date) => !date || (date && moment(date).isValid()), {
            message: 'Vui lòng cung cấp ngày hợp lệ.',
        }),
});

type serviceFormSchemaType = z.infer<typeof serviceFormSchema>;
type employeeSchemaType = z.infer<typeof employeeSchema>;

export { serviceFormSchema, employeeSchema };
export type { serviceFormSchemaType, employeeSchemaType };
