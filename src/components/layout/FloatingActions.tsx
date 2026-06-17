import * as React from "react";
import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BUSINESS_INFO, WHATSAPP_MESSAGES } from "../../lib/constants";
import { getWhatsAppLink } from "../../lib/whatsapp";
import { useUIStore } from "../../store/uiStore";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";

export function FloatingActions() {
  const [isVisible, setIsVisible] = React.useState(false);
  const mobileMenuOpen = useUIStore((s) => s.mobileMenuOpen);

  React.useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappLink = getWhatsAppLink(WHATSAPP_MESSAGES.default);
  const telLink = `tel:${BUSINESS_INFO.phoneRaw}`;

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.2 }}
            className="hidden md:flex fixed bottom-4 right-4 z-50 items-center gap-2"
          >
            <a
              href={telLink}
              aria-label={`Call ${BUSINESS_INFO.phone}`}
              className="inline-flex h-9 items-center gap-1.5 rounded-full bg-brand-primary px-3 text-xs font-medium text-white shadow-sm hover:bg-brand-primary/90"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              Call
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="inline-flex h-9 items-center gap-1.5 rounded-full bg-[#25D366] px-3 text-xs font-medium text-white shadow-sm hover:bg-[#1da851]"
            >
              <WhatsAppIcon size={16} />
              WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {!mobileMenuOpen && (
        <div
          className="md:hidden fixed bottom-0 inset-x-0 z-50 flex h-9 items-center justify-center gap-5 border-t border-slate-200 bg-white text-xs"
          style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
          role="navigation"
          aria-label="Quick contact"
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="inline-flex items-center gap-1 font-medium text-[#128C7E] active:opacity-70"
          >
            <WhatsAppIcon size={16} />
            WhatsApp
          </a>
          <span className="text-slate-300 select-none" aria-hidden="true">
            |
          </span>
          <a
            href={telLink}
            aria-label="Call now"
            className="inline-flex items-center gap-1 font-medium text-brand-primary active:opacity-70"
          >
            <Phone className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
            Call Now
          </a>
        </div>
      )}
    </>
  );
}
