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

export type ContactValidationResult =
  | { ok: true; data: ContactPayload }
  | { ok: false; fieldErrors: Record<string, string>; message: string };

export function validateContactPayload(
  data: ContactPayload
): ContactValidationResult {
  const fieldErrors: Record<string, string> = {};

  if (data.name.length < 2) {
    fieldErrors.name = "Please enter your name.";
  }

  if (!data.email) {
    fieldErrors.email = "Email is required.";
  } else if (!EMAIL_PATTERN.test(data.email)) {
    fieldErrors.email = "Please enter a valid email address.";
  }

  if (data.company.length > 120) {
    fieldErrors.company = "Company name is too long.";
  }

  if (data.message.length < 20) {
    fieldErrors.message =
      "Please share a bit more detail (at least 20 characters).";
  } else if (data.message.length > 5000) {
    fieldErrors.message = "Message is too long (max 5,000 characters).";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      fieldErrors,
      message: "Please fix the errors below.",
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
  data: ContactPayload
): Promise<{ success: boolean; message: string }> {
  const successMessage =
    "Thanks — your message is in. I'll reply personally within 24 hours.";

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
      return {
        success: false,
        message: "Failed to send your message. Please try again.",
      };
    }

    return { success: true, message: successMessage };
  } catch {
    return {
      success: false,
      message: "Failed to send your message. Please try again.",
    };
  }
}
