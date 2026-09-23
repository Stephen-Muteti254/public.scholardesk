import { createFileRoute, redirect } from "@tanstack/react-router";

// The About page has been folded into the Home and audience pages
// pages. Keep the old public URL working with a permanent redirect.
export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ScholarDesk" },
      { name: "description", content: "Learn about ScholarDesk and its managed support for students, professionals and experts." },
      { name: "robots", content: "noindex, follow" },
      { property: "og:title", content: "About ScholarDesk" },
      { property: "og:description", content: "Learn about ScholarDesk and its managed support for students, professionals and experts." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 301 });
  },
});
