import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const serviceFormSchema = z.object({
  name: z
    .string({ required_error: "Vui lòng cung cấp tên dịch vụ." })
    .max(255, { message: "Tên dịch vụ không được vượt quá 255 kí tự." }),
  period: z
    .number()
    .or(
      z
        .string({ required_error: "Vui lòng cung cấp khoảng thời gian." })
        .refine((arg) => arg !== "", {
          message: "Vui lòng cung cấp khoảng thời gian.",
        })
    )
    .pipe(
      z.coerce
        .number()
        .int({ message: "Thời gian phải là một số nguyên." })
        .nonnegative({ message: "Thời gian phải là một số dương." })
    ),
  price: z
    .number()
    .or(
      z
        .string({ required_error: "Vui lòng cung cấp giá tiền." })
        .refine((arg) => arg !== "", {
          message: "Vui lòng cung cấp giá tiền.",
        })
    )
    .pipe(
      z.coerce
        .number()
        .int({ message: "Giá tiền phải là một số nguyên." })
        .nonnegative({ message: "Giá tiền phải là một số dương." })
    ),
});

type ServiceFormType = z.infer<typeof serviceFormSchema>;

const defaultValues: Partial<ServiceFormType> = {
  name: "",
  period: 0,
  price: 0,
};

const useInitialServiceForm = () => {
  const form = useForm<ServiceFormType>({
    resolver: zodResolver(serviceFormSchema),
    defaultValues,
  });
  return form;
};

export default useInitialServiceForm;
export type { ServiceFormType };
