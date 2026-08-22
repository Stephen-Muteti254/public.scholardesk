import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  CalendarClock,
  FileText,
  Gauge,
  Handshake,
  Scale,
  ShieldCheck,
  TrendingUp,
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
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { WriterOnboardingFlow } from "@/components/site/OnboardingFlow";
import { registerUrl } from "@/config/site";

const title = "For Writers | Fair, Matched Academic Writing Work — Academic Hub";
const description =
  "Write in your own discipline, with payment secured before you start, clear briefs, protected scope and a performance record that raises the work you are offered. Apply to write with Academic Hub.";

export const Route = createFileRoute("/for-writers")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/for-writers" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/for-writers" }],
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
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to become a writer on Academic Hub",
          step: [
            { "@type": "HowToStep", name: "Apply through the platform" },
            { "@type": "HowToStep", name: "Academic Hub reviews experience and skills" },
            { "@type": "HowToStep", name: "Application approved (or rejected with feedback)" },
            { "@type": "HowToStep", name: "Writer pays the refundable activation deposit" },
            { "@type": "HowToStep", name: "Academic Hub activates the account" },
            { "@type": "HowToStep", name: "Writer completes their expertise profile" },
          ],
        }),
      },
    ],

  }),
  component: ForWriters,
});

const benefits = [
  {
    icon: BriefcaseBusiness,
    title: "Work that matches what you actually know",
    body: "You register your disciplines, levels and citation styles once. Tasks are routed to you on that basis, so you stop wasting hours filtering listings you were never going to take.",
  },
  {
    icon: Wallet,
    title: "Payment secured before you write a word",
    body: "Clients fund the order up front. You can see the work is backed, and payout follows a predictable schedule after the client approves — no chasing invoices, no disappearing clients.",
  },
  {
    icon: FileText,
    title: "Briefs that are complete on day one",
    body: "Rubric, word count, deadline, sources and citation style are captured in a structured form before assignment. Fewer surprises, less unpaid back-and-forth.",
  },
  {
    icon: Scale,
    title: "Scope you can point to",
    body: "The agreed brief is on the record. Revisions inside scope are part of the job; anything beyond it is raised as a new, separately paid request.",
  },
  {
    icon: TrendingUp,
    title: "A record that compounds",
    body: "Quality ratings, on-time rate and subject depth build a profile that unlocks higher-value assignments and priority matching — your reputation stops resetting to zero.",
  },
  {
    icon: ShieldCheck,
    title: "Mediation when something goes wrong",
    body: "Disputes are assessed against the documented brief and message history by our support team, not settled by whoever argues hardest.",
  },
];

const steps = [
  {
    icon: BadgeCheck,
    title: "Set your availability",
    body: "Tell us the workload, turnaround windows and academic levels you want. You can adjust or pause this at any time.",
  },
  {
    icon: Gauge,
    title: "Build your expertise profile",
    body: "Set the disciplines, academic levels, citation styles and turnaround windows you want to be matched on.",
  },
  {
    icon: Handshake,
    title: "Receive matched assignments",
    body: "Relevant tasks come to you with the full brief and agreed fee visible before you accept.",
  },
  {
    icon: CalendarClock,
    title: "Deliver and get paid",
    body: "Submit through the workspace, handle any in-scope revisions, and receive payout once the client marks the order complete.",
  },
];

const expectations = [
  "Original work, written from scratch and properly cited",
  "Deadlines treated as commitments, with early flags if risk appears",
  "Professional, documented communication inside the order thread",
  "Willingness to revise in-scope work until the brief is met",
  "Strict confidentiality around client identity and materials",
];

