import {
  ClipboardList,
  UserCheck,
  PenLine,
  Upload,
  SearchCheck,
  ThumbsUp,
  BadgeCheck,
  RotateCcw,
} from "lucide-react";

export function ProcessFlow({
  audience = "customers",
}: {
  audience?: "customers" | "students" | "professionals";
}) {
  const person =
    audience === "students" ? "Student" : audience === "professionals" ? "Professional" : "Customer";
  const reviewTarget =
    audience === "students"
      ? "rubric and instructions"
      : audience === "professionals"
        ? "brief and intended outcome"
        : "rubric";
  const steps = [
    {
      n: "01",
      title: `${person} submits the task`,
      icon: ClipboardList,
      actor: person,
       body: audience === "professionals"
         ? "Purpose, audience, source material, format and deadline are captured in one structured form."
         : "Brief, rubric, deadline, word count and reference style are captured in one structured form.",
    },
    {
      n: "02",
      title: "We assign a competent expert",
      icon: UserCheck,
      actor: "ScholarDesk",
      body: "Matched by verified subject expertise, experience level, past ratings and on-time record, never by who bids first.",
    },
    {
      n: "03",
      title: "Expert handles the task",
      icon: PenLine,
      actor: "Expert",
      body: `Research and drafting happen in the order workspace, with questions and progress visible to the ${person.toLowerCase()}.`,
    },
    {
      n: "04",
      title: "Expert submits the work",
      icon: Upload,
      actor: "Expert",
      body: "Final files, sources and an originality report are delivered against the agreed brief.",
    },
    {
      n: "05",
      title: `${person} reviews the work`,
      icon: SearchCheck,
      actor: person,
      body: `You check the delivery against your ${reviewTarget} inside the platform, before any payment is released.`,
    },
  ];
  return (
    <div className="space-y-8">
      {/* Linear steps */}
      <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {steps.map((step) => (
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
          </li>
        ))}
      </ol>

      {/* Decision fork */}
      <div className="rounded-2xl border border-border bg-surface p-6 lg:p-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Step 06: Decision point
          </p>
          <h3 className="mt-1 text-xl font-semibold">Is the {person.toLowerCase()} satisfied?</h3>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
            The order cannot close on its own. Nothing is finalised, and no payment is released,
             until {audience === "customers" ? "the customer makes" : "you make"} this call.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Yes path */}
          <div className="rounded-xl border border-success/30 bg-background p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-success/10 text-success">
                <ThumbsUp className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-success">
                  Yes, satisfied
                </p>
                <p className="text-base font-semibold">Order marked complete</p>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              <FlowLine
                icon={BadgeCheck}
                text={`${person} marks the order as completed in the workspace.`}
              />
              <FlowLine
                icon={BadgeCheck}
                text="Payment is released to the expert and the record is archived."
              />
              <FlowLine
                icon={BadgeCheck}
                text="Both sides rate the collaboration, feeding future matching."
              />
            </div>
          </div>

          {/* No path: loop */}
          <div className="rounded-xl border border-warning/40 bg-background p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-warning/15 text-warning-foreground">
                <RotateCcw className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Not yet
                </p>
                <p className="text-base font-semibold">Revision requested</p>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              <FlowLine
                icon={RotateCcw}
                text={`${person} logs precisely what needs to change, against the original brief.`}
              />
              <FlowLine
                icon={RotateCcw}
                text="The task returns to step 03; the same expert reworks and resubmits."
              />
              <FlowLine
                icon={RotateCcw}
                text={`The loop repeats until the ${person.toLowerCase()} is satisfied. Free of charge, within scope.`}
              />
            </div>
            <p className="mt-5 rounded-lg bg-surface-strong px-4 py-3 text-xs leading-relaxed text-muted-foreground">
              Loop back to <span className="font-semibold text-foreground">Step 03: Expert
              handles task</span>. Persistent mismatches are escalated to our quality team, who can
              reassign the task to another expert at no extra cost.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlowLine({
  icon: Icon,
  text,
}: {
  icon: typeof BadgeCheck;
  text: string;
}) {
  return (
    <div className="flex gap-3">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
      <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}
