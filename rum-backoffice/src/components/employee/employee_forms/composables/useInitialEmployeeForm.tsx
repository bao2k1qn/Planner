import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const employeeFormSchema = z.object({
  name: z
    .string({ required_error: "Vui lòng nhập tên dịch vụ." })
    .max(255, { message: "Tên dịch vụ không được vượt quá 255 kí tự." }),
  period: z
    .string({ required_error: "Vui lòng nhập khoảng thời gian." })
    .refine((arg) => arg !== "", {
      message: "Vui lòng nhập khoảng thời gian.",
    })
    .pipe(
      z.coerce
        .number()
        .int({ message: "Thời gian phải là một số nguyên." })
        .nonnegative({ message: "Thời gian phải là một số dương." })
    ),
  price: z
    .string({ required_error: "Vui lòng nhập giá tiền." })
    .refine((arg) => arg !== "", {
      message: "Vui lòng nhập khoảng giá tiền.",
    })
    .pipe(
      z.coerce
        .number()
        .int({ message: "Giá tiền phải là một số nguyên." })
        .nonnegative({ message: "Giá tiền phải là một số dương." })
    ),
});

type EmployeeFormType = z.infer<typeof employeeFormSchema>;

const defaultValues: Partial<EmployeeFormType> = {};

const useInitialEmployeeForm = () => {
  const form = useForm<EmployeeFormType>({
    resolver: zodResolver(employeeFormSchema),
    defaultValues,
  });
  return form;
};

export default useInitialEmployeeForm;
export type { EmployeeFormType };
