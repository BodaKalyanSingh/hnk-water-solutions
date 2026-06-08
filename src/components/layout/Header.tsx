import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Droplet, Phone } from "lucide-react";
import { useUIStore } from "../../store/uiStore";
import { useLeadStore } from "../../store/leadStore";
import { Button } from "../ui/Button";
import { BUSINESS_INFO, ROUTES } from "../../lib/constants";
import { cn } from "../../lib/cn";

export function Header() {
  const { mobileMenuOpen, toggleMobileMenu, setMobileMenuOpen } = useUIStore();
  const { openLeadModal } = useLeadStore();
  const location = useLocation();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, setMobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: ROUTES.HOME },
    { name: "About Us", path: ROUTES.ABOUT },
    { name: "Products", path: ROUTES.PRODUCTS },
    { name: "Services", path: ROUTES.SERVICES },
    { name: "Contact", path: ROUTES.CONTACT },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md border-b border-brandBorder py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-brand-primary p-2 rounded-lg text-white group-hover:bg-brand-accent transition-colors duration-300">
              <Droplet className="h-5 w-5 md:h-6 md:w-6" />
            </div>
            <div>
              <span className="font-display text-base md:text-xl font-extrabold text-text-primary tracking-tight block leading-none">
                HNK Water
              </span>
              <span className="text-[9px] md:text-[10px] uppercase font-mono tracking-widest text-brand-primary font-bold">
                Purifier Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 hover:text-brand-primary",
                  isActive(link.path)
                    ? "text-brand-primary font-bold"
                    : "text-text-secondary"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center space-x-1.5 text-sm font-semibold text-brand-primary hover:text-brand-accent transition-colors duration-200"
            >
              <Phone className="h-4 w-4" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
            <Button
              variant="cta"
              size="sm"
              onClick={() => openLeadModal("General Demo Request", "Header Button")}
            >
              Book Free Demo
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-text-secondary hover:text-brand-primary hover:bg-surface-2 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-brandBorder shadow-xl px-4 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-base font-semibold py-2 transition-colors duration-200 hover:text-brand-primary",
                  isActive(link.path) ? "text-brand-primary border-l-2 border-brand-primary pl-2" : "text-text-secondary pl-2"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <hr className="border-brandBorder" />
          <div className="flex flex-col space-y-3 pt-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center justify-center space-x-2 text-sm font-semibold text-brand-primary border border-brand-primary/20 py-2.5 rounded-lg hover:bg-surface-1 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now: {BUSINESS_INFO.phone}</span>
            </a>
            <Button
              variant="cta"
              onClick={() => openLeadModal("General Demo Request", "Mobile Header Button")}
            >
              Book Free Demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
