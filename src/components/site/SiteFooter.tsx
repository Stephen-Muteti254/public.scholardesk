import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo/logo-light.svg";
import { SITE, loginUrl, registerUrl } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <img src={logo} alt="Academic Hub" className="h-8 w-auto" width={140} height={35} />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              A managed academic support platform that matches every task with a vetted,
              subject-matched writer and keeps clients in control until the work is right.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Platform</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/for-clients" className="text-muted-foreground hover:text-primary">
                  For Clients
                </Link>
              </li>
              <li>
                <Link to="/for-writers" className="text-muted-foreground hover:text-primary">
                  For Writers
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-muted-foreground hover:text-primary">
                  How it works
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <a href={loginUrl()} className="text-muted-foreground hover:text-primary">
                  Log in
                </a>
              </li>
              <li>
                <a href={registerUrl()} className="text-muted-foreground hover:text-primary">
                  Create an account
                </a>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={`mailto:${SITE.email}`} className="hover:text-primary">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Support available 24/7</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{SITE.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
