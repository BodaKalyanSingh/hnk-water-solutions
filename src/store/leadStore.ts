import { create } from "zustand";

interface LeadState {
  isOpen: boolean;
  prefilledInterest: string;
  ctaSource: string;
  openLeadModal: (interest?: string, source?: string) => void;
  closeLeadModal: () => void;
}

export const useLeadStore = create<LeadState>((set) => ({
  isOpen: false,
  prefilledInterest: "",
  ctaSource: "",
  openLeadModal: (interest = "", source = "") =>
    set({
      isOpen: true,
      prefilledInterest: interest,
      ctaSource: source,
    }),
  closeLeadModal: () =>
    set({
      isOpen: false,
      prefilledInterest: "",
      ctaSource: "",
    }),
}));
