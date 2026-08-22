import { createFileRoute } from "@tanstack/react-router";

const title = "Privacy Policy | Academic Hub";
const description =
  "How Academic Hub collects, uses, stores and protects the personal information of clients and writers on our academic support platform.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

const sections = [
  {
    h: "1. Information we collect",
    p: "We collect information you provide directly to us, including when you create an account, submit a task, accept an assignment, or communicate through the platform.",
    list: [
      "Name, email address and contact information",
      "Payment and billing information",
      "Profile information, credentials and uploaded documents",
      "Messages, briefs and files exchanged through an order",
      "Usage data and analytics",
    ],
  },
  {
    h: "2. How we use your information",
    p: "We use the information we collect to:",
    list: [
      "Provide, maintain and improve the platform",
      "Match tasks with appropriately qualified writers",
      "Process transactions and send related information",
      "Send technical notices and support messages",
      "Protect against fraudulent, abusive or illegal activity",
      "Comply with legal obligations",
    ],
  },
  {
    h: "3. Information sharing",
    p: "We do not sell your personal information. Client identities are not shared with writers. We may share information only:",
    list: [
      "With your consent or at your direction",
      "With service providers who assist in our operations",
      "To comply with legal obligations",
      "To protect rights, property and safety",
    ],
  },
  {
    h: "4. Data security",
    p: "Files and messages are encrypted in transit and at rest. We apply appropriate technical and organisational measures to protect personal information against unauthorised access, alteration, disclosure or destruction.",
  },
  {
    h: "5. Your rights",
    p: "You have the right to:",
    list: [
      "Access your personal information",
      "Correct inaccurate data",
      "Request deletion of your data",
      "Object to processing of your data",
      "Export your data",
    ],
  },
  {
    h: "6. Cookies and tracking",
    p: "We use cookies and similar technologies to keep you signed in, remember preferences and understand how the platform is used.",
  },
  {
    h: "7. Changes to this policy",
    p: "We may update this policy from time to time. Material changes will be posted on this page with an updated revision date.",
  },
  {
    h: "8. Contact us",
    p: "Questions about this policy can be sent to support@academichubpro.com, or by post to 575 5th Ave Fl 14, New York City, New York.",
  },
];

function Privacy() {
  return (
    <div className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString("en-US", { dateStyle: "long" })}
        </p>
        <div className="mt-10 space-y-10">
          {sections.map((s) => (
            <section key={s.h} className="space-y-3">
              <h2 className="text-xl font-semibold">{s.h}</h2>
              <p className="leading-relaxed text-muted-foreground">{s.p}</p>
              {s.list ? (
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  {s.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
