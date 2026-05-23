const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

function formatMessage(data: ContactPayload): string {
  const budgetLine = data.budget
    ? `Budget: ${data.budget}`
    : "Budget: Not specified";
  const companyLine = data.company
    ? `Company: ${data.company}`
    : "Company: Not specified";

  return [companyLine, budgetLine, "", data.message].join("\n");
}

export async function submitContactPayload(
  data: ContactPayload
): Promise<{ success: boolean; message: string }> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    if (process.env.NODE_ENV === "development") {
      console.info("[contact] Submission (Web3Forms not configured):", data);
      return {
        success: true,
        message:
          "Thanks — your message is in. I'll reply personally within 24 hours.",
      };
    }
    return {
      success: false,
      message:
        "Contact form is not configured yet. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to your environment.",
    };
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `Project inquiry from ${data.name}`,
      from_name: data.name,
      email: data.email,
      message: formatMessage(data),
    }),
  });

  const result = (await response.json()) as { success?: boolean; message?: string };

  if (!response.ok || !result.success) {
    return {
      success: false,
      message:
        result.message ?? "Failed to send your message. Please try again.",
    };
  }

  return {
    success: true,
    message:
      "Thanks — your message is in. I'll reply personally within 24 hours.",
  };
}
