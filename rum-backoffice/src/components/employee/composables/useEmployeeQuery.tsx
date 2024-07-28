"use client";
import { http } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { EmployeeType } from "./useInitialEmployeeForm";

const useEmployeeQuery = (params: any) => {
  const query = useQuery({
    queryKey: ["employees", params],
    queryFn: async () => {
      return await http.get<EmployeeType[]>("/employees", {
        params,
      });
    },
    gcTime: Infinity,
    staleTime: Infinity,
  });
  return query;
};

export default useEmployeeQuery;
