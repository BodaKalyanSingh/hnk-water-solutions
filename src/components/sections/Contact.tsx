import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadFormSchema, LeadFormValues } from "../../lib/schemas";
import { Input, Select, TextArea } from "../ui/Input";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { categories } from "../../data/categories";
import { BUSINESS_INFO, WHATSAPP_MESSAGES } from "../../lib/constants";
import { MapPin, Phone, Mail, Clock, CheckCircle2, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState<LeadFormValues | null>(null);

  const interestOptions = [
    { value: "", label: "Select product or service" },
    ...categories.map((c) => ({ value: c.title, label: c.title })),
    { value: "Repair & Service Support", label: "Repair & Service Support" },
    { value: "Annual Maintenance Contract (AMC)", label: "Annual Maintenance Contract (AMC)" },
    { value: "Water Hardness Testing", label: "Water Hardness Testing" },
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

  const onSubmit = async (data: LeadFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setFormData(data);
    setIsSubmitted(true);
    reset();
  };

  const handleWhatsAppRedirect = () => {
    if (!formData) return;
    const msg = WHATSAPP_MESSAGES.product(formData.productInterest || formData.name);
    const link = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
      `Hi, I am ${formData.name} from ${formData.location}. ${msg} (Phone: ${formData.phone})`
    )}`;
    window.open(link, "_blank");
  };

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left: Contact Info & Google Map */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-primary">Get in Touch</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight font-display mt-2">
                  Contact Our Hanamkonda Office
                </h2>
              </div>
              
              <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                Have questions about water softeners, filter replacements, or robot cleaners? Drop us a message or visit our branch at Naimnagar.
              </p>

              {/* Info Elements */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary">Office Address</h4>
                    <p className="text-xs md:text-sm text-text-secondary mt-0.5">{BUSINESS_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary">Phone Numbers</h4>
                    <p className="text-xs md:text-sm text-text-secondary mt-0.5">
                      <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-brand-primary transition-colors">
                        {BUSINESS_INFO.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary">Email Support</h4>
                    <p className="text-xs md:text-sm text-text-secondary mt-0.5">
                      <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-brand-primary transition-colors">
                        {BUSINESS_INFO.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary">Working Hours</h4>
                    <p className="text-xs md:text-sm text-text-secondary mt-0.5">{BUSINESS_INFO.openingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Iframe Embed */}
            <div className="w-full h-64 rounded-2xl overflow-hidden border border-brandBorder shadow-sm relative">
              <iframe
                title="Google Maps Location of Water Purifier Solutions Hanamkonda"
                src={BUSINESS_INFO.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: Contact / Inquiry Form */}
          <div className="lg:col-span-7">
            <Card className="bg-surface-1 border border-brandBorder shadow-xl p-6 md:p-10 h-full flex flex-col justify-center" hoverEffect={false}>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold font-display text-text-primary">Send Us a Message</h3>
                    <p className="text-xs text-text-secondary">Fields marked with * are required.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Your Name *"
                      placeholder="Full Name"
                      error={errors.name?.message}
                      {...register("name")}
                    />
                    <Input
                      label="Phone Number (10 Digit) *"
                      placeholder="e.g. 9876543210"
                      error={errors.phone?.message}
                      {...register("phone")}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Your Area / Colony *"
                      placeholder="e.g. Naimnagar, Subedari"
                      error={errors.location?.message}
                      {...register("location")}
                    />
                    <Select
                      label="Product Interested In *"
                      options={interestOptions}
                      error={errors.productInterest?.message}
                      {...register("productInterest")}
                    />
                  </div>

                  <TextArea
                    label="Your Message (Optional)"
                    placeholder="Enter details of your request or water quality problems..."
                    error={errors.message?.message}
                    {...register("message")}
                  />

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="cta"
                      className="w-full text-center cursor-pointer"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending Request..." : "Send Request & Get Callback"}
                    </Button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10 space-y-6"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold font-display text-text-primary">Message Sent!</h3>
                    <p className="text-sm text-text-secondary max-w-md mx-auto leading-relaxed">
                      Thank you for contacting us, <span className="font-semibold text-text-primary">{formData?.name}</span>. We will review your inquiry about <span className="font-semibold text-brand-primary">{formData?.productInterest}</span> and get back to you shortly.
                    </p>
                  </div>

                  <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                      onClick={handleWhatsAppRedirect}
                      className="bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center space-x-2 shadow-md w-full sm:w-auto"
                    >
                      <MessageSquare className="h-4.5 w-4.5 fill-white" />
                      <span>WhatsApp Deep Link</span>
                    </Button>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="inline-flex h-11 items-center justify-center rounded-lg border border-brandBorder bg-white px-6 text-sm font-semibold text-brand-primary hover:bg-surface-2 transition-all w-full sm:w-auto text-center"
                    >
                      <span>Call: {BUSINESS_INFO.phone}</span>
                    </a>
                  </div>
                </motion.div>
              )}
            </Card>
          </div>
          
        </div>
      </div>
    </section>
  );
}
