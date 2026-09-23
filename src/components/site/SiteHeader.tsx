import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/Logo";
import { PORTALS, loginUrl, registerUrl } from "@/config/site";

const customers = [
  {
    name: "For Students",
    href: "/for-students",
    description: "Academic support, materials, assessments",
  },
  {
    name: "For Professionals",
    href: "/for-professionals",
    description: "Documents, research, interviews, assessments",
  },
] as const;

const navigation = [
  { name: "Home", href: "/" },
  { name: "For Experts", href: "/for-writers" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
] as const;

const linkClass = (active: boolean) =>
  `text-sm font-medium transition-colors hover:text-primary ${
    active ? "text-primary" : "text-muted-foreground"
  }`;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [customersOpen, setCustomersOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const customersActive = customers.some((c) => c.href === pathname);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center" aria-label="ScholarDesk home">
          <Logo className="h-7 sm:h-8" />
        </Link>

        <nav className="hidden items-center gap-5 xl:gap-7 lg:flex" aria-label="Main">
          <Link to="/" className={linkClass(pathname === "/")}>
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setCustomersOpen(true)}
            onMouseLeave={() => setCustomersOpen(false)}
          >
            <button
              type="button"
              onClick={() => setCustomersOpen((v) => !v)}
              aria-expanded={customersOpen}
              aria-haspopup="true"
              className={`inline-flex items-center gap-1 ${linkClass(customersActive)}`}
            >
              Customers
              <ChevronDown
                className={`h-4 w-4 transition-transform ${customersOpen ? "rotate-180" : ""}`}
              />
            </button>
            {customersOpen && (
              <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-2">
                <div className="overflow-hidden rounded-xl border border-border bg-popover shadow-lg">
                  {customers.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setCustomersOpen(false)}
                      className={`block px-4 py-3 transition-colors hover:bg-accent ${
                        pathname === item.href ? "bg-accent" : ""
                      }`}
                    >
                      <span className="block text-sm font-semibold text-foreground">
                        {item.name}
                      </span>
                      <span className="block text-xs text-muted-foreground">
                        {item.description}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navigation.slice(1).map((item) => (
            <Link key={item.href} to={item.href} className={linkClass(pathname === item.href)}>
              {item.name}
            </Link>
          ))}
          <a
            href={PORTALS.ASSESSDESK}
            className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3 py-1.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
          >
            AssessDesk
            <span className="rounded-full bg-primary px-1.5 py-0.5 text-[10px] font-bold uppercase text-primary-foreground">New</span>
          </a>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" asChild>
            <a href={loginUrl()}>Log in</a>
          </Button>
          <Button asChild>
            <a href={registerUrl()}>Get started</a>
          </Button>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="space-y-1 px-4 pb-4 pt-3">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                pathname === "/" ? "bg-accent text-primary" : "text-muted-foreground hover:bg-accent"
              }`}
            >
              Home
            </Link>

            <div>
              <button
                type="button"
                onClick={() => setCustomersOpen((v) => !v)}
                aria-expanded={customersOpen}
                className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium ${
                  customersActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Customers
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${customersOpen ? "rotate-180" : ""}`}
                />
              </button>
              {customersOpen && (
                <div className="ml-3 space-y-1 border-l border-border pl-3">
                  {customers.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-md px-3 py-2 ${
                        pathname === item.href
                          ? "bg-accent text-primary"
                          : "text-muted-foreground hover:bg-accent"
                      }`}
                    >
                      <span className="block text-base font-medium">{item.name}</span>
                      <span className="block text-xs text-muted-foreground">
                        {item.description}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navigation.slice(1).map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  pathname === item.href
                    ? "bg-accent text-primary"
                    : "text-muted-foreground hover:bg-accent"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href={PORTALS.ASSESSDESK}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-md border border-primary/20 bg-primary/5 px-3 py-2 text-base font-semibold text-primary hover:bg-primary/10"
            >
              AssessDesk
              <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold uppercase text-primary-foreground">New</span>
            </a>
            <div className="grid gap-2 pt-3">
              <Button variant="outline" asChild>
                <a href={loginUrl()}>Log in</a>
              </Button>
              <Button asChild>
                <a href={registerUrl()}>Get started</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
