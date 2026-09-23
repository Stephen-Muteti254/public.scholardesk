import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpenCheck,
  BrainCircuit,
  ClipboardList,
  FileCheck2,
  FlaskConical,
  GraduationCap,
  Languages,
  Layers,
  Lock,
  MessagesSquare,
  RefreshCcw,
  ShieldCheck,
  Sigma,
  Timer,
  Wallet,
} from "lucide-react";
import { AudiencePage } from "@/components/site/AudiencePage";
import { SITE } from "@/config/site";

const title = "For Students | Assignment, Study & Exam Support | ScholarDesk";
const description = "Expert support for high school, college, university and TVET students: assignments, essays, classes, research, revision materials, past papers and exam practice.";

const faqs = [
  { q: "Which students can use ScholarDesk?", a: "ScholarDesk supports high school and secondary learners, college and university students, TVET and vocational learners, and undergraduate or postgraduate programmes across a broad range of subjects." },
  { q: "Can I get support in mathematics, technology or science?", a: "Yes. Matching is based on the exact subject and level in your brief, including mathematics, computer science, engineering, biology, health sciences, business and humanities." },
  { q: "Do you provide revision materials and past-paper guidance?", a: "Yes. You can request syllabus-mapped study guides, practice questions, worked solutions, mock sets, revision sheets and guidance using past papers such as biology past papers." },
  { q: "Can an expert help me take an exam or interview?", a: "Yes. Submit your subject, format and schedule to book an expert who will take or support you through the live exam, interview or proctored assessment — either working alongside you or handling it for you." },
  { q: "What is AssessDesk?", a: "AssessDesk by ScholarDesk is a standalone tool for live exams, tests and interviews: one hotkey captures the question from your screen, AI answers it, and the answer appears on an overlay invisible to proctoring software, screen recording and screen sharing." },
  { q: "Are originality reports available?", a: "Yes. ScholarDesk offers similarity and AI-detection reports, source-by-source review, citation guidance and expert editing support for flagged passages." },
];

export const Route = createFileRoute("/for-students")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/for-students" },
      { property: "og:image", content: SITE.ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: SITE.ogImage },
    ],
    links: [{ rel: "canonical", href: "/for-students" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE.domain }, { "@type": "ListItem", position: 2, name: "For Students", item: `${SITE.domain}/for-students` }] }) },
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }) },
    ],
  }),
  component: ForStudents,
});

function ForStudents() {
  return <AudiencePage
    audience="students"
    eyebrow="For Students"
    headline={<>Support for every stage of <span className="text-primary">your education</span>.</>}
    introduction="From high school and TVET to university and postgraduate study, ScholarDesk connects you with a vetted subject expert for assignments, classes, research, revision and assessment preparation."
    primaryLabel="Submit your student task"
    heroImage="/images/students-collaborating.jpg"
    heroImageAlt="University students collaborating around laptops in a lecture room"
    heroImagePosition="object-center"
    controlTitle="Support built around your brief"
    controls={[
      { label: "Your level", value: "High school, college, TVET or university" },
      { label: "Your subject", value: "Matched to a verified specialist" },
      { label: "Your deadline", value: "Visible checkpoints from start to finish" },
      { label: "Your approval", value: "Payment releases only when you complete the order" },
    ]}
    controlNote="Your feedback improves the experts you are matched with next."
    servicesTitle="Student support shaped around how you learn"
    servicesDescription="Choose one focused task or coordinate ongoing support across a class, research project, revision period or application."
    services={[
      { icon: GraduationCap, title: "Assignments & essays", body: "Coursework, essays, case studies, reports and problem sets developed against your instructions, level and marking rubric." },
      { icon: BookOpenCheck, title: "Classes & ongoing study", body: "Consistent subject support for weekly learning activities, discussion posts, group work and difficult concepts across a unit or semester." },
      { icon: FlaskConical, title: "Research & dissertations", body: "Research questions, literature reviews, methodology, evidence synthesis, data analysis, citation and chapter-by-chapter guidance." },
      { icon: Sigma, title: "Maths, technology & science", body: "Worked reasoning and guided practice across mathematics, statistics, computing, engineering, biology and health sciences." },
      { icon: Languages, title: "Writing & originality", body: "Editing, proofreading, referencing, similarity reports, AI-detection reports and clear guidance for passages that need attention." },
      { icon: BrainCircuit, title: "Revision & exam materials", body: "Study guides, practice questions, mock sets, worked solutions, flashcards and past-paper guidance aligned to your syllabus." },
    ]}
    benefitsTitle="Six guarantees you can actually check"
    benefitsDescription="Each of these is enforced by the platform, not promised in marketing copy."
    benefits={[
      { icon: GraduationCap, title: "Assigned by expertise, not availability", body: "We read the brief before anyone else does. The task goes to an expert verified in that discipline and academic level, with a delivery history to match, so you are never someone's first attempt at your subject." },
      { icon: Lock, title: "Your money stays protected", body: "You fund the order, but the expert is not paid until you review the delivery and mark it complete. If the work never meets the brief, you are not left arguing for a refund from a stranger." },
      { icon: RefreshCcw, title: "Revisions until you are satisfied", body: "In-scope revisions are unlimited and free. You log exactly what needs to change, the same expert reworks it, and the loop repeats until the delivery matches what you asked for." },
      { icon: MessagesSquare, title: "One thread, one source of truth", body: "Brief, rubric, attachments, questions, drafts and revision notes stay in a single order workspace. Nothing depends on remembering what was said in a chat three weeks ago." },
      { icon: Timer, title: "Deadline visibility, not deadline surprises", body: "Longer tasks are broken into checkpoints so you can see progress while there is still time to intervene, instead of discovering a problem the night before submission." },
      { icon: FileCheck2, title: "Checked before it reaches you", body: "Every delivery arrives with sources and an originality report, after an internal quality pass against your instructions and citation style." },
    ]}
    onboardingTitle="Setting up as a student takes minutes"
    onboardingDescription="No subscription and no charge until you approve a quote. Registration, profile and first brief are one continuous flow."
    assessmentTitle="Choose how you take your exam, test or interview"
    assessmentDescription="Use AssessDesk yourself for undetectable AI assistance, or book a ScholarDesk expert to handle the assessment with you."
    expertCtaLabel="Book an expert"
    assessDeskDescription="Install AssessDesk, press the snip hotkey during your proctored exam, and get AI answers on an invisible overlay. It reads questions straight from your screen, works under screen monitoring and recording, and leaves no visible trace in proctor captures. Use AssessDesk New"
    stepsTitle="Four steps from student brief to completed support"
    steps={[
      { icon: ClipboardList, title: "Share your requirements", body: "Add the subject, level, instructions, files and deadline in one structured brief." },
      { icon: Layers, title: "Review your expert match", body: "See the specialist's relevant expertise and record before the work begins." },
      { icon: Wallet, title: "Fund the order", body: "Confirm the agreed amount while retaining control over when it is released." },
      { icon: ShieldCheck, title: "Review and complete", body: "Check the delivery, request in-scope revisions, then complete the order when satisfied." },
    ]}
    processTitle="Exactly how your student task is handled"
    processDescription="Including what happens when you are not satisfied: the revision loop is part of the standard process, not an exception to it."
    faqTitle="Questions students ask before starting"
    faqs={faqs}
    closingTitle="Bring us the subject, level and deadline"
    closingDescription="Create your student account, submit the brief and review the expert match before work begins."
    otherAudience={{ label: "Support for professionals", to: "/for-professionals" }}
  />;
}