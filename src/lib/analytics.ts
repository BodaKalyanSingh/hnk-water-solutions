export const trackEvent = (eventName: string, params?: Record<string, unknown>) => {
  console.log(`[Analytics Event] ${eventName}`, params);
};

export const trackLeadConversion = (leadData: {
  name: string;
  phone: string;
  location: string;
  interest: string;
  source: string;
}) => {
  console.log(`[Analytics Conversion] Lead Captured via ${leadData.source}`, leadData);
};
