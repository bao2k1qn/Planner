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
    name: z
        .string()
        .min(1, { message: 'Vui lòng cung cấp tên nhân viên.' })
        .max(255, { message: 'Tên nhân viên không được vượt quá 255 kí tự' }),
    nameAlias: z
        .string()
        .max(255, { message: 'Tên ẩn danh không được vượt quá 255 kí tự' })
        .optional()
        .transform((arg) => arg || undefined),
    skills: z
        .string()
        .max(255, { message: 'Tên ẩn danh không được vượt quá 255 kí tự' })
        .optional()
        .transform((arg) => arg || undefined),
    gender: z
        .enum(['M', 'F'])
        .optional()
        .transform((arg) => arg || undefined),
    dob: z
        .string()
        .optional()
        .refine((date) => !date || (date && moment(date).isValid()), {
            message: 'Vui lòng cung cấp ngày hợp lệ.',
        })
        .transform((arg) => arg || undefined),
    joiningDate: z
        .string()
        .optional()
        .refine((date) => !date || (date && moment(date).isValid()), {
            message: 'Vui lòng cung cấp ngày hợp lệ.',
        })
        .transform((arg) => arg || undefined),
});

const OnlyFieldOfBookingsSchema = z.object({
    name: z
        .string({
            required_error: 'Vui lòng cung cấp tên khách.',
        })
        .min(1, {
            message: 'Tên phải có ít nhất 1 ký tự.',
        })
        .max(30, {
            message: 'Tên không được dài hơn 30 ký tự.',
        }),
    serviceId: z.string({ required_error: 'Vui lòng chọn một dịch vụ.' }),
    employeeId: z.string({
        required_error: 'Vui lòng chọn một nhân viên.',
    }),
    isSelectedInAdvance: z.boolean({
        invalid_type_error: 'Đặt trước phải là một giá trị true/false.',
    }),
    startDate: z
        .string({ required_error: 'Vui lòng chọn thời gian bắt đầu.' })
        .min(1, { message: 'Vui lòng chọn thời gian bắt đầu.' })
        .refine((date) => !date || (date && moment(date).isValid()), {
            message: 'Vui lòng cung cấp ngày hợp lệ.',
        }),
    endDate: z
        .string({ required_error: 'Vui lòng chọn thời gian bắt đầu.' })
        .min(1, { message: 'Vui lòng chọn thời gian kết thúc.' })
        .refine((date) => !date || (date && moment(date).isValid()), {
            message: 'Vui lòng cung cấp ngày hợp lệ.',
        }),
    notes: z.string().max(255, { message: 'Phần chú ý không được vượt quá 255 kí tự' }).optional(),
});
const bookingSchema = OnlyFieldOfBookingsSchema.superRefine((data, ctx) => {
    if (data.startDate && data.endDate && data.startDate >= data.endDate) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['startDate'],
            message: 'Thời gian bắt đầu phải nhỏ hơn thời gian kết thúc.',
        });
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['endDate'],
            message: 'Thời gian kết thúc phải lớn hơn thời gian bắt thúc.',
        });
    }
});

const OptionalBookingSchema = OnlyFieldOfBookingsSchema.partial().superRefine((data, ctx) => {
    if (data.startDate && data.endDate && data.startDate >= data.endDate) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['startDate'],
            message: 'Thời gian bắt đầu phải nhỏ hơn thời gian kết thúc.',
        });
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['endDate'],
            message: 'Thời gian kết thúc phải lớn hơn thời gian bắt thúc.',
        });
    }
});

type serviceFormSchemaType = z.infer<typeof serviceFormSchema>;
type employeeSchemaType = z.infer<typeof employeeSchema>;
type bookingSchemaType = z.infer<typeof bookingSchema>;

export { serviceFormSchema, employeeSchema, bookingSchema, OptionalBookingSchema };
export type { serviceFormSchemaType, employeeSchemaType, bookingSchemaType };
