import { useEffect } from "react";
import { useMutation } from "react-query";
import { requestKy } from "~/shared/api/ky";

const kakaoLogin = async (code: string) => {
  const response = await requestKy.post("auth/kakao", {
    body: JSON.stringify({ code }),
  });
  return response;
};

export const useKakaoLogin = (): void => {
  const mutation = useMutation({
    mutationFn: async (code: string) => {
      const response = await kakaoLogin(code);
      return response;
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
    retry: false,
  });

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      mutation.mutate(code);
    }
  }, [mutation.mutate]);
};
