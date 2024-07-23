import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const paymentFormSchema = z.object({
  paymentType: z.enum(["COD", "Card", "Transfer"] as const, {
    required_error: "Vui lòng chọn phương thức thanh toán.",
  }),
  servicePrice: z
    .string({ required_error: "Vui lòng nhập giá dịch vụ" })
    .refine((arg) => arg !== "", {
      message: "Vui lòng nhập giá dịch vụ",
    })
    .pipe(
      z.coerce
        .number()
        .int({ message: "Giá dịch vụ phải là một số nguyên." })
        .nonnegative({ message: "Giá dịch vụ phải là một số dương." })
    ),
  tips: z.coerce
    .number()
    .int({ message: "Tiền tips phải là một số nguyên." })
    .nonnegative({ message: "Tiền tips phải là một số dương." })
    .transform((arg) => (arg === 0 ? undefined : arg)),
  notes: z
    .string()
    .max(255, { message: "Phần chú ý không được vượt quá 255 kí tự" })
    .optional(),
});

type PaymentFormType = z.infer<typeof paymentFormSchema>;

const defaultValues: PaymentFormType = {
  paymentType: "COD",
  servicePrice: 1,
  tips: 1,
};

const useInitialPaymentForm = () => {
  const form = useForm<PaymentFormType>({
    resolver: zodResolver(paymentFormSchema),
    defaultValues,
  });
  return form;
};

export default useInitialPaymentForm;
export type { PaymentFormType };
