"use client";
import { http } from "@/lib/axios";
import { ServiceType } from "./useInitialServiceForm";
import { useQuery } from "@tanstack/react-query";

const useServicesQuery = (params: any) => {
  const query = useQuery({
    queryKey: ["services", params],
    queryFn: async () => {
      return await http.get<ServiceType[]>("/services", {
        params,
      });
    },
    gcTime: Infinity,
    staleTime: Infinity,
  });
  return query;
};

export default useServicesQuery;
