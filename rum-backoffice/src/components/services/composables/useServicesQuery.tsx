"use client";
import { http } from "@/lib/axios";
import { ServiceFormType } from "./useInitialServiceForm";
import useCustomQuery from "@/components/_hooks/useCustomQuery";

type ServiceType = ServiceFormType & { service_id: string };

const useServicesQuery = (params: any) => {
  const query = useCustomQuery({
    queryKey: ["services", params],
    queryFn: async () => {
      return await http.get<ServiceType[]>("/services", {
        params,
      });
    },
  });
  return query;
};

export default useServicesQuery;
