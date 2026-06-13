import type { Locale } from "@/lib/site";

export type ContactContent = {
  labels: {
    name: string;
    email: string;
    company: string;
    companyOptional: string;
    budget: string;
    budgetOptional: string;
    message: string;
  };
  placeholders: {
    name: string;
    email: string;
    company: string;
    message: string;
  };
  budgetOptions: { value: string; label: string }[];
  validation: {
    nameRequired: string;
    emailRequired: string;
    emailInvalid: string;
    companyTooLong: string;
    messageTooShort: string;
    messageTooLong: string;
    formError: string;
  };
  success: {
    heading: string;
    message: string;
  };
  error: {
    sendFailed: string;
  };
  privacy: {
    privacyLinkText: string;
    privacyNoticeBefore: string;
    privacyNoticeAfter: string;
  };
  sendButton: string;
  sendingButton: string;
  honeypotLabel: string;
};

const enContactContent: ContactContent = {
  labels: {
    name: "Name",
    email: "Email",
    company: "Company",
    companyOptional: "(optional)",
    budget: "Budget",
    budgetOptional: "(optional)",
    message: "Project details",
  },
  placeholders: {
    name: "Jane Founder",
    email: "name@example.com",
    company: "Company or Project name",
    message:
      "What are you building, who's it for, and what's your ideal timeline?",
  },
  budgetOptions: [
    { value: "", label: "Select a range (optional)" },
    { value: "under-8k", label: "Under $8k" },
    { value: "8k-20k", label: "$8k – $20k" },
    { value: "20k-plus", label: "$20k+" },
    { value: "retainer", label: "Monthly retainer" },
    { value: "unsure", label: "Not sure yet" },
  ],
  validation: {
    nameRequired: "Please enter your name.",
    emailRequired: "Email is required.",
    emailInvalid: "Please enter a valid email address.",
    companyTooLong: "Company name is too long.",
    messageTooShort:
      "Please share a bit more detail (at least 20 characters).",
    messageTooLong: "Message is too long (max 5,000 characters).",
    formError: "Please fix the errors below.",
  },
  success: {
    heading: "Message received",
    message:
      "Thanks — your message is in. I'll reply personally within 24 hours.",
  },
  error: {
    sendFailed: "Failed to send your message. Please try again.",
  },
  privacy: {
    privacyLinkText: "privacy policy",
    privacyNoticeBefore: "By submitting this form, you agree to the processing of your personal data in accordance with our ",
    privacyNoticeAfter: ".",
  },
  sendButton: "Send message",
  sendingButton: "Sending…",
  honeypotLabel: "Don't fill this out:",
};

const fiContactContent: ContactContent = {
  labels: {
    name: "Nimi",
    email: "Sähköposti",
    company: "Yritys",
    companyOptional: "(valinnainen)",
    budget: "Budjetti",
    budgetOptional: "(valinnainen)",
    message: "Projektin tiedot",
  },
  placeholders: {
    name: "Maija Perustaja",
    email: "nimi@esimerkki.fi",
    company: "Yrityksen tai projektin nimi",
    message:
      "Mitä olet rakentamassa, kenelle se on tarkoitettu ja mikä on ihanteellinen aikataulusi?",
  },
  budgetOptions: [
    { value: "", label: "Valitse haarukka (valinnainen)" },
    { value: "under-8k", label: "Alle 8 000 €" },
    { value: "8k-20k", label: "8 000 – 20 000 €" },
    { value: "20k-plus", label: "Yli 20 000 €" },
    { value: "retainer", label: "Kuukausittainen retainer" },
    { value: "unsure", label: "En ole vielä varma" },
  ],
  validation: {
    nameRequired: "Anna nimesi.",
    emailRequired: "Sähköposti on pakollinen.",
    emailInvalid: "Anna kelvollinen sähköpostiosoite.",
    companyTooLong: "Yrityksen nimi on liian pitkä.",
    messageTooShort:
      "Kerro hieman tarkemmin (vähintään 20 merkkiä).",
    messageTooLong: "Viesti on liian pitkä (enintään 5 000 merkkiä).",
    formError: "Korjaa alla olevat virheet.",
  },
  success: {
    heading: "Viesti vastaanotettu",
    message:
      "Kiitos — viestisi on perillä. Vastaan henkilökohtaisesti 24 tunnin sisällä.",
  },
  error: {
    sendFailed: "Viestin lähetys epäonnistui. Yritä uudelleen.",
  },
  privacy: {
    privacyLinkText: "tietosuojaselosteen",
    privacyNoticeBefore:
      "Lähettämällä lomakkeen hyväksyt henkilötietojesi käsittelyn ",
    privacyNoticeAfter: " mukaisesti.",
  },
  sendButton: "Lähetä viesti",
  sendingButton: "Lähetetään…",
  honeypotLabel: "Älä täytä tätä:",
};

export function getContactContent(locale: Locale): ContactContent {
  return locale === "fi" ? fiContactContent : enContactContent;
}
