import { createFileRoute } from "@tanstack/react-router";
import {
  BarChart3,
  BriefcaseBusiness,
  ClipboardCheck,
  FileCheck2,
  FileText,
  FlaskConical,
  Layers,
  Lock,
  MessagesSquare,
  Presentation,
  RefreshCcw,
  ShieldCheck,
  Timer,
  UserRoundSearch,
  Wallet,
} from "lucide-react";
import { AudiencePage } from "@/components/site/AudiencePage";
import { SITE } from "@/config/site";

const title = "For Professionals | Documents, Research & Career Support | ScholarDesk";
const description = "Work with vetted experts on business, technical and research documents, data analysis, career materials, certification preparation and professional interviews.";

const faqs = [
  { q: "What kinds of professional documents can ScholarDesk support?", a: "You can request reports, proposals, presentations, briefs, policies, SOPs, executive summaries, white papers, research documents, technical documentation and career materials." },
  { q: "Can you match me with an expert from my industry?", a: "Matching considers the discipline, deliverable, level of complexity and relevant academic or industry experience. Share the context in your brief so the team can confirm the right fit." },
  { q: "Can I get help with data analysis or technical work?", a: "Yes. Available fields include mathematics, statistics, data science, computing, engineering, healthcare, science, economics and finance, subject to a suitable expert match." },
  { q: "Can I book interview or certification-exam support?", a: "Yes. Submit the role, certification, format and timing to have an expert take the interview or proctored exam with you, or run AssessDesk yourself for invisible AI assistance during the live session." },
  { q: "How can AssessDesk help professionals?", a: "AssessDesk provides live, undetectable AI assistance during proctored certification exams, technical screens and case interviews, reading questions from your screen and answering them on an overlay hidden from screen capture, recording and remote proctors." },
  { q: "Is my professional information confidential?", a: "Files and messages stay within the order workspace, and experts receive only the information required to complete the agreed brief." },
];

export const Route = createFileRoute("/for-professionals")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/for-professionals" },
      { property: "og:image", content: SITE.ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: SITE.ogImage },
    ],
    links: [{ rel: "canonical", href: "/for-professionals" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE.domain }, { "@type": "ListItem", position: 2, name: "For Professionals", item: `${SITE.domain}/for-professionals` }] }) },
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }) },
    ],
  }),
  component: ForProfessionals,
});

function ForProfessionals() {
  return <AudiencePage
    audience="professionals"
    eyebrow="For Professionals"
    headline={<>Specialist support for work that must be <span className="text-primary">clear, credible and complete</span>.</>}
    introduction="ScholarDesk matches working professionals, job seekers, founders and researchers with vetted experts for documents, analysis, career materials and high-stakes preparation."
    primaryLabel="Submit a professional task"
    heroImage="/images/client-at-work.jpg"
    heroImageAlt="A professional reviewing notes beside a laptop in a bright workspace"
    heroImagePosition="object-center"
    controlTitle="A managed professional workflow"
    controls={[
      { label: "Your industry", value: "Matched to relevant subject expertise" },
      { label: "Your deliverable", value: "Requirements and format recorded clearly" },
      { label: "Your timeline", value: "Progress and checkpoints remain visible" },
      { label: "Your approval", value: "You decide when the order is complete" },
    ]}
    controlNote="Confidential files, decisions and feedback stay in one order workspace."
    servicesTitle="Professional support, organised by the work you need to deliver"
    servicesDescription="Use ScholarDesk for a single specialist document, a research project, career preparation or an ongoing professional workload."
    services={[
      { icon: BriefcaseBusiness, title: "Business & workplace documents", body: "Reports, proposals, business plans, briefs, policies, SOPs and executive summaries shaped for the intended audience." },
      { icon: FlaskConical, title: "Research & evidence", body: "Market research, literature reviews, evidence synthesis, white papers and clearly sourced analytical documents." },
      { icon: BarChart3, title: "Data & quantitative analysis", body: "Statistical analysis, modelling, interpretation and reporting across Excel, SPSS, R, Stata and related workflows." },
      { icon: FileText, title: "Technical & specialist documents", body: "Technology documentation, engineering reports, mathematical analysis, healthcare writing and scientific communication." },
      { icon: UserRoundSearch, title: "Career documents", body: "CVs and résumés, cover letters, professional bios, portfolios and LinkedIn content tailored to a role or field." },
      { icon: Presentation, title: "Presentations & communication", body: "Slide decks, speaker notes, case presentations, proposals and concise stakeholder-facing communication." },
    ]}
    benefitsTitle="Six guarantees you can actually check"
    benefitsDescription="Each of these is enforced by the platform, not promised in marketing copy."
    benefits={[
      { icon: BriefcaseBusiness, title: "Assigned by expertise, not availability", body: "We read the brief before anyone else does. Your work goes to an expert verified in the relevant discipline and deliverable, with a delivery history to match, rather than whoever responds first." },
      { icon: Lock, title: "Your money stays protected", body: "You fund the order, but the expert is not paid until you review the delivery and mark it complete. If the work never meets the brief, you are not left arguing for a refund from a stranger." },
      { icon: RefreshCcw, title: "Revisions until you are satisfied", body: "In-scope revisions are unlimited and free. You log exactly what needs to change, the same expert reworks it, and the loop repeats until the delivery matches the agreed outcome." },
      { icon: MessagesSquare, title: "One thread, one source of truth", body: "Brief, source files, questions, drafts, decisions and revision notes stay in a single order workspace. Nothing depends on reconstructing an old email or chat thread." },
      { icon: Timer, title: "Deadline visibility, not deadline surprises", body: "Longer tasks are broken into checkpoints so you can see progress while there is still time to intervene, instead of discovering a problem just before delivery." },
      { icon: FileCheck2, title: "Checked before it reaches you", body: "Every delivery arrives with its sources and an originality report where relevant, after an internal quality pass against your instructions, format and intended audience." },
    ]}
    onboardingTitle="Setting up as a professional takes minutes"
    onboardingDescription="No subscription and no charge until you approve a quote. Registration, profile and first brief are one continuous flow."
    assessmentTitle="Take professional exams, tests and interviews your way"
    assessmentDescription="Use AssessDesk for invisible AI assistance during the live assessment, or book an expert to take it with you."
    expertCtaLabel="Book a professional expert"
    assessDeskDescription="Press one hotkey during your certification exam, technical screen or case interview, OCR reads the question from your screen and AI answers it on an overlay hidden from screen capture, recording and remote proctors. It cannot be flagged by lockdown browsers or screen-watch software. Use AssessDesk New"
    stepsTitle="Four steps from professional brief to approved delivery"
    steps={[
      { icon: ClipboardCheck, title: "Define the outcome", body: "Share the audience, purpose, source material, format and deadline in a structured brief." },
      { icon: Layers, title: "Review the specialist match", body: "Confirm the expert's relevant discipline, experience and delivery record." },
      { icon: Wallet, title: "Fund the agreed scope", body: "Secure the order while retaining control over final approval and payment release." },
      { icon: ShieldCheck, title: "Review and approve", body: "Check the work, request in-scope revisions and close the order only when it meets the brief." },
    ]}
    processTitle="Exactly how your professional task is handled"
    processDescription="Including what happens when you are not satisfied: the revision loop is part of the standard process, not an exception to it."
    faqTitle="Questions professionals ask before engaging an expert"
    faqs={faqs}
    closingTitle="Start with a clear professional brief"
    closingDescription="Tell us the field, deliverable, audience and deadline. We will identify the right expert before work begins."
    otherAudience={{ label: "Support for students", to: "/for-students" }}
  />;
}