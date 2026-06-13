"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import {
  NETLIFY_CONTACT_FORM_NAME,
  submitContactPayload,
  validateContactPayload,
  type ContactPayload,
} from "@/lib/contact";
import { getContactContent } from "@/content/contact";
import type { HomeContent } from "@/content/home/types";
import { privacyPath, type Locale } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { GradientHeading, GradientPanel } from "@/components/landing/GradientPanel";

const fieldClassName = cn(
  "w-full rounded-md border border-white/20 bg-white/5 text-base text-white backdrop-blur-sm transition-colors",
  "placeholder:text-slate-500",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400/40 focus-visible:border-green-400/35",
  "disabled:cursor-not-allowed disabled:opacity-50"
);

const inputClassName = cn(fieldClassName, "h-auto min-h-[3rem] py-3 px-4");

const selectClassName = cn(
  fieldClassName,
  "min-h-[3rem] py-3 px-4 appearance-none",
  "[&>option]:bg-slate-900 [&>option]:text-white"
);

const textareaClassName = cn(fieldClassName, "min-h-[9.5rem] py-3 px-4 resize-y");

const labelClassName = "text-base font-semibold text-white/90";

const optionalLabelClassName = "text-sm font-normal text-white/40";

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

type ContactFormProps = {
  locale: Locale;
  content: HomeContent["contact"];
};

export function ContactForm({ locale, content }: ContactFormProps) {
  const t = getContactContent(locale);
  const [pending, setPending] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [formMessage, setFormMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormMessage(null);
    setFieldErrors({});

    const payload = readPayload(event.currentTarget);
    const validation = validateContactPayload(payload, t.validation);

    if (!validation.ok) {
      setFieldErrors(validation.fieldErrors);
      setFormMessage(validation.message);
      return;
    }

    setPending(true);
    const result = await submitContactPayload(
      validation.data,
      t.success.message,
      t.error.sendFailed
    );
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
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <GradientPanel contentClassName="py-16 px-8 text-center sm:py-20 sm:px-12">
              <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <GradientHeading className="text-3xl sm:text-4xl leading-[1.15]">
                {t.success.heading}
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
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <GradientPanel contentClassName="py-12 px-6 sm:py-14 sm:px-10 lg:px-12">
            <div className="text-center mb-10">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-3">{content.eyebrow}</p>
              <GradientHeading className="text-3xl sm:text-4xl leading-[1.15]">{content.heading}</GradientHeading>
              <p className="mt-3 text-slate-400 text-lg max-w-lg mx-auto">{content.description}</p>
              <p className="mt-4 text-sm text-white/45 max-w-lg mx-auto">
                {t.privacy.privacyNoticeBefore}
                <a href={privacyPath(locale)} className="text-white/60 hover:text-white underline-offset-2 hover:underline">
                  {t.privacy.privacyLinkText}
                </a>
                {t.privacy.privacyNoticeAfter}
              </p>
            </div>

            {formMessage && (
              <p role="alert" className="mb-6 rounded-lg border border-red-500/30 bg-red-950/40 px-4 py-3 text-sm text-red-200">
                {formMessage}
              </p>
            )}

            <form
              name={NETLIFY_CONTACT_FORM_NAME}
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-7"
              noValidate
            >
              <input type="hidden" name="form-name" value={NETLIFY_CONTACT_FORM_NAME} />
              <p className="hidden" aria-hidden="true">
                <label>
                  {t.honeypotLabel}{" "}
                  <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              <div className="grid sm:grid-cols-2 gap-6 sm:gap-7">
                <div className="space-y-2.5">
                  <Label htmlFor="name" className={labelClassName}>{t.labels.name}</Label>
                  <Input id="name" name="name" type="text" autoComplete="name" placeholder={t.placeholders.name} required className={inputClassName} aria-invalid={Boolean(fieldErrors.name)} />
                  <FieldError message={fieldErrors.name} />
                </div>
                <div className="space-y-2.5">
                  <Label htmlFor="email" className={labelClassName}>{t.labels.email}</Label>
                  <Input id="email" name="email" type="email" autoComplete="email" placeholder={t.placeholders.email} required className={inputClassName} aria-invalid={Boolean(fieldErrors.email)} />
                  <FieldError message={fieldErrors.email} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 sm:gap-7">
                <div className="space-y-2.5">
                  <Label htmlFor="company" className={labelClassName}>
                    {t.labels.company}{" "}
                    <span className={optionalLabelClassName}>{t.labels.companyOptional}</span>
                  </Label>
                  <Input id="company" name="company" type="text" autoComplete="organization" placeholder={t.placeholders.company} className={inputClassName} aria-invalid={Boolean(fieldErrors.company)} />
                  <FieldError message={fieldErrors.company} />
                </div>
                <div className="space-y-2.5">
                  <Label htmlFor="budget" className={labelClassName}>
                    {t.labels.budget}{" "}
                    <span className={optionalLabelClassName}>{t.labels.budgetOptional}</span>
                  </Label>
                  <select id="budget" name="budget" className={selectClassName} defaultValue="">
                    {t.budgetOptions.map((option) => (
                      <option key={option.value || "empty"} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2.5">
                <Label htmlFor="message" className={labelClassName}>{t.labels.message}</Label>
                <Textarea id="message" name="message" rows={6} placeholder={t.placeholders.message} required className={textareaClassName} aria-invalid={Boolean(fieldErrors.message)} />
                <FieldError message={fieldErrors.message} />
              </div>

              <Button type="submit" size="lg" className="w-full group h-auto py-4 px-8 text-base font-semibold gap-2 transition-transform duration-200 hover:scale-[1.01] active:scale-[1.005]" disabled={pending}>
                {pending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {t.sendingButton}
                  </>
                ) : (
                  <>
                    {t.sendButton}
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
