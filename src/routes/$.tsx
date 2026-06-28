import { createFileRoute, redirect } from "@tanstack/react-router";
import { Index } from "./index";

let isInitialRouterLoad = true;

export const Route = createFileRoute("/$")({
  beforeLoad: () => {
    if (isInitialRouterLoad) {
      isInitialRouterLoad = false;
      throw redirect({
        to: "/",
      });
    }
  },
  component: Index,
});
