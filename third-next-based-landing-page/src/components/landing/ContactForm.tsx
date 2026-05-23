"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import {
  submitContactPayload,
  validateContactPayload,
  type ContactPayload,
} from "@/lib/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { GradientHeading, GradientPanel } from "@/components/landing/GradientPanel";

const budgetOptions = [
  { value: "", label: "Select a range (optional)" },
  { value: "under-8k", label: "Under $8k" },
  { value: "8k-20k", label: "$8k – $20k" },
  { value: "20k-plus", label: "$20k+" },
  { value: "retainer", label: "Monthly retainer" },
  { value: "unsure", label: "Not sure yet" },
];

const selectClassName = cn(
  "flex h-11 w-full rounded-md border border-white/15 bg-slate-950/40 px-3 py-2 text-sm text-white backdrop-blur-sm transition-colors",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 focus-visible:border-indigo-400/40",
  "disabled:cursor-not-allowed disabled:opacity-50",
  "[&>option]:bg-slate-900 [&>option]:text-white"
);

const inputClassName =
  "border-white/15 bg-slate-950/40 backdrop-blur-sm focus-visible:ring-indigo-400/50 focus-visible:border-indigo-400/40";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-sm text-red-400/90 mt-1.5">{message}</p>;
}

function readPayload(form: HTMLFormElement): ContactPayload {
  const formData = new FormData(form);
  const get = (key: string) => {
    const value = formData.get(key);
    return typeof value === "string" ? value.trim() : "";
  };

  return {
    name: get("name"),
    email: get("email"),
    company: get("company"),
    budget: get("budget"),
    message: get("message"),
  };
}

export function ContactForm() {
  const [pending, setPending] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [formMessage, setFormMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormMessage(null);
    setFieldErrors({});

    const payload = readPayload(event.currentTarget);
    const validation = validateContactPayload(payload);

    if (!validation.ok) {
      setFieldErrors(validation.fieldErrors);
      setFormMessage(validation.message);
      return;
    }

    setPending(true);
    const result = await submitContactPayload(validation.data);
    setPending(false);

    if (result.success) {
      setSuccessMessage(result.message);
      event.currentTarget.reset();
      return;
    }

    setFormMessage(result.message);
  }

  if (successMessage) {
    return (
      <section id="contact" className="py-24 px-4 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <GradientPanel
              contentClassName="py-16 px-8 text-center sm:py-20 sm:px-12"
            >
              <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <GradientHeading className="text-3xl sm:text-4xl leading-[1.15]">
                Message received
              </GradientHeading>
              <p className="mt-3 text-slate-400 text-lg max-w-md mx-auto leading-relaxed">
                {successMessage}
              </p>
            </GradientPanel>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 px-4 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GradientPanel contentClassName="py-12 px-6 sm:py-14 sm:px-10 lg:px-12">
            <div className="text-center mb-10">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-3">
                Contact
              </p>
              <GradientHeading className="text-3xl sm:text-4xl leading-[1.15]">
                Tell me about your project
              </GradientHeading>
              <p className="mt-3 text-slate-400 text-lg max-w-lg mx-auto">
                A short brief is enough — I&apos;ll reply within 24 hours with
                honest scope, timeline, and next steps.
              </p>
            </div>

            {formMessage && (
              <p
                role="alert"
                className="mb-6 rounded-lg border border-red-500/30 bg-red-950/40 px-4 py-3 text-sm text-red-200"
              >
                {formMessage}
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Jane Founder"
                    required
                    className={inputClassName}
                    aria-invalid={Boolean(fieldErrors.name)}
                  />
                  <FieldError message={fieldErrors.name} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    required
                    className={inputClassName}
                    aria-invalid={Boolean(fieldErrors.email)}
                  />
                  <FieldError message={fieldErrors.email} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company">
                    Company{" "}
                    <span className="text-white/40 font-normal">(optional)</span>
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Acme Inc."
                    className={inputClassName}
                    aria-invalid={Boolean(fieldErrors.company)}
                  />
                  <FieldError message={fieldErrors.company} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">
                    Budget{" "}
                    <span className="text-white/40 font-normal">(optional)</span>
                  </Label>
                  <select
                    id="budget"
                    name="budget"
                    className={selectClassName}
                    defaultValue=""
                  >
                    {budgetOptions.map((option) => (
                      <option key={option.value || "empty"} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Project details</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="What are you building, who's it for, and what's your ideal timeline?"
                  required
                  className={inputClassName}
                  aria-invalid={Boolean(fieldErrors.message)}
                />
                <FieldError message={fieldErrors.message} />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto group h-auto py-3 px-8 font-semibold transition-transform duration-200 hover:scale-[1.02] active:scale-[1.01]"
                disabled={pending}
              >
                {pending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send message
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </Button>
            </form>
          </GradientPanel>
        </motion.div>
      </div>
    </section>
  );
}
