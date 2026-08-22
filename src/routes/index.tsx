import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  Building2,
  CheckCircle2,
  FileSearch,
  GraduationCap,
  LineChart,
  Lock,
  MessagesSquare,
  ShieldCheck,
  Timer,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, Eyebrow, CTASection } from "@/components/site/Primitives";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { ProcessFlow } from "@/components/site/ProcessFlow";
import { SITE, registerUrl } from "@/config/site";

const title = "Academic Hub | Vetted Academic Writing & Research Support Platform";
const description =
  "Academic Hub matches every assignment with a vetted, subject-matched writer, holds payment until you approve, and keeps revising until you are satisfied. Built for clients and professional writers.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "academic hub, academic writing platform, research assistance, hire academic writers, freelance academic writing jobs, editing and proofreading, dissertation support",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE.name,
          url: SITE.domain,
          description,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: SITE.name,
          url: SITE.domain,
          email: SITE.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: "575 5th Ave Fl 14",
            addressLocality: "New York City",
            addressRegion: "NY",
            addressCountry: "US",
          },
          contactPoint: [
            {
              "@type": "ContactPoint",
              contactType: "customer support",
              email: SITE.email,
              availableLanguage: "English",
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How Academic Hub handles an assignment",
          step: [
            { "@type": "HowToStep", name: "Client submits the task" },
            { "@type": "HowToStep", name: "Academic Hub assigns a competent, subject-matched writer" },
            { "@type": "HowToStep", name: "Writer handles the task" },
            { "@type": "HowToStep", name: "Writer submits the work" },
            { "@type": "HowToStep", name: "Client reviews the work" },
            { "@type": "HowToStep", name: "Revision loop until the client is satisfied" },
            { "@type": "HowToStep", name: "Client marks the order as completed" },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const pillars = [
  {
    icon: FileSearch,
    title: "Expertise-based assignment",
    body: "No bidding scramble. Tasks are routed to writers verified in the exact subject, level and citation style required.",
  },
  {
    icon: ShieldCheck,
    title: "Payment held until approval",
    body: "Clients fund the order, writers see the work is backed, and the money only moves when the client approves.",
  },
  {
    icon: MessagesSquare,
    title: "One accountable record",
    body: "Brief, files, messages, drafts and revisions live in a single order thread that either side can point to.",
  },
  {
    icon: Timer,
    title: "Deadlines you can see",
    body: "Draft checkpoints and progress tracking flag risk early, not on the morning the work is due.",
  },
];

const audiences = [
  {
    icon: GraduationCap,
    label: "For Clients",
    to: "/for-clients" as const,
    heading: "Get work you can actually rely on",
    points: [
      "Subject-matched writers, not first responders",
      "Funds held in escrow until you approve",
      "Unlimited in-scope revisions",
      "Originality report with every delivery",
    ],
  },
  {
    icon: Users,
    label: "For Writers",
    to: "/for-writers" as const,
    heading: "Get paid properly for what you know",
    points: [
      "Relevant tasks matched to your expertise",
      "Payment secured before you start writing",
      "Clear briefs and protected scope",
      "A performance record that raises your rates",
    ],
  },
];

const trust = [
  { icon: Lock, label: "Encrypted files and messaging" },
  { icon: BadgeCheck, label: "Identity and credential vetting" },
  { icon: BookOpenCheck, label: "Originality checks on every delivery" },
  { icon: Building2, label: "24/7 human support and mediation" },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-lines opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="space-y-7">
              <Eyebrow>Managed academic support</Eyebrow>
              <h1 className="text-4xl font-bold leading-[1.08] lg:text-6xl">
                Academic help that is{" "}
                <span className="text-primary">matched, tracked and accountable</span>
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                Academic Hub replaces informal, high-risk arrangements with a managed platform:
                every task is assigned to a vetted writer with proven expertise, payment is held
                until you approve, and revisions continue until you are satisfied.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <a href={registerUrl("client")}>
                    I need work done <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={registerUrl("writer")}>I want to write</a>
                </Button>
              </div>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                {["No upfront risk", "Vetted writers only", "Revisions until satisfied"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success" />
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Visual: order lifecycle card */}
            <div className="relative">
              <div className="rounded-2xl border border-border bg-background p-6 shadow-elegant">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Order #AH-4821
                    </p>
                    <p className="text-base font-semibold">
                      Literature review — Public Health, MSc
                    </p>
                  </div>
                  <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
                    In progress
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  {[
                    { label: "Task submitted", meta: "Brief, rubric and deadline captured", done: true },
                    {
                      label: "Writer assigned",
                      meta: "Matched: Public Health · 6 yrs · 4.9 rating",
                      done: true,
                    },
                    { label: "Draft checkpoint", meta: "40% delivered, on schedule", done: true },
                    { label: "Client review", meta: "Opens once the writer submits", done: false },
                    { label: "Order completed", meta: "Payment released on approval", done: false },
                  ].map((row) => (
                    <div key={row.label} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold ${
                          row.done
                            ? "bg-success/10 text-success"
                            : "border border-dashed border-border text-muted-foreground"
                        }`}
                      >
                        {row.done ? <CheckCircle2 className="h-4 w-4" /> : "•"}
                      </span>
                      <div>
                        <p
                          className={`text-sm font-medium ${
                            row.done ? "text-foreground" : "text-muted-foreground"
                          }`}
                        >
                          {row.label}
                        </p>
                        <p className="text-xs text-muted-foreground">{row.meta}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl bg-surface p-4">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Lock className="h-4 w-4 text-primary" />
                    Funds held securely until you mark the order complete
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem framing */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="The gap we fill"
          title="Academic support was never broken because of talent. It was broken because of process."
          description="Capable writers and serious clients have always existed. What was missing was a system that reliably connects them, protects both sides, and proves what was agreed."
        />
        <div className="mt-14 space-y-14">
          <div>
            <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              What changes for clients
            </h3>
            <BeforeAfter audience="clients" />
          </div>
          <div>
            <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              What changes for writers
            </h3>
            <BeforeAfter audience="writers" />
          </div>
        </div>
      </Section>

      {/* Pillars */}
      <Section>
        <SectionHeading
          eyebrow="Why Academic Hub"
          title="Four commitments that hold the whole platform together"
          description="Every feature on the platform exists to make one of these four promises verifiable rather than aspirational."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-elegant"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <p.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section tone="surface" id="how-it-works">
        <SectionHeading
          eyebrow="How we handle every task"
          title="A single, visible path from submitted task to completed order"
          description="Nothing about the process is left to trust alone. Each stage has a named owner, a visible status and a defined next step — including what happens when the work is not right yet."
        />
        <div className="mt-14">
          <ProcessFlow />
        </div>
        <div className="mt-10 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/how-it-works">
              See the full process in detail <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Audience split */}
      <Section>
        <SectionHeading
          eyebrow="Built for both sides"
          title="One platform, two very different jobs to be done"
          description="Clients need certainty. Writers need fair, predictable work. Academic Hub is designed so that neither is served at the expense of the other."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {audiences.map((a) => (
            <div
              key={a.label}
              className="flex flex-col rounded-2xl border border-border bg-background p-8 shadow-soft"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <a.icon className="h-6 w-6" />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-primary">
                {a.label}
              </p>
              <h3 className="mt-1 text-2xl font-semibold">{a.heading}</h3>
              <ul className="mt-6 flex-1 space-y-3">
                {a.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    {point}
                  </li>
                ))}
              </ul>
              <Button className="mt-8 self-start" asChild>
                <Link to={a.to}>
                  Explore {a.label} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* Trust */}
      <Section tone="surface">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            align="left"
            eyebrow="Safeguards"
            title="Credibility is a system, not a slogan"
            description="Academic Hub is operated as a managed service. Writers are vetted before they touch a task, deliveries are checked before they reach clients, and a support team stands behind every order."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {trust.map((t) => (
              <div
                key={t.label}
                className="flex items-start gap-3 rounded-xl border border-border bg-background p-5"
              >
                <t.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm font-medium">{t.label}</p>
              </div>
            ))}
            <div className="flex items-start gap-3 rounded-xl border border-border bg-background p-5 sm:col-span-2">
              <LineChart className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm text-muted-foreground">
                Every completed order updates a writer's public performance record — quality,
                punctuality and revision rate — which in turn drives who gets assigned next.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <CTASection
        title="Start with a platform that has to earn the payment"
        description="Submit your first task, or apply to write with us. Setting up an account takes a couple of minutes."
        secondary={{ label: "Talk to our team", to: "/contact" }}
      />
    </>
  );
}
