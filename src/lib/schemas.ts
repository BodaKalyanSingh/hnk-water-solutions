import { z } from "zod";

export const leadFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"),
  location: z.string().min(3, "Please enter your location in Hanamkonda"),
  productInterest: z.string().min(1, "Please select a product or service"),
  message: z.string().optional(),
});

export const assessmentSchema = z.object({
  waterSource: z.enum(["municipal", "borewell", "tanker"], {
    message: "Please select your water source"
  }),
  familySize: z.enum(["1-2", "3-5", "6+"], {
    message: "Please select your family size"
  }),
  location: z.string().min(3, "Please enter your area in Hanamkonda"),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;
export type AssessmentValues = z.infer<typeof assessmentSchema>;
