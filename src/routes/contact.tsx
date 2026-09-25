import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Mail, MapPin, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Section } from "@/components/site/Primitives";
import { SITE } from "@/config/site";
import { EditorialImage } from "@/components/site/EditorialImage";

const title = "Contact ScholarDesk | Talk to Our Support Team";
const description =
  "Questions about an order, matching, pricing or becoming an expert? Contact the ScholarDesk team by email or through the form. Support is available 24/7.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { property: "og:image", content: SITE.ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: SITE.ogImage },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: title,
          description,
          url: "/contact",
        }),
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Message sent", {
        description: "Our team typically replies within a few hours.",
      });
    }, 700);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface">
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-top gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(380px,.82fr)]">
            <div className="max-w-2xl space-y-5">
              <h1 className="text-4xl font-bold leading-[1.1] lg:text-5xl">
                Talk to a person before you commit
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Whether you are weighing up your first order or applying as an expert, our team
                will answer straight, including when we are not the right fit.
              </p>
            </div>
            <EditorialImage
              src="/images/contact-support.jpg"
              alt="A support specialist wearing a headset at her desk, working through contact records on a screen"
              eyebrow="24/7 live support"
              caption="A person reads your brief, and a person replies — before and during every order."
              eager
              className="w-full max-w-[420px] justify-self-end"
              imageClassName="object-top"
            />
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-background p-7 shadow-soft">
              <h2 className="text-xl font-semibold">Send us a message</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Fill in the form and our team will get back to you within 24 hours.
              </p>
              <form onSubmit={onSubmit} className="mt-6 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your full name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" placeholder="How can we help?" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell us about your task, or the work you would like to do with us."
                    required
                  />
                </div>
                <Button type="submit" size="lg" disabled={sending}>
                  {sending ? "Sending…" : "Send message"}
                </Button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-surface p-7">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MessageSquare className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold">Live support</p>
                    <p className="text-sm text-muted-foreground">
                      Available 24/7 for active orders
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold">Office</p>
                    <p className="text-sm text-muted-foreground">
                      575 5th Ave Fl 14
                      <br />
                      New York City, New York
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-soft p-7">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <h2 className="font-semibold">Response times</h2>
              </div>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                <li>Active order issues: under 1 hour</li>
                <li>General enquiries: within 24 hours</li>
                <li>Expert applications: 2–3 business days</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
