import { http } from "@/lib/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { useEffect } from "react";
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
type ServiceType = ServiceFormType & { service_id: string };

const defaultValues: Partial<ServiceFormType> = {
  name: "",
  period: 0,
  price: 0,
};

type InitialServiceFormProps = {
  serviceId?: string;
};

const useInitialServiceForm = ({ serviceId }: InitialServiceFormProps) => {
  const form = useForm<ServiceFormType>({
    resolver: zodResolver(serviceFormSchema),
    defaultValues,
  });

  const fetchService = useQuery({
    queryKey: ["service", serviceId],
    queryFn: async () => {
      return await http.get<ServiceType>(`/services/${serviceId}`);
    },
    enabled: !!serviceId,
  });

  useEffect(() => {
    const service = fetchService.data?.data;
    if (service) {
      form.setValue("name", service.name);
      form.setValue("period", service.period);
      form.setValue("price", service.price);
    }
  }, [fetchService.data]);

  return { form, fetchService };
};

export default useInitialServiceForm;
export type { ServiceFormType, InitialServiceFormProps, ServiceType };
