"use client";

import { useActionState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
import { Button } from "../ui/Button";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );
  const formRef = useRef<HTMLFormElement>(null);

  // Reset form on successful submission
  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state.success]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Form Container with enhanced glassmorphism */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        {/* Glow effect behind form */}
        <div className="absolute -inset-1 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-3xl blur-xl opacity-50" />

        {/* Main form card */}
        <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-white/20 rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-white/20 rounded-br-3xl" />

          <form ref={formRef} action={formAction} className="space-y-8">
            {/* Honeypot field - hidden from users */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute -left-[9999px] opacity-0 h-0 w-0"
            />

            {/* Form header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Envoyez-moi un message</h3>
              <p className="text-gray-400 text-sm">Je vous répondrai dans les plus brefs délais</p>
            </div>

            {/* Two column layout for name and email on desktop */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name field */}
              <div className="group">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 transition-colors group-focus-within:text-white">
                  Nom <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 group-focus-within:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Jean Dupont"
                    aria-invalid={!!state.errors?.name}
                    aria-describedby={state.errors?.name ? "name-error" : undefined}
                    className={`
                      w-full pl-12 pr-4 py-4
                      bg-white/[0.03] hover:bg-white/[0.05]
                      border border-white/10 hover:border-white/20
                      focus:border-white/40 focus:bg-white/[0.06]
                      rounded-xl text-white placeholder-gray-500
                      transition-all duration-300 ease-out
                      outline-none focus:ring-2 focus:ring-white/10
                      ${state.errors?.name ? "border-red-500/50 focus:border-red-500" : ""}
                    `}
                  />
                </div>
                {state.errors?.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    id="name-error"
                    className="mt-2 text-sm text-red-400"
                    role="alert"
                  >
                    {state.errors.name[0]}
                  </motion.p>
                )}
              </div>

              {/* Email field */}
              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 transition-colors group-focus-within:text-white">
                  Email <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 group-focus-within:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="jean@email.com"
                    aria-invalid={!!state.errors?.email}
                    aria-describedby={state.errors?.email ? "email-error" : undefined}
                    className={`
                      w-full pl-12 pr-4 py-4
                      bg-white/[0.03] hover:bg-white/[0.05]
                      border border-white/10 hover:border-white/20
                      focus:border-white/40 focus:bg-white/[0.06]
                      rounded-xl text-white placeholder-gray-500
                      transition-all duration-300 ease-out
                      outline-none focus:ring-2 focus:ring-white/10
                      ${state.errors?.email ? "border-red-500/50 focus:border-red-500" : ""}
                    `}
                  />
                </div>
                {state.errors?.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    id="email-error"
                    className="mt-2 text-sm text-red-400"
                    role="alert"
                  >
                    {state.errors.email[0]}
                  </motion.p>
                )}
              </div>
            </div>

            {/* Two column for phone and subject */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Phone field */}
              <div className="group">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2 transition-colors group-focus-within:text-white">
                  Téléphone
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 group-focus-within:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="06 12 34 56 78"
                    aria-invalid={!!state.errors?.phone}
                    aria-describedby={state.errors?.phone ? "phone-error" : undefined}
                    className={`
                      w-full pl-12 pr-4 py-4
                      bg-white/[0.03] hover:bg-white/[0.05]
                      border border-white/10 hover:border-white/20
                      focus:border-white/40 focus:bg-white/[0.06]
                      rounded-xl text-white placeholder-gray-500
                      transition-all duration-300 ease-out
                      outline-none focus:ring-2 focus:ring-white/10
                      ${state.errors?.phone ? "border-red-500/50 focus:border-red-500" : ""}
                    `}
                  />
                </div>
                {state.errors?.phone && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    id="phone-error"
                    className="mt-2 text-sm text-red-400"
                    role="alert"
                  >
                    {state.errors.phone[0]}
                  </motion.p>
                )}
              </div>

              {/* Subject field */}
              <div className="group">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2 transition-colors group-focus-within:text-white">
                  Objet <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 group-focus-within:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="Votre demande"
                    aria-invalid={!!state.errors?.subject}
                    aria-describedby={state.errors?.subject ? "subject-error" : undefined}
                    className={`
                      w-full pl-12 pr-4 py-4
                      bg-white/[0.03] hover:bg-white/[0.05]
                      border border-white/10 hover:border-white/20
                      focus:border-white/40 focus:bg-white/[0.06]
                      rounded-xl text-white placeholder-gray-500
                      transition-all duration-300 ease-out
                      outline-none focus:ring-2 focus:ring-white/10
                      ${state.errors?.subject ? "border-red-500/50 focus:border-red-500" : ""}
                    `}
                  />
                </div>
                {state.errors?.subject && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    id="subject-error"
                    className="mt-2 text-sm text-red-400"
                    role="alert"
                  >
                    {state.errors.subject[0]}
                  </motion.p>
                )}
              </div>
            </div>

            {/* Message field - full width */}
            <div className="group">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 transition-colors group-focus-within:text-white">
                Message <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <div className="absolute top-4 left-4 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500 group-focus-within:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                </div>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Décrivez votre projet ou votre besoin..."
                  aria-invalid={!!state.errors?.message}
                  aria-describedby={state.errors?.message ? "message-error" : undefined}
                  className={`
                    w-full pl-12 pr-4 py-4
                    bg-white/[0.03] hover:bg-white/[0.05]
                    border border-white/10 hover:border-white/20
                    focus:border-white/40 focus:bg-white/[0.06]
                    rounded-xl text-white placeholder-gray-500
                    transition-all duration-300 ease-out
                    outline-none focus:ring-2 focus:ring-white/10
                    resize-none
                    ${state.errors?.message ? "border-red-500/50 focus:border-red-500" : ""}
                  `}
                />
              </div>
              {state.errors?.message && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  id="message-error"
                  className="mt-2 text-sm text-red-400"
                  role="alert"
                >
                  {state.errors.message[0]}
                </motion.p>
              )}
            </div>

            {/* Required fields note */}
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <span className="text-red-400">*</span>
              <span>Champs obligatoires</span>
            </p>

            {/* Status message */}
            <AnimatePresence mode="wait">
              {state.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className={`p-5 rounded-xl text-center flex items-center justify-center gap-3 ${
                    state.success
                      ? "bg-green-500/10 border border-green-500/30"
                      : "bg-red-500/10 border border-red-500/30"
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {state.success ? (
                    <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  <span className={state.success ? "text-green-400" : "text-red-400"}>
                    {state.message}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              loading={isPending}
              disabled={isPending}
              className="!py-5 text-base font-semibold tracking-wide"
            >
              {isPending ? (
                <span className="flex items-center gap-3">
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Envoi en cours...
                </span>
              ) : (
                <span className="flex items-center gap-3">
                  Envoyer le message
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              )}
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
