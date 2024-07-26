import {
  DefaultError,
  QueryClient,
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useMemo } from "react";
import { useRouter } from "next/navigation";

function useCustomMutation<
  TData = unknown,
  TError = DefaultError,
  TVariables = void,
  TContext = unknown
>(
  options: UseMutationOptions<TData, TError, TVariables, TContext>,
  queryClient?: QueryClient
): UseMutationResult<TData, TError, TVariables, TContext> {
  const router = useRouter();

  // Hanlde recreate mutationFn to handle custom logic. Example: error handling,...
  const mutationFn = useMemo(() => {
    let mutationFnTmp = options.mutationFn;
    if (mutationFnTmp) {
      return async (data: TVariables): Promise<TData> => {
        try {
          return await mutationFnTmp(data);
        } catch (error: any) {
          // Handle the errors of axios
          if (error instanceof AxiosError) {
            if (error.response?.status === 401) router.push("/login");
            throw new Error(
              error.response?.data.message ||
                "Đã có lỗi xảy ra. Vui lòng thử lại sau."
            );
          }

          // With other errors
          throw new Error(error.message);
        }
      };
    }
  }, [options.mutationFn]);

  const mutation = useMutation({ ...options, mutationFn }, queryClient);

  return mutation;
}
export default useCustomMutation;
