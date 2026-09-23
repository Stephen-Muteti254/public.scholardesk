import {
  BadgeCheck,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  FileSearch,
  Mail,
  ShieldCheck,
  UserCircle2,
  UserPlus,
  XCircle,
  Wallet,
  ArrowRight,
} from "lucide-react";

type Step = {
  n: string;
  title: string;
  actor: string;
  icon: typeof BadgeCheck;
  body: string;
  detail?: string[];
};

const expertSteps: Step[] = [
  {
    n: "01",
    title: "Apply through the platform",
    actor: "Expert",
    icon: UserPlus,
    body: "One structured application: identity, academic background, disciplines, citation styles and work samples.",
    detail: ["Takes 10–15 minutes", "No fee to apply"],
  },
  {
    n: "02",
    title: "Experience and skills review",
    actor: "ScholarDesk",
    icon: FileSearch,
    body: "We verify credentials, assess your samples and confirm your claimed subject depth against our required standard.",
    detail: ["Credential check", "Sample assessment", "Typically 2–5 business days"],
  },
  {
    n: "03",
    title: "Application approved",
    actor: "ScholarDesk",
    icon: BadgeCheck,
    body: "If your experience and skills meet the required standard, you receive an approval notice with your next step.",
    detail: ["Emailed decision", "Reasoned feedback either way"],
  },
  {
    n: "04",
    title: "Activation deposit paid",
    actor: "Expert",
    icon: CreditCard,
    body: "A one-off refundable activation deposit secures your account. It underwrites your commitment to deadlines and is returned per our expert terms.",
    detail: ["Paid securely in-platform", "Refundable under expert terms"],
  },
  {
    n: "05",
    title: "Account activated",
    actor: "ScholarDesk",
    icon: ShieldCheck,
    body: "Your expert workspace is switched on: assignment matching, order threads, payouts and support access.",
    detail: ["Instant on confirmation"],
  },
  {
    n: "06",
    title: "Profile completion",
    actor: "Expert",
    icon: UserCircle2,
    body: "Set disciplines, academic levels, citation styles, turnaround windows and payout details. Matching starts as soon as this is complete.",
    detail: ["Controls the work you are offered"],
  },
];

export function ExpertOnboardingFlow() {
  return (
    <div className="space-y-8">
      <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {expertSteps.map((step) => (
          <li
            key={step.n}
            className="relative flex h-full flex-col rounded-2xl border border-border bg-background p-6 shadow-soft"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <step.icon className="h-5 w-5" />
              </span>
              <span className="text-2xl font-bold text-primary/20">{step.n}</span>
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {step.actor}
            </p>
            <h3 className="mt-1 text-base font-semibold leading-snug">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            {step.detail ? (
              <ul className="mt-4 space-y-1.5">
                {step.detail.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-success" />
                    {d}
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>

      {/* Decision fork at review */}
      <div className="rounded-2xl border border-border bg-surface p-6 lg:p-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Decision point: after step 02
          </p>
          <h3 className="mt-1 text-xl font-semibold">
            Does the application meet the required experience and skills?
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
            Every application gets a documented decision. We never leave applicants waiting without
            an answer.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-success/30 bg-background p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-success/10 text-success">
                <BadgeCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-success">
                  Standard met
                </p>
                <p className="text-base font-semibold">Application approved</p>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              <Line icon={CheckCircle2} text="Approval notice sent with your activation link." />
              <Line
                icon={Wallet}
                text="Pay the one-off refundable activation deposit in-platform."
              />
              <Line
                icon={UserCircle2}
                text="Account is activated, you complete your profile, and matching begins."
              />
            </div>
          </div>

          <div className="rounded-xl border border-warning/40 bg-background p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-warning/15 text-warning-foreground">
                <XCircle className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Standard not met
                </p>
                <p className="text-base font-semibold">Application rejected</p>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              <Line icon={Mail} text="You receive a clear decision explaining what was missing." />
              <Line
                icon={ClipboardList}
                text="No activation deposit is requested, and nothing is charged."
              />
              <Line
                icon={ArrowRight}
                text="You may reapply once you can evidence the required experience or samples."
              />
            </div>
            <p className="mt-5 rounded-lg bg-surface-strong px-4 py-3 text-xs leading-relaxed text-muted-foreground">
              Rejections are about fit against a specific standard, not a permanent verdict.
              Strengthen the gap we flag and your next application is reviewed fresh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const studentSteps: Step[] = [
  {
    n: "01",
    title: "Create your account",
    actor: "Student",
    icon: UserPlus,
    body: "Register with your email in under two minutes. No subscription, no commitment, nothing charged to browse.",
    detail: ["Free to join", "Email verification"],
  },
  {
    n: "02",
    title: "Complete your profile",
    actor: "Student",
    icon: UserCircle2,
    body: "Add your institution type, academic level and preferred citation style once, so every future brief is prefilled correctly.",
    detail: ["Speeds up every later order"],
  },
  {
    n: "03",
    title: "Submit your first brief",
    actor: "Student",
    icon: ClipboardList,
    body: "Subject, level, word count, rubric, sources and deadline are captured in a structured form and priced before you commit.",
    detail: ["Transparent quote first"],
  },
  {
    n: "04",
    title: "Fund and track the order",
    actor: "Student",
    icon: Wallet,
    body: "Your payment is held securely while a subject-matched expert works, and released only when you mark the order complete.",
    detail: ["Held until you approve", "Progress visible throughout"],
  },
];

const professionalSteps: Step[] = [
  {
    n: "01",
    title: "Create your account",
    actor: "Professional",
    icon: UserPlus,
    body: "Register with your email in under two minutes. No subscription, no commitment and nothing charged to browse.",
    detail: ["Free to join", "Email verification"],
  },
  {
    n: "02",
    title: "Complete your profile",
    actor: "Professional",
    icon: UserCircle2,
    body: "Add your industry, role and preferred document details once, so future briefs begin with useful professional context.",
    detail: ["Speeds up every later order"],
  },
  {
    n: "03",
    title: "Submit your first brief",
    actor: "Professional",
    icon: ClipboardList,
    body: "Purpose, audience, deliverable, source material, format and deadline are captured in a structured form and priced before you commit.",
    detail: ["Transparent quote first"],
  },
  {
    n: "04",
    title: "Fund and track the order",
    actor: "Professional",
    icon: Wallet,
    body: "Your payment is held securely while a matched expert works, and released only when you mark the order complete.",
    detail: ["Held until you approve", "Progress visible throughout"],
  },
];

export function CustomerOnboardingFlow({ audience = "students" }: { audience?: "students" | "professionals" }) {
  const customerSteps = audience === "students" ? studentSteps : professionalSteps;
  return (
    <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {customerSteps.map((step) => (
        <li
          key={step.n}
          className="flex h-full flex-col rounded-2xl border border-border bg-background p-6 shadow-soft"
        >
          <div className="flex items-center justify-between">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <step.icon className="h-5 w-5" />
            </span>
            <span className="text-2xl font-bold text-primary/20">{step.n}</span>
          </div>
          <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {step.actor}
          </p>
          <h3 className="mt-1 text-base font-semibold leading-snug">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
          {step.detail ? (
            <ul className="mt-4 space-y-1.5">
              {step.detail.map((d) => (
                <li key={d} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-success" />
                  {d}
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

function Line({ icon: Icon, text }: { icon: typeof BadgeCheck; text: string }) {
  return (
    <div className="flex gap-3">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
      <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}
