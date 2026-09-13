"use server";

import type { ContactPayload, ContactResult } from "@/server/contracts";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(formData: FormData): Promise<ContactResult> {
  const payload: ContactPayload = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  if (payload.name.length < 2 || payload.message.length < 12 || !emailPattern.test(payload.email)) {
    return {
      ok: false,
      code: "validation",
      error: "Please add a name, a valid email, and a short message.",
    };
  }

  // Email delivery and NestJS persistence land here later.
  return {
    ok: false,
    code: "not_configured",
    error:
      "The form is wired, but email delivery is not configured yet. Use email, LinkedIn or GitHub for now.",
  };
}
