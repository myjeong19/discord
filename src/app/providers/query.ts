import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,

      refetchOnWindowFocus: import.meta.env.MODE === "development",
      refetchOnReconnect: false,
      retry: 3,
    },
    mutations: {
      retry: 0,
    },
  },
});
