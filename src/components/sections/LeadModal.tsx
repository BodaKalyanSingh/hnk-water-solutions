import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLeadStore } from "../../store/leadStore";
import { leadFormSchema, LeadFormValues } from "../../lib/schemas";
import { Modal } from "../ui/Modal";
import { Input, Select, TextArea } from "../ui/Input";
import { Button } from "../ui/Button";
import { categories } from "../../data/categories";
import { BUSINESS_INFO, WHATSAPP_MESSAGES } from "../../lib/constants";
import { CheckCircle2, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export function LeadModal() {
  const { isOpen, prefilledInterest, ctaSource, closeLeadModal } = useLeadStore();
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState<LeadFormValues | null>(null);

  const interestOptions = [
    { value: "", label: "Select product/service" },
    ...categories.map((c) => ({ value: c.title, label: c.title })),
    { value: "Water Purifier Service", label: "Water Purifier Service" },
    { value: "Water Softener Service", label: "Water Softener Service" },
    { value: "Robo Vacuum Service", label: "Robo Vacuum Service" },
    { value: "Annual Maintenance Contract", label: "Annual Maintenance Contract (AMC)" },
    { value: "Free Water Quality Testing", label: "Free Water Quality Testing" },
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      location: "",
      productInterest: "",
      message: "",
    },
  });

  React.useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      reset({
        name: "",
        phone: "",
        location: "",
        productInterest: prefilledInterest || "",
        message: "",
      });
    }
  }, [isOpen, prefilledInterest, reset]);

  const onSubmit = async (data: LeadFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setFormData(data);
    setIsSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    if (!formData) return;
    const msg = WHATSAPP_MESSAGES.product(formData.productInterest || formData.name);
    const link = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
      `Hi, I am ${formData.name} from ${formData.location}. ${msg} (Contact: ${formData.phone})`
    )}`;
    window.open(link, "_blank");
  };

  return (
    <Modal isOpen={isOpen} onClose={closeLeadModal} title="Book Consultation / Request Quote">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <p className="text-sm text-text-secondary">
            Provide your details below. Our customer representative will get in touch with you shortly.
          </p>
          {ctaSource && (
            <div className="text-[10px] uppercase font-mono tracking-wider text-brand-primary bg-surface-2 px-2.5 py-1 rounded inline-block">
              Source: {ctaSource}
            </div>
          )}
          
          <Input
            label="Your Name *"
            placeholder="Enter your name"
            error={errors.name?.message}
            {...register("name")}
          />

          <Input
            label="Phone Number (10 digit) *"
            placeholder="e.g. 9876543210"
            error={errors.phone?.message}
            {...register("phone")}
          />

          <Input
            label="Location / Colony in Hanamkonda *"
            placeholder="e.g. Naimnagar, Hunter Road"
            error={errors.location?.message}
            {...register("location")}
          />

          <Select
            label="Product or Service Interested In *"
            options={interestOptions}
            error={errors.productInterest?.message}
            {...register("productInterest")}
          />

          <TextArea
            label="Additional message (Optional)"
            placeholder="Any special instructions or water issues..."
            error={errors.message?.message}
            {...register("message")}
          />

          <div className="pt-2">
            <Button
              type="submit"
              variant="cta"
              className="w-full text-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting Inquiry..." : "Confirm & Submit Request"}
            </Button>
          </div>
        </form>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-6 space-y-6"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold font-display text-text-primary">Inquiry Submitted!</h3>
            <p className="text-sm text-text-secondary px-2">
              Thank you, <span className="font-semibold text-text-primary">{formData?.name}</span>. We have received your request regarding <span className="font-semibold text-brand-primary">{formData?.productInterest}</span>. We will contact you shortly.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={handleWhatsAppRedirect}
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center space-x-2 shadow-md"
            >
              <MessageSquare className="h-4 w-4 fill-white" />
              <span>Connect via WhatsApp</span>
            </Button>
            <Button
              variant="outline"
              onClick={closeLeadModal}
              className="flex items-center justify-center"
            >
              Close Window
            </Button>
          </div>
        </motion.div>
      )}
    </Modal>
  );
}
