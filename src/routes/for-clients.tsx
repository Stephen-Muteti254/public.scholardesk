import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  FileCheck2,
  GraduationCap,
  Layers,
  Lock,
  MessagesSquare,
  RefreshCcw,
  ShieldCheck,
  Star,
  Timer,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, SectionHeading, Eyebrow, CTASection } from "@/components/site/Primitives";
import { ClientOnboardingFlow } from "@/components/site/OnboardingFlow";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { ProcessFlow } from "@/components/site/ProcessFlow";
import { registerUrl } from "@/config/site";

const title = "For Clients | Hire Vetted Academic Writers — Academic Hub";
const description =
  "Submit your assignment and Academic Hub assigns a vetted, subject-matched writer. Payment is held until you approve, revisions run until you are satisfied, and every instruction is on the record.";

export const Route = createFileRoute("/for-clients")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/for-clients" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/for-clients" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: ForClients,
});

const benefits = [
  {
    icon: GraduationCap,
    title: "Assigned by expertise, not availability",
    body: "We read the brief before anyone else does. The task goes to a writer verified in that discipline and academic level, with a delivery history to match — so you are never someone's first attempt at your subject.",
  },
  {
    icon: Lock,
    title: "Your money stays protected",
    body: "You fund the order, but the writer is not paid until you review the delivery and mark it complete. If the work never meets the brief, you are not left arguing for a refund from a stranger.",
  },
  {
    icon: RefreshCcw,
    title: "Revisions until you are satisfied",
    body: "In-scope revisions are unlimited and free. You log exactly what needs to change, the same writer reworks it, and the loop repeats until the delivery matches what you asked for.",
  },
  {
    icon: MessagesSquare,
    title: "One thread, one source of truth",
    body: "Brief, rubric, attachments, questions, drafts and revision notes stay in a single order workspace. Nothing depends on remembering what was said in a chat three weeks ago.",
  },
  {
    icon: Timer,
    title: "Deadline visibility, not deadline surprises",
    body: "Longer tasks are broken into checkpoints so you can see progress while there is still time to intervene, instead of discovering a problem the night before submission.",
  },
  {
    icon: FileCheck2,
    title: "Checked before it reaches you",
    body: "Every delivery arrives with sources and an originality report, after an internal quality pass against your instructions and citation style.",
  },
];

const steps = [
  {
    icon: ClipboardList,
    title: "Tell us what you need",
    body: "Subject, academic level, word count, citation style, rubric and deadline — captured in a structured brief so nothing is left to interpretation.",
  },
  {
    icon: Layers,
    title: "We match and confirm",
    body: "You see the assigned writer's specialism, experience and rating before work begins, and can ask for a different match.",
  },
  {
    icon: Wallet,
    title: "Fund the order",
    body: "The agreed amount is held securely. The writer starts knowing the work is backed; you keep control of release.",
  },
  {
    icon: ShieldCheck,
    title: "Review, revise, complete",
    body: "Check the delivery against your rubric. Request revisions as needed. Mark the order complete only when it is right.",
  },
];

const faqs = [
  {
    q: "How do you decide which writer gets my task?",
    a: "Tasks are matched on verified subject expertise, academic level, prior work in the same field, current on-time rate and client ratings. Writers do not compete to grab work first; the platform assigns it.",
  },
  {
    q: "What happens if the delivered work is not what I asked for?",
    a: "You request a revision from the order workspace and log precisely what needs to change against the original brief. The task returns to the writer and the loop repeats until you are satisfied. In-scope revisions are free, and persistent mismatches are escalated to our quality team, who can reassign the task at no extra cost.",
  },
  {
    q: "When is the writer actually paid?",
    a: "Only after you review the delivery and mark the order as completed. Until then the funds are held by the platform.",
  },
  {
    q: "Is my information confidential?",
    a: "Yes. Files and messages are encrypted, writers see only what is needed to complete the task, and your identity is never shared with them.",
  },
  {
    q: "Can I talk to the writer while the work is in progress?",
    a: "Yes. Messaging inside the order thread keeps clarifications documented and attached to the task, so both sides can point to what was agreed.",
  },
  {
    q: "What if I need the work urgently?",
    a: "Urgent tasks are matched from the pool of writers with proven fast turnaround in that subject, and are tracked with tighter draft checkpoints.",
  },
];

function ForClients() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-lines opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="space-y-7">
              <Eyebrow>For Clients</Eyebrow>
              <h1 className="text-4xl font-bold leading-[1.1] lg:text-5xl">
                Submit the task. We take responsibility for{" "}
                <span className="text-primary">who does it and how it ends</span>.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                You should not have to gamble on whoever answers first. Academic Hub assigns your
                assignment to a vetted writer in the right field, holds your payment until you
                approve, and keeps revising until the work is right.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <a href={registerUrl("client")}>
                    Submit your first task <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/services">See what we cover</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6 shadow-elegant">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                What you control
              </p>
              <div className="mt-5 space-y-4">
                {[
                  { label: "Who is assigned", value: "Review the match before work starts" },
                  { label: "When money moves", value: "Released only on your approval" },
                  { label: "What counts as done", value: "You mark the order complete" },
                  { label: "How many revisions", value: "Unlimited within the agreed scope" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-start justify-between gap-4 border-b border-border pb-4 last:border-0 last:pb-0"
                  >
                    <p className="text-sm font-medium">{row.label}</p>
                    <p className="text-right text-sm text-muted-foreground">{row.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 rounded-xl bg-surface p-4 text-sm">
                <Star className="h-4 w-4 text-primary" />
                Your rating of the writer feeds directly into future assignments.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="The difference"
          title="What changes the moment you stop working informally"
          description="These are the five failure points clients described before Academic Hub existed — and what the platform does about each of them."
        />
        <div className="mt-14">
          <BeforeAfter audience="clients" />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Client benefits"
          title="Six guarantees you can actually check"
          description="Each of these is enforced by the platform, not promised in marketing copy."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-border bg-background p-7 transition-shadow hover:shadow-elegant"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <b.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="surface" id="get-started">
        <SectionHeading
          eyebrow="Onboarding"
          title="Setting up as a client takes minutes"
          description="No subscription and no charge until you approve a quote. Registration, profile and first brief are one continuous flow."
        />
        <div className="mt-14">
          <ClientOnboardingFlow />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Getting started"
          title="Four steps from brief to completed order"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-border bg-background p-6">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="text-2xl font-bold text-primary/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="surface">

        <SectionHeading
          eyebrow="Order lifecycle"
          title="Exactly how your task is handled"
          description="Including what happens when you are not satisfied — the revision loop is part of the standard process, not an exception to it."
        />
        <div className="mt-14">
          <ProcessFlow />
        </div>
      </Section>

      <Section>

        <SectionHeading eyebrow="FAQ" title="Questions clients ask before their first order" />
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-10 flex justify-center">
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="h-4 w-4 text-success" />
            Still unsure? <Link to="/contact" className="font-medium text-primary hover:underline">
              Talk to our team
            </Link>{" "}
            before you commit to anything.
          </p>
        </div>
      </Section>

      <CTASection
        title="Post your first task in a few minutes"
        description="Create a client account, submit the brief, and see who we match you with before any money moves."
        primaryLabel="Create a client account"
        primaryHref={registerUrl("client")}
        secondary={{ label: "See our services", to: "/services" }}
      />
    </>
  );
}
