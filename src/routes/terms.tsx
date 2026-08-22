import { createFileRoute } from "@tanstack/react-router";

const title = "Terms & Conditions | Academic Hub";
const description =
  "The terms governing use of the Academic Hub platform by clients and writers, including order handling, revisions, payments and acceptable use.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

const sections = [
  {
    h: "1. Acceptance of terms",
    p: "By creating an account or using the Academic Hub platform, you agree to these terms. If you do not agree, do not use the platform.",
  },
  {
    h: "2. Accounts",
    p: "You must provide accurate information, keep your credentials secure and are responsible for activity under your account. Writers must submit truthful credentials during verification.",
  },
  {
    h: "3. Orders and assignment",
    p: "Clients submit tasks with a defined brief. Academic Hub assigns a writer based on verified expertise, experience and performance record. The brief as submitted defines the scope of the assignment.",
  },
  {
    h: "4. Revisions",
    p: "Revisions that fall within the original brief are free and unlimited, and the task returns to the assigned writer until the client is satisfied. Requests that materially change or extend the brief are treated as new work and may incur additional cost.",
  },
  {
    h: "5. Payments",
    p: "Client funds are held by the platform from the start of an order and released to the writer after the client marks the order as completed. Fees, payout schedules and any applicable charges are shown before an order is confirmed.",
  },
  {
    h: "6. Refunds and disputes",
    p: "Where a delivery cannot be brought in line with the brief, our support team reviews the documented brief and message history and may reassign the task or issue a refund in accordance with our refund policy.",
  },
  {
    h: "7. Acceptable use",
    p: "The platform must be used lawfully and in line with the academic integrity policies that apply to you. You may not use the platform to misrepresent authorship where doing so is prohibited by your institution, or to submit unlawful, infringing or abusive material.",
  },
  {
    h: "8. Intellectual property",
    p: "On completion and payment of an order, ownership of the delivered work transfers to the client. Writers must deliver original work and may not reuse or resell delivered material.",
  },
  {
    h: "9. Confidentiality",
    p: "Both clients and writers must keep order materials and communications confidential. Client identities are not disclosed to writers.",
  },
  {
    h: "10. Limitation of liability",
    p: "The platform is provided on an as-is basis. To the maximum extent permitted by law, Academic Hub's liability arising from an order is limited to the amount paid for that order.",
  },
  {
    h: "11. Termination",
    p: "We may suspend or terminate accounts that breach these terms, including verification fraud, plagiarism, harassment or attempts to transact outside the platform.",
  },
  {
    h: "12. Changes and contact",
    p: "We may update these terms from time to time; continued use constitutes acceptance. Questions can be sent to support@academichubpro.com.",
  },
];

function Terms() {
  return (
    <div className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold">Terms &amp; Conditions</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString("en-US", { dateStyle: "long" })}
        </p>
        <div className="mt-10 space-y-10">
          {sections.map((s) => (
            <section key={s.h} className="space-y-3">
              <h2 className="text-xl font-semibold">{s.h}</h2>
              <p className="leading-relaxed text-muted-foreground">{s.p}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
