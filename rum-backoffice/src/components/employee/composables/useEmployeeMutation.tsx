import { useMutation, useQueryClient } from "@tanstack/react-query";
import { http } from "@/lib/axios";
import { useCallback } from "react";
import { EmployeeFormType } from "./useInitialEmployeeForm";

type EmployeeMutationProps = {
  employeeId?: string;
};

const useEmployeeMutation = ({ employeeId }: EmployeeMutationProps) => {
  const queryClient = useQueryClient();

  const mutationEmployeeFn = useCallback(
    async (data: EmployeeFormType) => {
      if (!employeeId)
        return await http.post<EmployeeFormType, unknown>("/employees", data);
      else
        return await http.patch<EmployeeFormType, unknown>(
          `/employees/${employeeId}`,
          data
        );
    },
    [employeeId]
  );

  const mutation = useMutation({
    mutationFn: async (data: EmployeeFormType) => {
      const response = await mutationEmployeeFn(data);
      if (response.status === 200 || response.status === 201) {
        queryClient.refetchQueries({ queryKey: ["employees"] });
      }
      return response;
    },
  });
  return mutation;
};

export default useEmployeeMutation;
