import { EmployeeType } from "@/components/employee/composables/useInitialEmployeeForm";
import { ServiceType } from "@/components/services/composables/useInitialServiceForm";
import { http } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

const useInitialServiceData = (params: any = {}) => {
  const serviceQuery = useQuery({
    queryKey: ["services", params],
    queryFn: async () => {
      return await http.get<ServiceType[]>("/services", {
        params,
      });
    },
    gcTime: Infinity,
    staleTime: Infinity,
  });

  return serviceQuery;
};

export default useInitialServiceData;
