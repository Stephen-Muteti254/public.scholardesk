import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, CTASection } from "@/components/site/Primitives";
import { SERVICE_AREAS, DISCIPLINES } from "@/config/services";
import { PORTALS, SITE, registerUrl } from "@/config/site";
import { EditorialImage } from "@/components/site/EditorialImage";

const title =
  "Assignment, Class, Research & Exam Support Services | ScholarDesk";
const description =
  "Explore assignment help, class support, academic research, exam materials, past-paper guidance, AI and plagiarism reports, and permitted exam and interview practice.";

const faqs = [
  {
    q: "Which areas does ScholarDesk cover?",
    a: "Five: Assignment Help (written coursework, research papers and dissertations), Class Help (ongoing support across a whole unit or semester), Exam Materials (study guides, question banks and practice sets), AI & Plagiarism (similarity and AI-detection reporting plus human remediation), and Exams & Interviews (AssessDesk : live, undetectable AI assistance during proctored exams and interviews, plus expert-taken sessions).",
  },
  {
    q: "How is my task matched to an expert?",
    a: "A person reads your brief and assigns it to an expert verified in that subject, academic level and citation style. There is no bidding scramble and no first-responder allocation.",
  },
  {
    q: "When is my payment released?",
    a: "Funds are held from the moment you place the order and are released only when you mark the order complete. In-scope revisions continue until the delivery matches the agreed brief.",
  },
  {
    q: "Do I get an originality and AI report?",
    a: "Yes. Every delivery includes a similarity report, and AI-detection screening is available on request or as a standalone service under AI & Plagiarism.",
  },
  {
    q: "What if my task does not fit one of the five areas?",
    a: "Send it anyway. Matching is done by a person, so we will tell you honestly whether we can cover it before you commit to anything.",
  },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "assignment help, class help, online class help, exam materials, study guides, plagiarism report, AI detection report, exam preparation, mock interviews, essay writing support, academic research help, biology past papers, online assessment practice, technical interview preparation",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { property: "og:image", content: SITE.ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: SITE.ogImage },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
            { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Academic and professional support services",
          provider: { "@type": "Organization", name: SITE.name, url: SITE.domain },
          areaServed: "Worldwide",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "ScholarDesk areas of focus",
            itemListElement: SERVICE_AREAS.map((area) => ({
              "@type": "OfferCatalog",
              name: area.name,
              description: area.summary,
              itemListElement: area.covers.map((item) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: item },
              })),
            })),
          },
        }),
      },
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
  component: Services,
});

function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface">
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(380px,.82fr)]">
            <div>
              <h1 className="text-4xl font-bold leading-[1.1] lg:text-5xl">
                Five areas we deal with, <span className="text-primary">one standard of delivery</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Academic work, professional documents and taking assessments, interviews and exams follow the same route:
                a vetted expert with relevant expertise, funds held until you approve, and revisions
                until the delivery meets the agreed brief.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <a href={registerUrl("client")}>
                    Submit a task <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/how-it-works">How delivery works</Link>
                </Button>
              </div>
            </div>
            <EditorialImage
              src="/images/services-hero.jpg"
              alt="A specialist presenting a connected learning and education concept"
              eyebrow="One managed platform"
              caption="Specialist support across academic, professional and assessment work."
              eager
              className="w-full max-w-[420px] justify-self-end"
              imageClassName="object-center"
            />
          </div>
        </div>
      </section>

      {/* Area index: jump links */}
      <nav
        aria-label="Areas of focus"
        className="border-y border-border bg-background/85 backdrop-blur"
      >
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-4 sm:px-6 lg:justify-center lg:px-8">
          {SERVICE_AREAS.map((area) => (
            <a
              key={area.slug}
              href={`#${area.slug}`}
              className="flex shrink-0 items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
            >
              <area.icon className="h-4 w-4" />
              {area.name}
            </a>
          ))}
        </div>
      </nav>

      {/* The five areas */}
      <Section>
        <SectionHeading
          title="Assignment Help, Class Help, Exam Materials, AI &amp; Plagiarism, Exams &amp; Interviews"
          description="Each area has its own specialists, its own deliverables and its own quality checks, but all five are managed on one accountable record."
        />
        <div className="mt-16 space-y-8">
          {SERVICE_AREAS.map((area, index) => (
            <article
              key={area.slug}
              id={area.slug}
              className="scroll-mt-28 overflow-hidden rounded-3xl border border-border bg-background shadow-soft transition-shadow hover:shadow-elegant"
            >
              <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
                <div className="border-b border-border bg-surface p-8 lg:border-b-0 lg:border-r lg:p-10">
                  <div className="flex items-center gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <area.icon className="h-7 w-7" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Area {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="mt-6 text-2xl font-semibold lg:text-3xl">{area.name}</h2>
                  <p className="mt-1 text-sm font-medium text-primary">{area.tagline}</p>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {area.summary}
                  </p>
                  <Button className="mt-8" asChild>
                    <a href={area.slug === "exams-and-interviews" ? PORTALS.ASSESSDESK : registerUrl("client")}>
                      {area.slug === "exams-and-interviews" ? "Take exams with AssessDesk" : `Request ${area.name}`} <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>

                <div className="p-8 lg:p-10">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    What this covers
                  </h3>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {area.covers.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 border-t border-border pt-5">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Guaranteed on every order
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {area.standards.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Disciplines */}
      <Section tone="surface">
        <SectionHeading
          title="Subject coverage across the fields customers ask for most"
          description="Experts are verified per discipline and academic level. If your field is not listed, ask us: our matching team will tell you honestly whether we can cover it."
        />
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {DISCIPLINES.map((d) => (
            <span
              key={d}
              className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground"
            >
              {d}
            </span>
          ))}
        </div>
      </Section>

      {/* Standards */}
      <Section>
        <SectionHeading title="What is included with every single order" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Subject-matched expert",
              body: "Assigned on verified expertise and track record, never on who claimed the task first.",
            },
            {
              title: "Originality report",
              body: "Work is produced from scratch and screened before it reaches you.",
            },
            {
              title: "Unlimited in-scope revisions",
              body: "The revision loop runs until the delivery matches the agreed brief.",
            },
            {
              title: "Approval-gated payment",
              body: "Funds are released only when you mark the order complete.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="surface">
        <SectionHeading
          title="What customers ask before they place a first order"
        />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-border overflow-hidden rounded-2xl border border-border bg-background">
          {faqs.map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="flex cursor-pointer items-start justify-between gap-4 text-base font-semibold marker:content-none">
                {f.q}
                <span
                  className="mt-1 shrink-0 text-primary transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <CTASection
        title="Tell us about the task and we will tell you who can do it"
        description="Submit a brief with no obligation. You will see the matched expert's expertise before any payment is released."
        primaryLabel="Submit a task"
        primaryHref={registerUrl("client")}
        secondary={{ label: "Ask a question first", to: "/contact" }}
      />
    </>
  );
}
