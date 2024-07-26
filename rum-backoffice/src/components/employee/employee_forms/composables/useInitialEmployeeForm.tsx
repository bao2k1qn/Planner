import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { employeeSchema } from "../../data/schema";

const employeeFormSchema = employeeSchema.omit({ id: true });

type EmployeeFormType = z.infer<typeof employeeFormSchema>;

const defaultValues: Partial<EmployeeFormType> = {
  name: "",
  nameAlias: "",
  gender: "Nữ",
  skills: "",
  dob: "",
  joiningDate: "",
};

const useInitialEmployeeForm = () => {
  const form = useForm<EmployeeFormType>({
    resolver: zodResolver(employeeFormSchema),
    defaultValues,
  });
  return form;
};

export default useInitialEmployeeForm;
export type { EmployeeFormType };
