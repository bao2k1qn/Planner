import { EmployeeType } from "@/components/employee/composables/useInitialEmployeeForm";
import { http } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

const useInitialEmployeeData = (params: any = {}) => {
  const employeeQuery = useQuery({
    queryKey: ["employees", params],
    queryFn: async () => {
      return await http.get<EmployeeType[]>("/employees", {
        params,
      });
    },
    gcTime: Infinity,
    staleTime: Infinity,
  });

  return employeeQuery;
};

export default useInitialEmployeeData;
