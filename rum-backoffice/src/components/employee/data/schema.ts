import moment from "moment";
import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const employeeSchema = z.object({
  id: z.string(),
  name: z
    .string()
    .min(1, { message: "Vui lòng cung cấp tên nhân viên." })
    .max(255, { message: "Tên nhân viên không được vượt quá 255 kí tự" }),
  nameAlias: z
    .string()
    .max(255, { message: "Tên ẩn danh không được vượt quá 255 kí tự" })
    .optional(),
  skills: z
    .string()
    .max(255, { message: "Tên ẩn danh không được vượt quá 255 kí tự" })
    .optional(),
  gender: z.enum(["Nam", "Nữ"]).optional(),
  dob: z
    .string()
    .optional()
    .refine((date) => !date || (date && moment(date).isValid()), {
      message: "Vui lòng cung cấp ngày hợp lệ.",
    }),
  joiningDate: z
    .string()
    .optional()
    .refine((date) => !date || (date && moment(date).isValid()), {
      message: "Vui lòng cung cấp ngày hợp lệ.",
    }),
});

export type Employee = z.infer<typeof employeeSchema>;
