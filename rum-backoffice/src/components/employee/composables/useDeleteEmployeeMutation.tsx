import { http } from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteEmployeeMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (employeeId: string) => {
      const response = await http.delete(`/employees/${employeeId}`);
      if (response.status === 200 || response.status === 201) {
        queryClient.refetchQueries({ queryKey: ["employees"] });
      }
      return response;
    },
  });
  return mutation;
};

export default useDeleteEmployeeMutation;
