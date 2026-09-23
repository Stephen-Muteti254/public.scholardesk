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
  ScanSearch,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, CTASection } from "@/components/site/Primitives";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { ProcessFlow } from "@/components/site/ProcessFlow";
import { PORTALS, SITE, registerUrl } from "@/config/site";
import { SERVICE_AREAS } from "@/config/services";

const title = "ScholarDesk | Expert Support for Students & Professionals";
const description =
  "ScholarDesk connects students and professionals with vetted experts for academic work, professional documents, research, exam materials, originality reports and assessment preparation.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "scholardesk, assignment help, class help, academic research help, essay writing support, exam materials, biology past papers, plagiarism report, AI detection report, exam preparation, interview practice",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: SITE.ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: SITE.ogImage },
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
          logo: `${SITE.domain}/brand/wordmark-full-01.png`,
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
          "@type": "ItemList",
          name: "ScholarDesk areas of focus",
          itemListElement: SERVICE_AREAS.map((area, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: area.name,
            description: area.summary,
            url: `${SITE.domain}/services#${area.slug}`,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How ScholarDesk handles an assignment",
          step: [
            { "@type": "HowToStep", name: "Customer submits the task" },
            { "@type": "HowToStep", name: "ScholarDesk assigns a competent, subject-matched expert" },
            { "@type": "HowToStep", name: "Expert handles the task" },
            { "@type": "HowToStep", name: "Expert submits the work" },
            { "@type": "HowToStep", name: "Customer reviews the work" },
            { "@type": "HowToStep", name: "Revision loop until the customer is satisfied" },
            { "@type": "HowToStep", name: "Customer marks the order as completed" },
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
    body: "No bidding scramble. Tasks are routed to experts verified in the exact subject, level and deliverable required.",
  },
  {
    icon: ShieldCheck,
    title: "Payment held until approval",
    body: "Customers fund the order, experts see the work is backed, and the money only moves when the customer approves.",
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
    label: "For Students",
    to: "/for-students" as const,
    heading: "Move forward with the right subject support",
    points: [
      "Assignments, classes and academic research",
      "Revision resources and past-paper guidance",
      "Maths, technology, science and more",
      "Exam and interview taking options",
    ],
  },
  {
    icon: Building2,
    label: "For Professionals",
    to: "/for-professionals" as const,
    heading: "Deliver professional work with specialist support",
    points: [
      "Business, technical and research documents",
      "Data analysis and evidence synthesis",
      "CV, résumé and career materials",
      "Certification and interview preparation",
    ],
  },
  {
    icon: Users,
    label: "For Experts",
    to: "/for-writers" as const,
    heading: "Get paid properly for what you know",
    points: [
      "Relevant tasks matched to your expertise",
      "Payment secured before you start work",
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
      <section className="home-cinematic-hero relative isolate flex min-h-[680px] overflow-hidden bg-primary-deep text-primary-foreground lg:min-h-[720px]">
        <img
          src="/images/students-collaborating.jpg"
          alt="Students collaborating with laptops during a university lecture"
          width={738}
          height={390}
          fetchPriority="high"
          className="home-cinematic-image absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="home-cinematic-overlay absolute inset-0 -z-10" aria-hidden="true" />
        <div className="relative mx-auto flex w-full max-w-7xl items-center px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid w-full items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,.75fr)]">
            <div className="max-w-3xl space-y-7">
              {/*<p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/80">
                ScholarDesk for students and professionals
              </p>*/}
              <h1 className="text-4xl font-bold leading-[1.08] lg:text-6xl">
                Expert support that is{" "}
                <span className="text-primary-foreground">matched, tracked and accountable</span>
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/85">
                 ScholarDesk gives students and professionals one managed place for academic support, professional documents, research, exam materials and assessment preparation. Every task is matched to a vetted expert, tracked clearly and reviewed before payment is released.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <a href={registerUrl("client")}>
                    Get expert support <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-primary-foreground/40 bg-background/10 text-primary-foreground hover:bg-background/20 hover:text-primary-foreground">
                  <a href={registerUrl("writer")}>Join as an expert</a>
                </Button>
              </div>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-primary-foreground/80">
                {["Students and professionals", "Vetted experts", "Revisions until satisfied"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="hidden justify-self-end lg:block" aria-hidden="true">
              <div className="home-lesson-panel w-[360px] border-l border-primary-foreground/35 pl-7">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/65">Live learning focus</p>
                <p className="mt-3 text-2xl font-semibold">Emerging AI &amp; learning</p>
                <div className="mt-6 space-y-4 text-sm text-primary-foreground/80">
                  {["Understand the model", "Question the output", "Verify the evidence"].map((label, index) => (
                    <div key={label} className="home-lesson-line flex items-center gap-3" style={{ animationDelay: `${index * 1.2}s` }}>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-primary-foreground/35 text-xs font-semibold">{index + 1}</span>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-7 h-px w-full bg-primary-foreground/25" />
                <p className="mt-4 text-xs leading-relaxed text-primary-foreground/60">A practical framework for using new tools critically and responsibly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem framing */}
      <Section tone="surface">
        <SectionHeading
          title="Academic support was never broken because of talent. It was broken because of process."
          description="Capable experts and serious customers have always existed. What was missing was a system that reliably connects them, protects both sides and records what was agreed."
        />
        <div className="mt-14 space-y-14">
          <div>
            <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              What changes for customers
            </h3>
            <BeforeAfter audience="clients" />
          </div>
          <div>
            <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              What changes for experts
            </h3>
            <BeforeAfter audience="writers" />
          </div>
        </div>
      </Section>

      {/* Pillars */}
      <Section>
        <SectionHeading
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

      {/* Areas of focus */}
      <Section tone="surface">
        <SectionHeading
          title="Five areas of focus, covered end to end"
          description="Assignment Help, Class Help, Exam Materials, AI &amp; Plagiarism and Exams &amp; Interviews, each with its own verified specialists, and all five managed on one accountable record."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_AREAS.map((area) => (
            <Link
              key={area.slug}
              to="/services"
              hash={area.slug}
              className="group flex h-full flex-col rounded-2xl border border-border bg-background p-7 transition-shadow hover:shadow-elegant"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <area.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{area.name}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{area.tagline}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {area.summary}
              </p>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-primary">
                See what this covers
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
          <div className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-7">
            <h3 className="text-lg font-semibold">Something else?</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Matching is done by a person reading your brief. Send the task over and we will tell
              you honestly whether we can cover it.
            </p>
            <Button className="mt-6 self-start" variant="outline" asChild>
              <Link to="/contact">Ask our team</Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <div className="grid items-center gap-8 lg:grid-cols-[auto_1fr_auto]">
          <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <ScanSearch className="h-7 w-7" />
          </span>
          <div>
            <p className="text-sm font-semibold text-primary">AssessDesk by ScholarDesk</p>
            <h2 className="mt-2 text-2xl font-bold lg:text-3xl">Take exams, tests and interviews with invisible AI support</h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">
              Select any question on screen — OCR reads it, AI answers it, and the result appears on an overlay invisible to screen capture, recording and remote proctors.
            </p>
          </div>
          <Button size="lg" asChild>
            <a href={PORTALS.ASSESSDESK}>
              Explore AssessDesk <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </Section>

      {/* Process */}
      <Section id="how-it-works">
        <SectionHeading
          title="A single, visible path from submitted task to completed order"
          description="Nothing about the process is left to trust alone. Each stage has a named owner, a visible status and a defined next step, including what happens when the work is not right yet."
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
          title="One platform, built around your role"
          description="Students and professionals need relevant specialist support. Experts need fair, predictable work. Choose the path that reflects what you are here to accomplish."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
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
            title="Credibility is a system, not a slogan"
            description="ScholarDesk is operated as a managed service. Experts are vetted before they receive a task, deliveries are checked before they reach customers, and a support team stands behind every order."
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
                Every completed order updates an expert's public performance record: quality,
                punctuality and revision rate, which in turn drives who gets assigned next.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <CTASection
        title="Start with a platform that has to earn the payment"
        description="Submit your first task, or apply as an expert. Setting up an account takes a couple of minutes."
        secondary={{ label: "Talk to our team", to: "/contact" }}
      />
    </>
  );
}