const faqs = [
  {
    q: "How long does the application review take?",
    a: "Most applications receive a decision within two to five business days. We verify credentials, review your writing samples and assess your subject depth, then email you a reasoned decision either way.",
  },
  {
    q: "What is the activation deposit, and is it refundable?",
    a: "Once your application is approved, a one-off activation deposit secures your writer account. It underwrites your commitment to accepted deadlines, is paid securely inside the platform, and is refundable in line with our writer terms. Nothing is charged before approval, and rejected applicants are never asked to pay.",
  },
  {
    q: "What happens if my application is rejected?",
    a: "You receive a clear explanation of what did not meet the required standard. No deposit is requested and nothing is charged. You are welcome to reapply once you can evidence the missing experience or provide stronger samples.",
  },
  {
    q: "When can I start receiving assignments?",
    a: "As soon as your account is activated and your profile is complete. Your disciplines, academic levels, citation styles and turnaround windows drive the matching, so completing that profile is what switches work on.",
  },
  {

    q: "How do I get assigned work?",
    a: "Once verified, tasks in your registered disciplines are routed to you based on your expertise, experience level, ratings and on-time record. You see the full brief and fee before accepting.",
  },
  {
    q: "When and how am I paid?",
    a: "Client funds are held by the platform from the start of the order. After the client reviews and marks the order complete, your payout is queued on a predictable schedule.",
  },
  {
    q: "What happens if a client keeps requesting revisions?",
    a: "In-scope revisions against the original brief are part of the assignment. Requests that go beyond the agreed brief are treated as new work with additional payment, and our support team reviews any disagreement using the documented brief and message history.",
  },
  {
    q: "Do I need formal academic credentials?",
    a: "You need demonstrable subject expertise. Degrees, publications, professional experience and a strong sample assessment all count toward verification.",
  },
  {
    q: "Can I choose my own workload?",
    a: "Yes. You set your availability, preferred turnaround windows and subject scope, and you can decline any assignment before accepting it.",
  },
  {
    q: "Is my identity shared with clients?",
    a: "No. Clients see your verified expertise, experience and performance record — not your personal identity.",
  },
];

function ForWriters() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-lines opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="space-y-7">
              <Eyebrow>For Writers</Eyebrow>
              <h1 className="text-4xl font-bold leading-[1.1] lg:text-5xl">
                Write in your field.{" "}
                <span className="text-primary">Get paid on terms you can plan around.</span>
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                No bidding wars, no unpaid sample tests, no vanished clients. Academic Hub matches
                you with work in your own discipline, secures the payment before you start, and
                turns every completed order into a record that raises what you are offered next.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <a href={registerUrl("writer")}>
                    Apply to write <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/how-it-works">See how orders work</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6 shadow-elegant">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    New assignment offer
                  </p>
                  <p className="text-base font-semibold">Systematic review — Nursing, MSc</p>
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  Matched to you
                </span>
              </div>
              <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
                {[
                  ["Fee", "Visible before you accept"],
                  ["Deadline", "7 days, checkpoint at day 3"],
                  ["Brief", "Rubric + 12 sources attached"],
                  ["Payment", "Already funded by client"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-lg bg-surface p-4">
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">{k}</dt>
                    <dd className="mt-1 font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
                <BookOpen className="h-4 w-4 text-primary" />
                Matched because: Nursing · MSc level · APA 7 · 4.9 rating
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="The difference"
          title="What freelance academic work looked like before — and what it looks like here"
          description="Every one of these was a reason good writers left the field. Fixing them is the reason Academic Hub is a managed platform rather than a listings board."
        />
        <div className="mt-14">
          <BeforeAfter audience="writers" />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Writer benefits"
          title="What you get when the platform takes responsibility"
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

      <Section tone="surface" id="become-a-writer">
        <SectionHeading
          eyebrow="Becoming a writer"
          title="How to join Academic Hub as a writer"
          description="Onboarding is a defined sequence with a named owner at every stage — you always know who holds the next action and what the decision was."
        />
        <div className="mt-14">
          <WriterOnboardingFlow />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Once you are active"
          title="From your first match to your first payout"
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

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            align="left"
            eyebrow="What we expect"
            title="The standards that make the guarantees possible"
            description="We can promise clients accountability only because writers on the platform hold to a consistent standard. These are the terms of working with us."
          />
          <ul className="space-y-4">
            {expectations.map((e) => (
              <li
                key={e}
                className="flex items-start gap-3 rounded-xl border border-border bg-background p-5"
              >
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm text-muted-foreground">{e}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>

        <SectionHeading eyebrow="FAQ" title="What writers ask before applying" />
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
      </Section>

      <CTASection
        title="Apply once. Get matched to work worth doing."
        description="Verification takes a short application, a credential check and one sample assessment."
        primaryLabel="Apply as a writer"
        primaryHref={registerUrl("writer")}
        secondary={{ label: "Read the full process", to: "/how-it-works" }}
      />
    </>
  );
}
