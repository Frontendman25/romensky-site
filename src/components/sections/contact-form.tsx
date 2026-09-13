"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/actions/contact";
import type { ContactResult } from "@/server/contracts";

const initial: ContactResult | null = null;

const fieldClass =
  "w-full border-0 border-b border-ink/20 bg-transparent px-0 py-2 text-[0.95rem] text-ink outline-none transition-colors placeholder:text-ink/35 focus-visible:border-ink";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    async (_prev: ContactResult | null, formData: FormData) => submitContact(formData),
    initial,
  );

  return (
    <form action={formAction} className="grid gap-5">
      <label className="grid gap-1 text-xs tracking-[0.12em] text-ink/70 uppercase">
        Name
        <input name="name" required autoComplete="name" className={fieldClass} />
      </label>
      <label className="grid gap-1 text-xs tracking-[0.12em] text-ink/70 uppercase">
        Email
        <input name="email" type="email" required autoComplete="email" className={fieldClass} />
        <span className="mt-1 text-[0.8rem] font-normal tracking-normal text-ink/60 normal-case">
          Needed only so I can reply.
        </span>
      </label>
      <label className="grid gap-1 text-xs tracking-[0.12em] text-ink/70 uppercase">
        Message
        <textarea name="message" required minLength={12} rows={4} className={`${fieldClass} resize-y`} />
      </label>
      <button
        type="submit"
        disabled={pending}
        className="mt-1 inline-flex h-10 w-fit items-center justify-center rounded-sm bg-ink px-4 text-sm font-medium text-paper transition-opacity hover:opacity-90 disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
      >
        {pending ? "Sending…" : "Send"}
      </button>
      {state && !state.ok ? (
        <p role="status" className="text-sm text-ink">
          {state.error}
        </p>
      ) : null}
    </form>
  );
}
