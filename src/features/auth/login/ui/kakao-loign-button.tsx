import { redirectToKakaoAuth } from "~/features/auth/login/api/redirect-to-kakao-auth";

export function KakaoLoginButton() {
  return (
    <button
      type="button"
      onClick={redirectToKakaoAuth}
      className="fixed top-10 right-10 z-10 bg-white text-transparent p-3 rounded-md cursor-pointer "
    >
      <img src="/ko-kakao.webp" alt="kakao login button" />
    </button>
  );
}
