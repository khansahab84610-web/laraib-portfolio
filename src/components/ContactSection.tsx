import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Clock,
  Calendar,
  Send,
  CheckCircle2,
  Copy,
  Check,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "../data/siteConfig";

interface ContactSectionProps {
  initialProjectInterest?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialProjectInterest,
}) => {
  const { contact } = siteConfig;

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState(
    initialProjectInterest
      ? `Project inquiry: ${initialProjectInterest}`
      : contact.projectTypes[0]
  );
  const [budget, setBudget] = useState(contact.budgetRanges[1]);
  const [details, setDetails] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Please enter your name.";
    if (!email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!details.trim()) {
      errs.details = "Please share a few details about your project or timeline.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${name} (${projectType})`);
    const body = encodeURIComponent(
      `Hi ${siteConfig.brand.designerName},\n\nMy name is ${name} (${email}).\nI'm interested in: ${projectType}\nEstimated budget: ${budget}\n\nProject details:\n${details}\n\nLooking forward to hearing from you!`
    );
    return `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  const getFormattedBrief = () => {
    return `Client Name: ${name}\nEmail: ${email}\nProject Type: ${projectType}\nBudget Range: ${budget}\nDetails: ${details}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(getFormattedBrief());
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-32 bg-[var(--bg-primary)] border-t border-[var(--border-color)] transition-colors duration-300">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Supporting copy & Interactive Form (col-span-7) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.16em] uppercase text-[var(--accent)]">
                Let's Collaborate
              </span>
            </div>

            <h2 className="font-heading text-[34px] sm:text-[44px] lg:text-[48px] leading-[1.05] font-medium tracking-tight text-[var(--text-main)] mb-4">
              Have a project in mind? <br className="hidden sm:inline" />
              <span className="text-[var(--accent)]">Let's build something exceptional.</span>
            </h2>

            <p className="text-[15px] sm:text-[16px] text-[var(--text-secondary)] max-w-[500px] leading-relaxed mb-8">
              From web development and Amazon store scaling to brand identity and paid advertising, let's create measurable growth for your business.
            </p>

            {/* Interactive Form or Success State */}
            {isSubmitted ? (
              <div className="p-6 sm:p-8 rounded-[24px] bg-[var(--bg-card)] border border-[var(--border-color)] soft-shadow animate-in fade-in duration-300">
                <div className="flex items-start gap-3.5 mb-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--accent-subtle)] text-[var(--accent)] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-[18px] font-semibold text-[var(--text-main)]">
                      Inquiry Prepared, {name}!
                    </h3>
                    <p className="text-[13px] text-[var(--text-secondary)] mt-1 leading-normal">
                      Your project brief has been formatted. Click below to launch your email client with everything filled in, or copy the brief directly.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] mb-5 text-[12px] text-[var(--text-main)] font-mono whitespace-pre-wrap leading-relaxed max-h-40 overflow-y-auto">
                  {getFormattedBrief()}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={generateMailtoUrl()}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-[13px] font-medium text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-colors shadow-xs"
                  >
                    <span>Open in Email Client</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyBrief}
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-full text-[13px] font-medium text-[var(--text-main)] bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent)] transition-colors cursor-pointer"
                  >
                    {copiedBrief ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[var(--accent)]" />
                        <span>Brief Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                        <span>Copy Brief</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setDetails("");
                    }}
                    className="text-[12px] text-[var(--text-secondary)] hover:text-[var(--text-main)] underline underline-offset-4 cursor-pointer ml-auto"
                  >
                    Submit another inquiry
                  </button>
                </div>

                <div className="mt-4 pt-3 border-t border-[var(--border-color)] text-[11px] text-[var(--text-muted)]">
                  Destination configured: <span className="font-mono text-[var(--accent)]">{contact.email}</span> (editable in <code className="bg-[var(--bg-secondary)] px-1 py-0.5 rounded">src/data/siteConfig.ts</code>).
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="p-6 sm:p-8 rounded-[24px] bg-[var(--bg-card)] border border-[var(--border-color)] soft-shadow space-y-5"
              >
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="client-name"
                      className="block text-[12px] font-medium text-[var(--text-main)] mb-1.5"
                    >
                      Your Name <span className="text-[var(--accent)]">*</span>
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
                      }}
                      placeholder="Jane Doe"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[var(--bg-secondary)] border ${
                        errors.name ? "border-red-400" : "border-[var(--border-color)]"
                      } text-[14px] text-[var(--text-main)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none transition-colors`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="client-email"
                      className="block text-[12px] font-medium text-[var(--text-main)] mb-1.5"
                    >
                      Your Email <span className="text-[var(--accent)]">*</span>
                    </label>
                    <input
                      id="client-email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                      }}
                      placeholder="jane@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[var(--bg-secondary)] border ${
                        errors.email ? "border-red-400" : "border-[var(--border-color)]"
                      } text-[14px] text-[var(--text-main)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Project Type & Budget Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="project-type"
                      className="block text-[12px] font-medium text-[var(--text-main)] mb-1.5"
                    >
                      Service Required
                    </label>
                    <select
                      id="project-type"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[13px] text-[var(--text-main)] focus:border-[var(--accent)] focus:outline-none transition-colors cursor-pointer"
                    >
                      {contact.projectTypes.map((type, idx) => (
                        <option key={idx} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="budget-range"
                      className="block text-[12px] font-medium text-[var(--text-main)] mb-1.5"
                    >
                      Estimated Budget (Optional)
                    </label>
                    <select
                      id="budget-range"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[13px] text-[var(--text-main)] focus:border-[var(--accent)] focus:outline-none transition-colors cursor-pointer"
                    >
                      {contact.budgetRanges.map((b, idx) => (
                        <option key={idx} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label
                    htmlFor="project-details"
                    className="block text-[12px] font-medium text-[var(--text-main)] mb-1.5"
                  >
                    Project Details & Goals <span className="text-[var(--accent)]">*</span>
                  </label>
                  <textarea
                    id="project-details"
                    rows={4}
                    value={details}
                    onChange={(e) => {
                      setDetails(e.target.value);
                      if (errors.details)
                        setErrors((prev) => ({ ...prev, details: "" }));
                    }}
                    placeholder="Tell me a bit about your website, Amazon store goals, ad targets, or graphic design scope..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-[var(--bg-secondary)] border ${
                      errors.details ? "border-red-400" : "border-[var(--border-color)]"
                    } text-[14px] text-[var(--text-main)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none transition-colors resize-none`}
                  />
                  {errors.details && (
                    <p className="text-[11px] text-red-500 mt-1">{errors.details}</p>
                  )}
                </div>

                {/* Submit Row */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-medium text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>Start a project</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <span className="text-[11px] text-[var(--text-muted)] text-center sm:text-right">
                    Zero spam. Fast response within 24–48 hours.
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contact Info & Availability (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:pl-6">
            {/* Quick Contact Card */}
            <div className="p-6 sm:p-8 rounded-[24px] bg-[var(--bg-card)] border border-[var(--border-color)] soft-shadow">
              <h3 className="font-heading text-[18px] font-semibold text-[var(--text-main)] mb-6">
                Direct Contact
              </h3>

              <div className="space-y-6">
                {/* Email with copy button */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent)] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-[var(--text-muted)] block">
                      EMAIL
                    </span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-[14px] font-medium text-[var(--text-main)] hover:text-[var(--accent)] transition-colors"
                      >
                        {contact.email}
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="p-1 rounded text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-secondary)] transition-colors cursor-pointer"
                        aria-label="Copy email address"
                      >
                        {copiedEmail ? (
                          <Check className="w-3.5 h-3.5 text-[var(--accent)]" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent)] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-[var(--text-muted)] block">
                      LOCATION
                    </span>
                    <span className="text-[14px] font-medium text-[var(--text-main)] block mt-0.5">
                      {contact.location}
                    </span>
                    <span className="text-[11px] text-[var(--text-secondary)]">
                      Available for clients & brands globally
                    </span>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent)] shrink-0 mt-0.5">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-[var(--text-muted)] block">
                      AVAILABILITY
                    </span>
                    <span className="text-[14px] font-medium text-[var(--text-main)] block mt-0.5">
                      Accepting New Projects
                    </span>
                    <span className="text-[11px] text-[var(--text-secondary)]">
                      Open for full-time contracts, stores & retainers
                    </span>
                  </div>
                </div>

                {/* Response time */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent)] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-[var(--text-muted)] block">
                      RESPONSE TIME
                    </span>
                    <span className="text-[14px] font-medium text-[var(--text-main)] block mt-0.5">
                      Within 24–48 hours
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Note on fictional demo content */}
            <div className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[11px] text-[var(--text-secondary)] leading-normal">
              <span className="font-semibold text-[var(--text-main)]">Quick Customization:</span> To link your real email address or phone number, simply update <code className="font-mono bg-[var(--bg-secondary)] px-1 py-0.5 rounded text-[var(--accent)]">src/data/siteConfig.ts</code>.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
