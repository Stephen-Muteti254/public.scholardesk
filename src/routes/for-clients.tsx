import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/for-clients")({
  beforeLoad: () => {
    throw redirect({ to: "/services", statusCode: 301 });
  },
});
