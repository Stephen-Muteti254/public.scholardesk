import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, AlertOctagon, ShieldCheck, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, Eyebrow, CTASection } from "@/components/site/Primitives";
import { ProcessFlow } from "@/components/site/ProcessFlow";
import { registerUrl } from "@/config/site";

const title = "How It Works | From Submitted Task to Completed Order — Academic Hub";
const description =
  "See exactly how Academic Hub handles an assignment: task submitted, expert writer assigned, work delivered, client review, revision loop until satisfied, then the client marks the order complete.";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/how-it-works" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/how-it-works" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How Academic Hub handles an assignment",
          description,
          step: [
            {
              "@type": "HowToStep",
              position: 1,
              name: "Client submits the task",
              text: "Brief, rubric, deadline, word count and citation style are captured in a structured form.",
            },
            {
              "@type": "HowToStep",
              position: 2,
              name: "Academic Hub assigns a competent writer",
              text: "The task is matched to a writer verified in that subject, by expertise, experience and track record.",
            },
            {
              "@type": "HowToStep",
              position: 3,
              name: "Writer handles the task",
              text: "Research and drafting take place in the order workspace with visible progress checkpoints.",
            },
            {
              "@type": "HowToStep",
              position: 4,
              name: "Writer submits the work",
              text: "Final files, sources and an originality report are delivered against the agreed brief.",
            },
            {
              "@type": "HowToStep",
              position: 5,
              name: "Client checks the work",
              text: "The client reviews the delivery against the rubric before any payment is released.",
            },
            {
              "@type": "HowToStep",
              position: 6,
              name: "Revision loop if not satisfied",
              text: "If the client is not satisfied, a revision is requested and the task returns to the writer. The loop repeats until the client is satisfied.",
            },
            {
              "@type": "HowToStep",
              position: 7,
              name: "Client marks the order as completed",
              text: "Once satisfied, the client completes the order, payment is released and both sides rate the collaboration.",
            },
          ],
        }),
      },
    ],
  }),
  component: HowItWorks,
});

const guarantees = [
  {
    icon: Users2,
    title: "Assignment is a decision, not a race",
    body: "Matching weighs verified subject expertise, academic level, past work in the same field, current workload, on-time rate and client ratings. Writers cannot simply grab a task because they were online first.",
  },
  {
    icon: ShieldCheck,
    title: "Nothing closes without the client",
    body: "An order can only reach 'completed' when the client marks it so. There is no automatic approval, no silent timeout that releases payment on the client's behalf.",
  },
  {
    icon: AlertOctagon,
    title: "The loop has a backstop",
    body: "If revisions are not converging, our quality team steps in, reads the brief and the message history, and can reassign the task to a different expert at no additional cost to the client.",
  },
];

function HowItWorks() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-lines opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl space-y-6">
            <Eyebrow>How it works</Eyebrow>
            <h1 className="text-4xl font-bold leading-[1.1] lg:text-5xl">
              Every task follows the same{" "}
              <span className="text-primary">visible, accountable path</span>
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Submit task → assign a competent, subject-matched writer → writer handles the task →
              writer submits → client checks. Satisfied? The client marks the order complete. Not
              satisfied? A revision is requested and the task loops back to the writer, as many
              times as it takes.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <a href={registerUrl("client")}>
                  Submit a task <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/for-writers">Join as a writer</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="The order lifecycle"
          title="Seven stages, each with a named owner"
          description="The revision loop is a designed part of the process, not a failure of it. Work is only finished when the client says it is."
        />
        <div className="mt-14">
          <ProcessFlow />
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Why the process holds"
          title="Three rules that keep the process honest"
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {guarantees.map((g) => (
            <div key={g.title} className="rounded-2xl border border-border bg-background p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <g.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{g.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Same process, two views"
          title="What each side sees at every stage"
        />
        <div className="mt-12 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead className="bg-surface-strong">
              <tr>
                <th className="px-6 py-4 font-semibold">Stage</th>
                <th className="px-6 py-4 font-semibold">Client sees</th>
                <th className="px-6 py-4 font-semibold">Writer sees</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Task submitted", "Confirmation and structured brief on record", "Nothing yet — matching is in progress"],
                ["Writer assigned", "The writer's expertise, experience and rating", "Full brief, fee and deadline before accepting"],
                ["Work in progress", "Checkpoint updates and messaging", "Workspace, files and clarification thread"],
                ["Work submitted", "Delivery, sources and originality report", "Submission logged against the brief"],
                ["Client review", "Review tools against the rubric", "Status: awaiting client review"],
                ["Revision requested", "Revision notes tied to the brief", "Precise change list, same order thread"],
                ["Order completed", "Receipt, files and rating prompt", "Payout queued and record updated"],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-border">
                  <td className="px-6 py-4 font-medium">{row[0]}</td>
                  <td className="px-6 py-4 text-muted-foreground">{row[1]}</td>
                  <td className="px-6 py-4 text-muted-foreground">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <CTASection
        title="See the process from the inside"
        description="Create an account as a client or a writer — there is no cost to look around before committing to an order."
        secondary={{ label: "For Clients", to: "/for-clients" }}
      />
    </>
  );
}
