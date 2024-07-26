import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

type QueryParameters = Parameters<typeof useQuery>;
type QueryReturnType = ReturnType<typeof useQuery>;

const useCustomQuery = (...args: QueryParameters): QueryReturnType => {
  const router = useRouter();

  const query = useQuery(
    {
      ...args[0],
      queryFn: async (context) => {
        try {
          const queryFnTmp = args[0].queryFn;
          if (queryFnTmp && typeof queryFnTmp === "function")
            return await queryFnTmp(context);
          return queryFnTmp;
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
      },
    },
    args[1]
  );
  return query;
};

export default useCustomQuery;
