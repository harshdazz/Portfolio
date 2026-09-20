"use client";

import { FormEvent, useCallback, useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { isValidEmail } from "@/../utils/check-email";
import { User, Mail, MessageSquare } from "lucide-react";

type Status =
  | { type: "idle" }
  | { type: "sending" }
  | { type: "success" }
  | { type: "error"; message: string };

const EMPTY_FORM = { name: "", email: "", message: "" };

const inputClass =
  "bg-white/5 w-full border rounded-2xl focus:bg-white/10 ring-0 outline-0 transition-colors duration-300 px-5 py-4 text-white placeholder:text-slate-600";

const ContactForm = () => {
  const [input, setInput] = useState(EMPTY_FORM);
  const [emailError, setEmailError] = useState(false);
  const [status, setStatus] = useState<Status>({ type: "idle" });

  const handleChange = useCallback(
    (field: keyof typeof EMPTY_FORM) =>
      (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = event.target;
        setInput((prev) => ({ ...prev, [field]: value }));
      },
    [],
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!input.name || !input.email || !input.message) {
      setStatus({
        type: "error",
        message: "Oops! Looks like some fields are still empty.",
      });
      return;
    }

    if (!isValidEmail(input.email)) {
      setEmailError(true);
      return;
    }

    setStatus({ type: "sending" });

    try {
      // Loaded on submit so the EmailJS SDK stays out of the initial bundle.
      const { default: emailjs } = await import("@emailjs/browser");

      const res = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        {
          from_name: input.name,
          email: input.email,
          message: `${input.message} \nEmail: ${input.email}`,
        },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "" },
      );

      if (res.status !== 200) throw new Error("Message could not be sent.");

      setInput(EMPTY_FORM);
      setStatus({ type: "success" });
    } catch (error: unknown) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred. Please email me directly.",
      });
    }
  };

  const isSending = status.type === "sending";

  return (
    <div className="relative p-8 lg:p-10 rounded-3xl border border-white/5 bg-white/[0.02] shadow-2xl">
      <form className="flex flex-col gap-8" onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Send a Message
          </h3>
          <p className="text-slate-400 text-sm">
            I&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Name */}
          <div className="flex flex-col gap-2 group/input">
            <label
              htmlFor="contact-name"
              className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2 group-focus-within/input:text-red-500 transition-colors"
            >
              <User className="w-4 h-4" />
              Your Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="John Doe"
              maxLength={100}
              required
              className={`${inputClass} border-white/10 focus:border-red-500/50`}
              value={input.name}
              onChange={handleChange("name")}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2 group/input">
            <label
              htmlFor="contact-email"
              className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2 group-focus-within/input:text-red-500 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Your Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="john@example.com"
              maxLength={100}
              required
              aria-invalid={emailError}
              className={`${inputClass} ${
                emailError
                  ? "border-red-500/50"
                  : "border-white/10 focus:border-red-500/50"
              }`}
              value={input.email}
              onChange={handleChange("email")}
              onBlur={() =>
                setEmailError(
                  Boolean(input.email) && !isValidEmail(input.email),
                )
              }
            />
            {emailError && (
              <p className="text-xs text-red-500 ml-1">
                Please provide a valid email address.
              </p>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2 group/input">
            <label
              htmlFor="contact-message"
              className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2 group-focus-within/input:text-red-500 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              Your Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Tell me about your project..."
              maxLength={500}
              rows={4}
              required
              className={`${inputClass} border-white/10 focus:border-red-500/50 resize-none`}
              value={input.message}
              onChange={handleChange("message")}
            />
          </div>

          <div className="flex flex-col gap-4 mt-2">
            <p aria-live="polite" className="text-sm text-center font-medium">
              {status.type === "error" && (
                <span className="text-red-500">{status.message}</span>
              )}
              {status.type === "success" && (
                <span className="text-emerald-400">
                  Message sent — I&apos;ll be in touch soon.
                </span>
              )}
            </p>

            <button
              type="submit"
              className="relative group/btn overflow-hidden rounded-2xl bg-gradient-to-r from-red-600 to-red-900 p-px transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
              disabled={isSending}
            >
              <div className="relative flex items-center justify-center gap-2 bg-[#050505] group-hover/btn:bg-transparent transition-colors rounded-[15px] px-8 py-4 text-white font-bold uppercase tracking-widest text-sm">
                {isSending ? (
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                ) : (
                  <>
                    Send Message
                    <TbMailForward className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </>
                )}
              </div>
            </button>
          </div>
        </div>
      </form>

      {/* Decorative Accent */}
      <div className="absolute w-1 h-20 bg-gradient-to-b from-red-600 to-transparent left-0 top-20 rounded-full" />
    </div>
  );
};

export default ContactForm;
