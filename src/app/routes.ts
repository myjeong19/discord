import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  index("routes/landing.tsx"),
  route("/auth/kakao", "routes/auth/kakao.tsx"),
  route("/auth/register", "routes/auth/register.tsx"),
] satisfies RouteConfig;
