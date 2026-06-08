import * as React from "react";
import { Phone, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BUSINESS_INFO, WHATSAPP_MESSAGES } from "../../lib/constants";
import { useLeadStore } from "../../store/leadStore";
import whatsappLogo from "../../assets/whatsapp_log.png";

export function FloatingActions() {
  const [isVisible, setIsVisible] = React.useState(false);
  const { openLeadModal } = useLeadStore();

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappLink = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
    WHATSAPP_MESSAGES.default
  )}`;

  return (
    <>
      {/* Desktop Floating Action Stack */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="hidden md:flex fixed bottom-6 right-6 z-45 flex-col space-y-4 items-end"
          >
            {/* Book Demo Button (Orange) */}
            <button
              onClick={() => openLeadModal("Book Free Demo", "Floating Button")}
              className="group flex items-center space-x-2 bg-brand-cta hover:bg-brand-cta-hover text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <span className="text-xs font-bold uppercase tracking-wider max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap block">
                Book Free Demo
              </span>
              <Calendar className="h-5 w-5" />
            </button>

            {/* Call Now Button (Blue) */}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="group flex items-center space-x-2 bg-brand-primary hover:bg-brand-primary/95 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-xs font-bold uppercase tracking-wider max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap block">
                Call Now
              </span>
              <Phone className="h-5 w-5" />
            </a>

            {/* WhatsApp Button (Clean transparent background with pulse ring) */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
            >
              {/* WhatsApp Pulse Ring */}
              <span className="absolute inset-1 rounded-full bg-[#25D366]/25 animate-ping pointer-events-none" />
              <img
                src={whatsappLogo}
                className="h-14 w-14 object-contain drop-shadow-md relative z-10"
                alt="WhatsApp Us"
              />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sticky Footer Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-brandBorder shadow-[0_-8px_30px_rgba(0,0,0,0.08)] px-4 py-2 flex items-center justify-around gap-2 pb-safe">
        {/* Mobile WhatsApp Action - White background to contrast the green logo */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1.5 bg-white border border-brandBorder text-text-primary rounded-lg text-[10px] font-bold uppercase tracking-wider space-y-0.5"
        >
          <img src={whatsappLogo} className="h-7 w-7 object-contain" alt="WhatsApp" />
          <span>WhatsApp</span>
        </a>
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex-1 flex flex-col items-center justify-center py-2.5 bg-brand-primary text-white rounded-lg text-[10px] font-bold uppercase tracking-wider space-y-1"
        >
          <Phone className="h-5 w-5 fill-white" />
          <span>Call Now</span>
        </a>
        <button
          onClick={() => openLeadModal("Book Free Demo", "Mobile Sticky Action Bar")}
          className="flex-1 flex flex-col items-center justify-center py-2.5 bg-brand-cta text-white rounded-lg text-[10px] font-bold uppercase tracking-wider space-y-1 cursor-pointer"
        >
          <Calendar className="h-5 w-5" />
          <span>Book Demo</span>
        </button>
      </div>
    </>
  );
}
