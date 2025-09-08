import LandingPage from "~/pages/landing";
import type { Route } from "./+types/landing";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Discord Clone" },
    { name: "description", content: "Welcome to Discord Clone!" },
  ];
}

export default function Landing() {
  return <LandingPage />;
}
