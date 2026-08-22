import { createFileRoute, redirect } from "@tanstack/react-router";

// The About page has been folded into the Home, For Clients and For Writers
// pages. Keep the old public URL working with a permanent redirect.
export const Route = createFileRoute("/about")({
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 301 });
  },
});
