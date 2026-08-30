import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ href: "/bg/index.html", reloadDocument: true });
  },
  component: () => null,
});
