import type { MetaFunction } from "@remix-run/node";
import Home from "~/components/home";
import AppConfig from "~/lib/app-config";

export const meta: MetaFunction = () => {
  return [
    { title: AppConfig.title },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Home />
    </div>
  );
}
