import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  index("routes/landing.tsx"),
  route("/auth/kakao/callback", "routes/auth/kakao.tsx"),
] satisfies RouteConfig;
