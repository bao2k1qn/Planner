import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ServiceFormType } from "./useInitialServiceForm";
import { http } from "@/lib/axios";
import { useCallback } from "react";

type ServiceMutationProps = {
  serviceId?: string;
};

const useServiceMutation = ({ serviceId }: ServiceMutationProps) => {
  const queryClient = useQueryClient();

  const mutationServiceFn = useCallback(
    async (data: ServiceFormType) => {
      if (!serviceId)
        return await http.post<ServiceFormType, unknown>("/services", data);
      else
        return await http.patch<ServiceFormType, unknown>(
          `/services/${serviceId}`,
          data
        );
    },
    [serviceId]
  );

  const mutation = useMutation({
    mutationFn: async (data: ServiceFormType) => {
      const response = await mutationServiceFn(data);
      if (response.status === 200 || response.status === 201) {
        queryClient.refetchQueries({ queryKey: ["services"] });
      }
      return response;
    },
  });
  return mutation;
};

export default useServiceMutation;
