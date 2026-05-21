"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import styles from "./ContactForm.module.css";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    const newErrors: Record<string, string> = {};
    if (!name) newErrors.name = "Name is required.";
    if (!email) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Please enter a valid email.";
    if (!message) newErrors.message = "Message is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
    form.reset();
  };

  if (submitted) {
    return (
      <div className={styles.success}>
        <span className={styles.successIcon}>✓</span>
        <h3>Message Sent!</h3>
        <p>Thank you for reaching out. We&apos;ll get back to you within 2 business days.</p>
        <button type="button" onClick={() => setSubmitted(false)} className={styles.resetBtn}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className={`form-input ${errors.name ? "error" : ""}`}
          placeholder="Your name"
        />
        {errors.name && <span className="form-error">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={`form-input ${errors.email ? "error" : ""}`}
          placeholder="you@example.com"
        />
        {errors.email && <span className="form-error">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="subject" className="form-label">
          Subject
        </label>
        <select id="subject" name="subject" className="form-select">
          <option value="general">General Inquiry</option>
          <option value="accuracy">Calculator Accuracy</option>
          <option value="feature">Feature Request</option>
          <option value="bug">Bug Report</option>
          <option value="partnership">Partnership</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`${styles.textarea} ${errors.message ? "error" : ""}`}
          placeholder="How can we help?"
        />
        {errors.message && <span className="form-error">{errors.message}</span>}
      </div>

      <Button type="submit" size="lg" className={styles.submitBtn}>
        Send Message
      </Button>
    </form>
  );
}
