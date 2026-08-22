import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  BookMarked,
  FileSearch,
  GraduationCap,
  Languages,
  LayoutList,
  Microscope,
  NotebookPen,
  PencilRuler,
  Presentation,
  SpellCheck2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, Eyebrow, CTASection } from "@/components/site/Primitives";
import { SITE, registerUrl } from "@/config/site";

const title = "Services | Academic Writing, Research, Editing & Tutoring — Academic Hub";
const description =
  "Essays and coursework, research papers, dissertations, literature reviews, data analysis, editing and proofreading, formatting and tutoring — each delivered by a vetted, subject-matched writer.";

const services = [
  {
    icon: NotebookPen,
    name: "Essays & coursework",
    body: "Argument-led essays, reflective pieces, case studies and weekly coursework written to your rubric and citation style.",
    includes: ["Rubric-aligned structure", "Referenced argument", "Originality report"],
  },
  {
    icon: FileSearch,
    name: "Research papers",
    body: "Full research papers with defensible methodology, credible sourcing and a clear contribution to the question asked.",
    includes: ["Source appraisal", "Methodology write-up", "Structured findings"],
  },
  {
    icon: GraduationCap,
    name: "Dissertations & theses",
    body: "Chapter-by-chapter support across proposal, literature review, methodology, results and discussion, with checkpoints.",
    includes: ["Chapter milestones", "Supervisor-ready drafts", "Consistent formatting"],
  },
  {
    icon: BookMarked,
    name: "Literature reviews",
    body: "Systematic and narrative reviews that map the field, synthesise the evidence and expose the gap you are addressing.",
    includes: ["Search strategy", "Synthesis matrix", "Critical appraisal"],
  },
  {
    icon: BarChart3,
    name: "Data analysis & statistics",
    body: "Quantitative and qualitative analysis with interpretation you can defend, using SPSS, R, Stata, Excel or NVivo.",
    includes: ["Test selection rationale", "Annotated outputs", "Plain-language reading"],
  },
  {
    icon: SpellCheck2,
    name: "Editing & proofreading",
    body: "Line editing for clarity and academic register, plus proofreading for grammar, consistency and citation accuracy.",
    includes: ["Tracked changes", "Style consistency", "Reference check"],
  },
  {
    icon: PencilRuler,
    name: "Formatting & referencing",
    body: "APA, MLA, Harvard, Chicago, Vancouver and institution-specific templates applied accurately across the document.",
    includes: ["Template compliance", "Reference list rebuild", "Table & figure numbering"],
  },
  {
    icon: Presentation,
    name: "Presentations & posters",
    body: "Slide decks, conference posters and speaker notes that translate dense research into something you can present.",
    includes: ["Narrative flow", "Clean visual design", "Speaker notes"],
  },
  {
    icon: Microscope,
    name: "Technical & lab reports",
    body: "Engineering, science and computing reports with correct notation, reproducible method and accurate results reporting.",
    includes: ["Correct notation", "Reproducible method", "Results interpretation"],
  },
  {
    icon: LayoutList,
    name: "Admissions & professional documents",
    body: "Personal statements, research proposals, CVs and application essays that read as credible and specific.",
    includes: ["Positioning", "Evidence selection", "Institution fit"],
  },
  {
    icon: Languages,
    name: "Translation & language polish",
    body: "Academic translation and language editing for non-native speakers, preserving meaning and academic register.",
    includes: ["Terminology accuracy", "Register correction", "Native-level polish"],
  },
];

const disciplines = [
  "Business & Management",
  "Nursing & Healthcare",
  "Public Health",
  "Psychology",
  "Education",
  "Law",
  "Economics & Finance",
  "Engineering",
  "Computer Science",
  "Sociology",
  "Political Science",
  "Environmental Science",
  "Marketing",
  "Statistics",
  "History",
  "Literature",
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Academic Hub services",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name: s.name,
              description: s.body,
              provider: { "@type": "Organization", name: SITE.name, url: SITE.domain },
            },
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
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-lines opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl space-y-6">
            <Eyebrow>Services</Eyebrow>
            <h1 className="text-4xl font-bold leading-[1.1] lg:text-5xl">
              Specialist academic support,{" "}
              <span className="text-primary">matched to the exact task</span>
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Every service below is delivered under the same process: a vetted writer with proven
              expertise in that discipline, funds held until you approve, and revisions until the
              work meets the brief.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
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
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="What we cover"
          title="Eleven service lines, one standard of accountability"
          description="If your task does not fit neatly into one of these, send it to us anyway — matching is done by a person reading the brief."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.name}
              className="flex h-full flex-col rounded-2xl border border-border bg-background p-7 transition-shadow hover:shadow-elegant"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-lg font-semibold">{s.name}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <ul className="mt-5 space-y-2 border-t border-border pt-4">
                {s.includes.map((inc) => (
                  <li key={inc} className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {inc}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Disciplines"
          title="Subject coverage across the fields clients ask for most"
          description="Writers are verified per discipline and academic level. If your field is not listed, ask — our matching team will tell you honestly whether we can cover it."
        />
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {disciplines.map((d) => (
            <span
              key={d}
              className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground"
            >
              {d}
            </span>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Standards"
          title="What is included with every single order"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Subject-matched writer",
              body: "Assigned on verified expertise and track record, never on who claimed the task first.",
            },
            {
              title: "Originality report",
              body: "Work is written from scratch and checked before it reaches you.",
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

      <CTASection
        title="Tell us about the task and we will tell you who can do it"
        description="Submit a brief with no obligation. You will see the matched writer's expertise before any payment is released."
        primaryLabel="Submit a task"
        primaryHref={registerUrl("client")}
        secondary={{ label: "Ask a question first", to: "/contact" }}
      />
    </>
  );
}
