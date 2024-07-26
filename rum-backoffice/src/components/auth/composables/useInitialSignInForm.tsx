import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const LoginSchema = z.object({
  username: z.string().email({ message: "Vui lòng nhập email hợp lệ." }),
  password: z.string().min(8, "Mật khẩu ít nhất 8 kí tự"),
});

type LoginSchemaType = z.infer<typeof LoginSchema>;

const defaultValues: Partial<LoginSchemaType> = {
  username: "",
  password: "",
};

const useInitialSignInForm = () => {
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues,
  });
  return form;
};

export default useInitialSignInForm;
export type { LoginSchemaType };
