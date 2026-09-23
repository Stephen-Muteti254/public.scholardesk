import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { registerUrl } from "@/config/site";

export function Section({
  children,
  className = "",
  tone = "default",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "surface" | "brand" | "soft";
  id?: string;
}) {
  const tones = {
    default: "bg-background",
    surface: "bg-surface",
    soft: "bg-soft",
    brand: "bg-brand text-primary-foreground",
  } as const;

  return (
    <section id={id} className={`${tones[tone]} py-20 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({
  title,
  description,
  align = "center",
}: {
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} space-y-4`}
    >
      <h2 className="text-3xl font-bold leading-tight lg:text-4xl">{title}</h2>
      {description ? (
        <p className="text-lg leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}

export function CTASection({
  title,
  description,
  primaryLabel = "Create an account",
  primaryHref,
  secondary,
}: {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondary?: { label: string; to: "/for-students" | "/for-professionals" | "/for-writers" | "/services" | "/contact" | "/how-it-works" };
}) {
  return (
    <section className="bg-brand py-20 text-primary-foreground lg:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold lg:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">{description}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button size="lg" variant="secondary" asChild>
            <a href={primaryHref ?? registerUrl()}>{primaryLabel}</a>
          </Button>
          {secondary ? (
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link to={secondary.to}>{secondary.label}</Link>
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
