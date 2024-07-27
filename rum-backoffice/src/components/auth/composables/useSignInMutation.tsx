"use client";
import { http } from "@/lib/axios";
import { LoginSchemaType } from "./useInitialSignInForm";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

const useSignInMutation = () => {
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: async (data: LoginSchemaType) => {
      const response = await http.post<
        LoginSchemaType,
        { token: string; user: unknown }
      >("/auth/signin", data);

      if (response.data) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }

      router.push("/timeline");
    },
  });
  return mutation;
};

export default useSignInMutation;
