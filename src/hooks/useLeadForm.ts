import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadFormSchema, LeadFormValues } from "../lib/schemas";
import { trackLeadConversion } from "../lib/analytics";

interface UseLeadFormProps {
  defaultValues?: Partial<LeadFormValues>;
  onSubmitSuccess: (data: LeadFormValues) => void;
  ctaSource: string;
}

export function useLeadForm({ defaultValues, onSubmitSuccess, ctaSource }: UseLeadFormProps) {
  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      location: "",
      productInterest: "",
      message: "",
      ...defaultValues,
    },
  });

  const onSubmit = async (data: LeadFormValues) => {
    // Track conversion in our local analytics
    trackLeadConversion({
      name: data.name,
      phone: data.phone,
      location: data.location,
      interest: data.productInterest,
      source: ctaSource,
    });
    
    // Trigger successful submission callback
    onSubmitSuccess(data);
    form.reset();
  };

  return {
    register: form.register,
    handleSubmit: form.handleSubmit,
    formState: form.formState,
    reset: form.reset,
    setValue: form.setValue,
    watch: form.watch,
    control: form.control,
    onSubmit: form.handleSubmit(onSubmit),
  };
}
