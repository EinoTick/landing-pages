const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Must match the `name` on the form and in public/netlify-form-contact.html */
export const NETLIFY_CONTACT_FORM_NAME = "contact";

export type ContactPayload = {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
};

export type ContactValidationMessages = {
  nameRequired: string;
  emailRequired: string;
  emailInvalid: string;
  companyTooLong: string;
  messageTooShort: string;
  messageTooLong: string;
  formError: string;
};

export type ContactValidationResult =
  | { ok: true; data: ContactPayload }
  | { ok: false; fieldErrors: Record<string, string>; message: string };

export function validateContactPayload(
  data: ContactPayload,
  messages: ContactValidationMessages
): ContactValidationResult {
  const fieldErrors: Record<string, string> = {};

  if (data.name.length < 2) {
    fieldErrors.name = messages.nameRequired;
  }

  if (!data.email) {
    fieldErrors.email = messages.emailRequired;
  } else if (!EMAIL_PATTERN.test(data.email)) {
    fieldErrors.email = messages.emailInvalid;
  }

  if (data.company.length > 120) {
    fieldErrors.company = messages.companyTooLong;
  }

  if (data.message.length < 20) {
    fieldErrors.message = messages.messageTooShort;
  } else if (data.message.length > 5000) {
    fieldErrors.message = messages.messageTooLong;
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      fieldErrors,
      message: messages.formError,
    };
  }

  return { ok: true, data };
}

function isLocalDev(): boolean {
  if (typeof window === "undefined") return false;
  const host = window.location.hostname;
  return host === "localhost" || host === "127.0.0.1";
}

export async function submitContactPayload(
  data: ContactPayload,
  successMessage: string,
  errorMessage: string
): Promise<{ success: boolean; message: string }> {
  if (isLocalDev()) {
    console.info("[contact] Netlify Forms (local dev — not sent):", data);
    return { success: true, message: successMessage };
  }

  const body = new URLSearchParams({
    "form-name": NETLIFY_CONTACT_FORM_NAME,
    name: data.name,
    email: data.email,
    company: data.company,
    budget: data.budget || "Not specified",
    message: data.message,
  });

  try {
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });

    if (!response.ok) {
      return { success: false, message: errorMessage };
    }

    return { success: true, message: successMessage };
  } catch {
    return { success: false, message: errorMessage };
  }
}
