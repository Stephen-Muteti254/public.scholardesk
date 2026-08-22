import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo/logo-light.svg";
import { loginUrl, registerUrl } from "@/config/site";

const navigation = [
  { name: "Home", href: "/" },
  { name: "For Clients", href: "/for-clients" },
  { name: "For Writers", href: "/for-writers" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center" aria-label="Academic Hub home">
          <img src={logo} alt="Academic Hub" className="h-9 w-auto" width={158} height={40} />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navigation.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === item.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
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
            {navigation.map((item) => (
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
