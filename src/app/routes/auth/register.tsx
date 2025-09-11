import type { Route } from "../+types/landing";
import RegisterPage from "~pages/auth/register";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Discord Clone - 회원가입" },
    { name: "description", content: "회원가입 중입니다." },
  ];
}

export default function Register() {
  return <RegisterPage />;
}
