import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { ArrowRight, CheckCircle2, ScanSearch, Star } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CTASection, Section, SectionHeading } from "@/components/site/Primitives";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { CustomerOnboardingFlow } from "@/components/site/OnboardingFlow";
import { ProcessFlow } from "@/components/site/ProcessFlow";
import { PORTALS, registerUrl } from "@/config/site";

export type AudienceItem = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export type AudienceFaq = { q: string; a: string };

type AudiencePageProps = {
  audience: "students" | "professionals";
  eyebrow: string;
  headline: ReactNode;
  introduction: string;
  primaryLabel: string;
  heroImage: string;
  heroImageAlt: string;
  heroImagePosition?: string;
  controlTitle: string;
  controls: Array<{ label: string; value: string }>;
  controlNote: string;
  servicesTitle: string;
  servicesDescription: string;
  services: AudienceItem[];
  benefitsTitle: string;
  benefitsDescription: string;
  benefits: AudienceItem[];
  onboardingTitle: string;
  onboardingDescription: string;
  processTitle: string;
  processDescription: string;
  stepsTitle: string;
  steps: AudienceItem[];
  assessmentTitle: string;
  assessmentDescription: string;
  expertCtaLabel: string;
  assessDeskDescription: string;
  faqTitle: string;
  faqs: AudienceFaq[];
  closingTitle: string;
  closingDescription: string;
  otherAudience: { label: string; to: "/for-students" | "/for-professionals" };
};

export function AudiencePage({
  audience,
  eyebrow,
  headline,
  introduction,
  primaryLabel,
  heroImage,
  heroImageAlt,
  heroImagePosition = "object-center",
  controlTitle,
  controls,
  controlNote,
  servicesTitle,
  servicesDescription,
  services,
  benefitsTitle,
  benefitsDescription,
  benefits,
  onboardingTitle,
  onboardingDescription,
  processTitle,
  processDescription,
  stepsTitle,
  steps,
  assessmentTitle,
  assessmentDescription,
  expertCtaLabel,
  assessDeskDescription,
  faqTitle,
  faqs,
  closingTitle,
  closingDescription,
  otherAudience,
}: AudiencePageProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-surface">
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-top gap-14 lg:grid-cols-2">
            <div className="space-y-7">
              {/*<p className="text-sm font-semibold uppercase text-primary">{eyebrow}</p>*/}
              <h1 className="text-4xl font-bold leading-[1.1] lg:text-5xl">{headline}</h1>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                {introduction}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <a href={registerUrl("client")}>
                    {primaryLabel} <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/services">Explore all services</Link>
                </Button>
              </div>
            </div>

            <figure className="overflow-hidden rounded-2xl border border-border bg-background shadow-elegant">
              <div className="aspect-[16/8] overflow-hidden">
                <img
                  src={heroImage}
                  alt={heroImageAlt}
                  width={738}
                  height={369}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className={`h-full w-full object-cover ${heroImagePosition}`}
                />
              </div>
              <figcaption className="p-6">
                <p className="text-xs font-semibold uppercase text-muted-foreground">{controlTitle}</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {controls.map((row) => (
                    <div key={row.label} className="border-t border-border pt-3">
                      <p className="text-xs font-semibold text-foreground">{row.label}</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{row.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-2 rounded-xl bg-surface p-4 text-sm">
                  <Star className="h-4 w-4 shrink-0 text-primary" />
                  {controlNote}
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <Section tone="surface">
        <SectionHeading title={servicesTitle} description={servicesDescription} />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-background p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <item.icon className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="What changes the moment you stop working informally"
          description="These are the five failure points customers described before ScholarDesk existed, and what the platform does about each of them."
        />
        <div className="mt-14">
          <BeforeAfter audience={audience} />
        </div>
      </Section>

      <Section>
        <SectionHeading title={benefitsTitle} description={benefitsDescription} />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-background p-7 transition-shadow hover:shadow-elegant">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <item.icon className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading title={onboardingTitle} description={onboardingDescription} />
        <div className="mt-14">
          <CustomerOnboardingFlow audience={audience} />
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading title={assessmentTitle} description={assessmentDescription} />
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-background p-7 shadow-soft">
            <p className="text-xs font-semibold uppercase text-primary">Work with a specialist</p>
            <h2 className="mt-3 text-xl font-semibold">Book a ScholarDesk expert</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Submit the assessment, interview, syllabus, role, or certification details. We will match you with an expert to take or support you through the exam, interview or live assessment.
            </p>
            <Button className="mt-6" asChild>
              <a href={registerUrl("client")}>{expertCtaLabel}</a>
            </Button>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-background p-7 shadow-elegant">
            <span className="absolute right-5 top-5 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">New</span>
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <ScanSearch className="h-6 w-6" />
            </span>
            <p className="mt-5 text-xs font-semibold uppercase text-primary">AssessDesk by ScholarDesk</p>
            <h2 className="mt-2 text-xl font-semibold">Use AssessDesk yourself Run it with AI, invisibly</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{assessDeskDescription}</p>
            <Button className="mt-6" variant="outline" asChild>
              <a href={PORTALS.ASSESSDESK}>Use AssessDesk</a>
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading title={stepsTitle} />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-2xl border border-border bg-background p-6">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <step.icon className="h-5 w-5" />
                </span>
                <span className="text-2xl font-bold text-primary/20">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h2 className="mt-4 text-base font-semibold">{step.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading title={processTitle} description={processDescription} />
        <div className="mt-14">
          <ProcessFlow audience={audience} />
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading title={faqTitle} />
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.q} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-semibold">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="h-4 w-4 text-success" />
            Need clarification? <Link to="/contact" className="font-medium text-primary hover:underline">Talk to our team</Link>.
          </p>
        </div>
      </Section>

      <CTASection
        title={closingTitle}
        description={closingDescription}
        primaryLabel={primaryLabel}
        primaryHref={registerUrl("client")}
        secondary={otherAudience}
      />
    </>
  );
}