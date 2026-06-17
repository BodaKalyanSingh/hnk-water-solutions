import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Droplet, Phone } from "lucide-react";
import { useUIStore } from "../../store/uiStore";
import { BUSINESS_INFO, ROUTES, WHATSAPP_MESSAGES } from "../../lib/constants";
import { getWhatsAppLink } from "../../lib/whatsapp";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";
import { cn } from "../../lib/cn";

export function Header() {
  const { mobileMenuOpen, toggleMobileMenu, setMobileMenuOpen } = useUIStore();
  const location = useLocation();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, setMobileMenuOpen]);

  React.useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: ROUTES.HOME },
    { name: "Services", path: ROUTES.SERVICES },
    { name: "About", path: ROUTES.ABOUT },
    { name: "FAQ", path: ROUTES.FAQ },
    { name: "Contact", path: ROUTES.CONTACT },
  ];

  const isActive = (path: string) => location.pathname === path;

  const whatsappLink = getWhatsAppLink(WHATSAPP_MESSAGES.default);
  const telLink = `tel:${BUSINESS_INFO.phoneRaw}`;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 transition-all duration-200",
        mobileMenuOpen ? "z-[60]" : "z-50",
        scrolled || mobileMenuOpen
          ? "bg-white shadow-sm border-b border-slate-200"
          : "bg-white/80 backdrop-blur-sm border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link
          to="/"
          className="flex items-center gap-2 min-w-0"
          aria-label="Hanamkonda Water Service — Home"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-primary text-white">
            <Droplet className="h-4 w-4" aria-hidden="true" />
          </div>
          <div className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-bold text-text-primary">
              Hanamkonda Water
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-wide text-brand-primary">
              Service
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm transition-colors hover:text-brand-primary",
                isActive(link.path)
                  ? "font-semibold text-brand-primary"
                  : "font-medium text-text-secondary"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <a
          href={telLink}
          className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:text-brand-accent"
          aria-label={`Call ${BUSINESS_INFO.phone}`}
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          {BUSINESS_INFO.phone}
        </a>

        <button
          type="button"
          onClick={toggleMobileMenu}
          className="md:hidden -mr-1 flex h-10 w-10 items-center justify-center rounded-lg text-text-primary hover:bg-slate-100"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" strokeWidth={2} />
          ) : (
            <Menu className="h-5 w-5" strokeWidth={2} />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-14 z-[60] flex">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Close menu"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative ml-auto flex h-full w-[min(100%,280px)] flex-col bg-white shadow-xl">
            <nav className="flex-1 overflow-y-auto py-1 min-h-0" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block border-b border-slate-100 px-5 py-3.5 text-[15px] transition-colors",
                    isActive(link.path)
                      ? "bg-brand-primary/5 font-semibold text-brand-primary"
                      : "font-medium text-text-primary hover:bg-slate-50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div
              className="shrink-0 border-t border-slate-200 bg-white p-3"
              style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom, 0px))" }}
            >
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-9 items-center justify-center gap-1 rounded-md border border-[#25D366] bg-[#25D366]/10 text-xs font-medium text-[#128C7E]"
                >
                  <WhatsAppIcon size={16} />
                  WhatsApp
                </a>
                <a
                  href={telLink}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-9 items-center justify-center gap-1 rounded-md border border-brand-primary bg-brand-primary/10 text-xs font-medium text-brand-primary"
                >
                  <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
