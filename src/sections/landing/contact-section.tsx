"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import {
  ContactLinkCard,
  FadeInView,
  StaggerGroup,
  StaggerItem,
} from "@/components";
import {
  contactFormEndpoint,
  contactLinks,
  contactSectionContent,
} from "@/data";

type SubmissionState = {
  status: "idle" | "submitting" | "success" | "error";
  message: string | null;
};

export function ContactSection() {
  const [submissionState, setSubmissionState] = useState<SubmissionState>({
    status: "idle",
    message: null,
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmissionState({
      status: "submitting",
      message: "Sending your message...",
    });

    try {
      const response = await fetch(contactFormEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        form.reset();
        setSubmissionState({
          status: "success",
          message: "Message sent. I will get back to you soon.",
        });
        return;
      }

      const data = (await response.json().catch(() => null)) as {
        errors?: Array<{ message?: string }>;
      } | null;
      const errorMessage =
        data?.errors
          ?.map((error) => error.message)
          .filter((message): message is string => Boolean(message))
          .join(" ") ||
        "Something went wrong. Please try again or use the email link above.";

      setSubmissionState({
        status: "error",
        message: errorMessage,
      });
    } catch {
      setSubmissionState({
        status: "error",
        message:
          "Unable to send right now. Please try again or use the email link above.",
      });
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-20">
      <FadeInView className="mx-auto max-w-4xl text-center">
        <p className="font-[family:var(--font-label)] text-[0.72rem] font-medium uppercase tracking-[0.24em] text-[#d7a26f]">
          {contactSectionContent.eyebrow}
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl lg:text-[2.9rem]">
          {contactSectionContent.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
          {contactSectionContent.description}
        </p>
      </FadeInView>

      <StaggerGroup className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-3">
        {contactLinks.map((link) => (
          <StaggerItem key={link.label}>
            <ContactLinkCard link={link} />
          </StaggerItem>
        ))}
      </StaggerGroup>

      <FadeInView
        delay={0.08}
        className="mx-auto mt-10 max-w-3xl rounded-[2rem] border border-[var(--border)] bg-[rgba(27,21,19,0.94)] p-6 text-left shadow-[0_20px_48px_rgba(0,0,0,0.22)] sm:p-8"
      >
        <form
          action={contactFormEndpoint}
          method="POST"
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
              Send a message
            </h3>
            <p className="text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
              Have a project in mind or want to collaborate? Reach out and I will get back to you.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-[#eadfce]">
              Name
              <input
                type="text"
                name="name"
                autoComplete="name"
                required
                placeholder="Your name"
                className="mt-2 w-full rounded-[1.2rem] border border-[var(--border)] bg-[#181210] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition placeholder:text-[#7e7264] focus:border-[#dd7b4d]/60"
              />
            </label>
            <label className="block text-sm font-medium text-[#eadfce]">
              Email
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="mt-2 w-full rounded-[1.2rem] border border-[var(--border)] bg-[#181210] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition placeholder:text-[#7e7264] focus:border-[#dd7b4d]/60"
              />
            </label>
          </div>
          <label className="block text-sm font-medium text-[#eadfce]">
            Message
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Tell me a little about your project or idea."
              className="mt-2 w-full rounded-[1.2rem] border border-[var(--border)] bg-[#181210] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition placeholder:text-[#7e7264] focus:border-[#dd7b4d]/60"
            />
          </label>
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p
              aria-live="polite"
              className={`text-sm ${
                submissionState.status === "error"
                  ? "text-rose-300"
                  : submissionState.status === "success"
                    ? "text-emerald-300"
                    : "text-[var(--text-secondary)]"
              }`}
            >
              {submissionState.message ??
                "Fallback: use the buttons above if the form fails."}
            </p>
            <button
              type="submit"
              disabled={submissionState.status === "submitting"}
              className="inline-flex h-12 items-center justify-center rounded-full border border-[#dd7b4d]/60 bg-[var(--accent)] px-6 font-[family:var(--font-label)] text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#1b120f] shadow-[0_14px_34px_rgba(203,92,50,0.22)] transition hover:bg-[#dc6f42] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submissionState.status === "submitting"
                ? "Sending..."
                : "Send Message"}
            </button>
          </div>
        </form>
      </FadeInView>
    </section>
  );
}
