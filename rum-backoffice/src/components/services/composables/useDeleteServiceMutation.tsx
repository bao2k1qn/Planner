import { http } from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteServiceMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (serviceId: string) => {
      const response = await http.delete(`/services/${serviceId}`);
      if (response.status === 200 || response.status === 201) {
        queryClient.refetchQueries({ queryKey: ["services"] });
      }
      return response;
    },
  });
  return mutation;
};

export default useDeleteServiceMutation;
