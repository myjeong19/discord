import { Welcome } from "../welcome/welcome";
import type { Route } from "./+types/home";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Discord Clone" },
    { name: "description", content: "Welcome to Discord Clone!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
