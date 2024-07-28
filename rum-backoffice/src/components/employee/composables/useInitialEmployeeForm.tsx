import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { employeeSchema } from "../data/schema";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { http } from "@/lib/axios";

const employeeFormSchema = employeeSchema.omit({ employeeId: true });

type EmployeeFormType = z.infer<typeof employeeFormSchema>;
type EmployeeType = EmployeeFormType & { employeeId: string };
type InitialEmployeeFormProps = {
  employeeId?: string;
};

const defaultValues: Partial<EmployeeFormType> = {
  name: "",
  nameAlias: "",
  gender: "F",
  skills: "",
  dob: "",
  joiningDate: "",
};

const useInitialEmployeeForm = ({ employeeId }: InitialEmployeeFormProps) => {
  const form = useForm<EmployeeFormType>({
    resolver: zodResolver(employeeFormSchema),
    defaultValues,
  });

  const fetchEmployee = useQuery({
    queryKey: ["employee", employeeId],
    queryFn: async () => {
      return await http.get<EmployeeType>(`/employees/${employeeId}`);
    },
    enabled: !!employeeId,
  });

  useEffect(() => {
    const employee = fetchEmployee.data?.data;
    if (employee) {
      form.setValue("name", employee.name);
      form.setValue("nameAlias", employee.nameAlias);
      form.setValue("skills", employee.skills);
      form.setValue("gender", employee.gender);
      form.setValue("dob", employee.dob);
      form.setValue("joiningDate", employee.joiningDate);
    }
  }, [fetchEmployee.data]);
  return { form, fetchEmployee };
};

export default useInitialEmployeeForm;
export type { EmployeeFormType, EmployeeType, InitialEmployeeFormProps };
