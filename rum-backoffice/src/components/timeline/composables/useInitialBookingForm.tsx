import { zodResolver } from "@hookform/resolvers/zod";
import moment from "moment";
import { useForm } from "react-hook-form";
import { z } from "zod";

const bookingFormSchema = z
  .object({
    name: z
      .string({
        required_error: "Vui lòng cung cấp tên khách.",
      })
      .min(1, {
        message: "Tên phải có ít nhất 1 ký tự.",
      })
      .max(30, {
        message: "Tên không được dài hơn 30 ký tự.",
      }),
    service: z.string({ required_error: "Vui lòng chọn một dịch vụ." }),
    employee: z.string({
      required_error: "Vui lòng chọn một nhân viên.",
    }),
    isSelectedInAdvance: z.boolean({
      invalid_type_error: "Đặt trước phải là một giá trị true/false.",
    }),
    startDate: z
      .string({ required_error: "Vui lòng chọn thời gian bắt đầu." })
      .min(1, { message: "Vui lòng chọn thời gian bắt đầu." })
      .refine((date) => !date || (date && moment(date).isValid()), {
        message: "Vui lòng cung cấp ngày hợp lệ.",
      }),
    endDate: z
      .string({ required_error: "Vui lòng chọn thời gian bắt đầu." })
      .min(1, { message: "Vui lòng chọn thời gian kết thúc." })
      .refine((date) => !date || (date && moment(date).isValid()), {
        message: "Vui lòng cung cấp ngày hợp lệ.",
      }),
    notes: z
      .string()
      .max(255, { message: "Phần chú ý không được vượt quá 255 kí tự" })
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (data.startDate && data.endDate && data.startDate >= data.endDate) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["startDate"],
        message: "Thời gian bắt đầu phải nhỏ hơn thời gian kết thúc.",
      });
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["endDate"],
        message: "Thời gian kết thúc phải lớn hơn thời gian bắt thúc.",
      });
    }
  });

type BookingFormValues = z.infer<typeof bookingFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<BookingFormValues> = {
  name: "",
  isSelectedInAdvance: false,
};

const useInitialBookingForm = () => {
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues,
  });
  return form;
};

export default useInitialBookingForm;
export type { BookingFormValues };
