"use client";
import { http } from "@/lib/axios";
import { ServiceFormType } from "./useInitialServiceForm";
import { useQuery } from "@tanstack/react-query";

type ServiceType = ServiceFormType & { service_id: string };

const useServicesQuery = (params: any) => {
  const query = useQuery({
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
