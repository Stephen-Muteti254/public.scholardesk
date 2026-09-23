import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  MessageSquareX,
  MessagesSquare,
  ShieldAlert,
  ShieldCheck,
  ShuffleIcon,
  Target,
  WalletCards,
  WalletMinimal,
} from "lucide-react";

type Row = {
  topic: string;
  before: string;
  after: string;
  beforeIcon: typeof AlertTriangle;
  afterIcon: typeof CheckCircle2;
};

const studentRows: Row[] = [
  {
    topic: "Finding help",
    before:
      "You post in a group chat or marketplace and hope whoever replies first can actually handle your subject.",
    after:
      "Your task is routed to an expert who is vetted in that exact discipline, with a track record you can see.",
    beforeIcon: ShuffleIcon,
    afterIcon: Target,
  },
  {
    topic: "Trust & payment",
    before:
      "Money is sent up front to a stranger. If the work never lands, there is nobody to escalate to.",
    after:
      "Funds are held until you review the work. You release payment only once you mark the order complete.",
    beforeIcon: WalletCards,
    afterIcon: WalletMinimal,
  },
  {
    topic: "Communication",
    before:
      "Instructions get lost across WhatsApp, email and screenshots. Nobody knows the latest version.",
    after:
      "One order thread holds every instruction, file, revision and message, timestamped and searchable.",
    beforeIcon: MessageSquareX,
    afterIcon: MessagesSquare,
  },
  {
    topic: "Deadlines",
    before:
      "You chase for updates and discover a problem hours before submission, too late to fix it.",
    after:
      "Milestone tracking and draft checkpoints surface risk early, while there is still time to act.",
    beforeIcon: Clock3,
    afterIcon: Clock3,
  },
  {
    topic: "Quality control",
    before:
      "Whatever arrives is what you get. Asking for a fix depends on goodwill, not on any process.",
    after:
      "Unlimited structured revisions until you are satisfied, with quality checks before delivery.",
    beforeIcon: ShieldAlert,
    afterIcon: ShieldCheck,
  },
];

const professionalRows: Row[] = [
  {
    topic: "Finding help",
    before:
      "You post in a group chat or freelance marketplace and hope the first available person understands your field and deliverable.",
    after:
      "Your brief is routed to an expert vetted in the relevant discipline, with a delivery record you can review.",
    beforeIcon: ShuffleIcon,
    afterIcon: Target,
  },
  {
    topic: "Trust & payment",
    before:
      "Money is sent up front to a stranger. If the work never arrives or misses the brief, there is nobody to escalate to.",
    after:
      "Funds are held until you review the work. You release payment only once you mark the order complete.",
    beforeIcon: WalletCards,
    afterIcon: WalletMinimal,
  },
  {
    topic: "Communication",
    before:
      "Source files, decisions and feedback are scattered across email, messaging apps and document versions.",
    after:
      "One order thread holds every requirement, file, revision and message, timestamped and searchable.",
    beforeIcon: MessageSquareX,
    afterIcon: MessagesSquare,
  },
  {
    topic: "Deadlines",
    before:
      "You chase for updates and discover a problem just before a meeting, application or delivery deadline.",
    after:
      "Milestone tracking and draft checkpoints surface risk early, while there is still time to act.",
    beforeIcon: Clock3,
    afterIcon: Clock3,
  },
  {
    topic: "Quality control",
    before:
      "Whatever arrives is what you get. Asking for a correction depends on goodwill rather than an agreed process.",
    after:
      "Unlimited structured revisions within scope, with quality checks before delivery and escalation when needed.",
    beforeIcon: ShieldAlert,
    afterIcon: ShieldCheck,
  },
];

const expertRows: Row[] = [
  {
    topic: "Finding work",
    before:
      "Endless scrolling through mismatched listings and unpaid sample tests just to get noticed.",
    after:
      "Relevant tasks are matched to your verified expertise, so you spend time solving, not searching.",
    beforeIcon: ShuffleIcon,
    afterIcon: Target,
  },
  {
    topic: "Getting paid",
    before:
      "Customers disappear after delivery, or payments arrive weeks late with unexplained deductions.",
    after:
      "Payment is secured before you start and released on a predictable schedule after approval.",
    beforeIcon: WalletCards,
    afterIcon: WalletMinimal,
  },
  {
    topic: "Scope creep",
    before:
      "Vague briefs turn into rewritten requirements halfway through, with no record of what was agreed.",
    after:
      "Requirements are captured up front; anything beyond the agreed scope is raised as a new request.",
    beforeIcon: MessageSquareX,
    afterIcon: MessagesSquare,
  },
  {
    topic: "Reputation",
    before:
      "Years of good work vanish when a platform closes or a customer stops answering. You start over.",
    after:
      "A portable performance record (ratings, on-time rate, specialisms) that raises the work you are offered.",
    beforeIcon: AlertTriangle,
    afterIcon: CheckCircle2,
  },
  {
    topic: "Disputes",
    before:
      "It is your word against theirs, with no mediator and no evidence trail to fall back on.",
    after:
      "Every message and file is logged, and our support team mediates against the agreed brief.",
    beforeIcon: ShieldAlert,
    afterIcon: ShieldCheck,
  },
];

function Column({
  variant,
  rows,
}: {
  variant: "before" | "after";
  rows: Row[];
}) {
  const isBefore = variant === "before";
  return (
    <div
      className={`rounded-2xl border p-6 lg:p-8 ${
        isBefore
          ? "border-border bg-surface-strong"
          : "border-primary/25 bg-background shadow-elegant"
      }`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-full ${
            isBefore ? "bg-destructive/10 text-destructive" : "bg-success/10 text-success"
          }`}
        >
          {isBefore ? <AlertTriangle className="h-5 w-5" /> : <CheckCircle2 className="h-5 w-5" />}
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {isBefore ? "Before ScholarDesk" : "With ScholarDesk"}
          </p>
          <p className="text-lg font-semibold">
            {isBefore ? "Informal, risky, unaccountable" : "Structured, verified, accountable"}
          </p>
        </div>
      </div>

      <ul className="mt-6 space-y-5">
        {rows.map((row) => {
          const Icon = isBefore ? row.beforeIcon : row.afterIcon;
          return (
            <li key={row.topic} className="flex gap-4">
              <span
                className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                  isBefore
                    ? "bg-background text-muted-foreground"
                    : "bg-primary/10 text-primary"
                }`}
              >
                <Icon className="h-4.5 w-4.5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">{row.topic}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {isBefore ? row.before : row.after}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function BeforeAfter({ audience }: { audience: "clients" | "students" | "professionals" | "writers" }) {
  const rows = audience === "students" || audience === "clients"
    ? studentRows
    : audience === "professionals"
      ? professionalRows
      : expertRows;

  return (
    <div className="relative grid items-start gap-6 lg:grid-cols-[1fr_auto_1fr]">
      <Column variant="before" rows={rows} />
      <div className="flex items-center justify-center lg:h-full">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-primary shadow-soft">
          <ArrowRight className="h-5 w-5 lg:rotate-0 rotate-90" />
        </span>
      </div>
      <Column variant="after" rows={rows} />
    </div>
  );
}
