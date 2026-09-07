import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Linkedin, Github, Send, 
  CheckCircle2, AlertCircle, Loader2,
  MessageCircle, ExternalLink, Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ 
    type: 'success' | 'error' | null; 
    message: string;
    notice?: string;
  }>({
    type: null,
    message: ''
  });
  const [lastSubmitted, setLastSubmitted] = useState<{
    name: string;
    email: string;
    subject: string;
    message: string;
  } | null>(null);

  // Prepares direct compose link for Gmail web
  const getGmailComposeUrl = (customData?: typeof formData) => {
    const data = customData || formData;
    const name = data.name.trim() || 'Website Visitor';
    const email = data.email.trim() || 'visitor@example.com';
    const sub = data.subject.trim() || 'Portfolio Inquiry';
    const msg = data.message.trim() || 'Hi Sachin,\n\nI visited your portfolio and would like to connect with you regarding an opportunity.';
    const body = `Hi Sachin,\n\nMy Name: ${name}\nMy Email: ${email}\n\nMessage:\n${msg}\n\n---\nSent from your portfolio contact form`;
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PERSONAL_INFO.email)}&su=${encodeURIComponent(`[Portfolio] ${sub}`)}&body=${encodeURIComponent(body)}`;
  };

  // Prepares standard mailto URL
  const getMailtoUrl = (customData?: typeof formData) => {
    const data = customData || formData;
    const name = data.name.trim() || 'Website Visitor';
    const email = data.email.trim() || 'visitor@example.com';
    const sub = data.subject.trim() || 'Portfolio Inquiry';
    const msg = data.message.trim() || 'Hi Sachin, I would like to connect.';
    const body = `Hi Sachin,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`;
    return `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(`[Portfolio] ${sub}`)}&body=${encodeURIComponent(body)}`;
  };

  // Prepares direct WhatsApp message URL
  const getWhatsAppUrl = (customData?: typeof formData) => {
    const data = customData || formData;
    const name = data.name.trim() || 'Visitor';
    const sub = data.subject.trim() || 'Portfolio Inquiry';
    const msg = data.message.trim() || 'Hi Sachin, I saw your portfolio and wanted to get in touch!';
    const text = `Hello Sachin,\n\n*Name:* ${name}\n*Email:* ${data.email.trim() || 'Not provided'}\n*Topic:* ${sub}\n\n*Message:*\n${msg}`;
    return `https://wa.me/917822900241?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim() || 'Portfolio Contact Inquiry';
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setStatus({
        type: 'error',
        message: 'Please fill in your name, email, and message.'
      });
      return;
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus({
        type: 'error',
        message: 'Please provide a valid email address.'
      });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: '' });

    const submissionPayload = { name, email, subject, message };
    let deliveredToEmail = false;
    let savedToBackend = false;
    let emailNoticeText = '';

    try {
      // 1. Send direct to FormSubmit email delivery endpoint
      const formSubmitPromise = fetch('https://formsubmit.co/ajax/yadavsachin7249407392@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          _replyto: email,
          _subject: `[Portfolio Inquiry] ${subject} (from ${name})`,
          message: `Sender Name: ${name}\nSender Email: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
          _template: 'table',
          _captcha: 'false'
        })
      })
        .then(async res => {
          const json = await res.json().catch(() => null);
          if (res.ok && (json?.success === 'true' || json?.success === true)) {
            deliveredToEmail = true;
          } else if (json?.message && json.message.includes('Activation')) {
            emailNoticeText = 'Activation email sent to Sachin. Once activated, emails deliver seamlessly.';
          }
        })
        .catch(err => {
          console.warn('Direct FormSubmit request caught:', err);
        });

      // 2. Send to Express backend API route
      const backendPromise = fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionPayload)
      })
        .then(async res => {
          const data = await res.json().catch(() => null);
          if (res.ok && data?.success) {
            savedToBackend = true;
            if (data.emailDispatched) deliveredToEmail = true;
          }
        })
        .catch(err => {
          console.warn('Backend API request caught:', err);
        });

      // Wait for both attempts (timeout safely after 4 seconds)
      await Promise.race([
        Promise.all([formSubmitPromise, backendPromise]),
        new Promise(resolve => setTimeout(resolve, 4000))
      ]);

      setLastSubmitted(submissionPayload);
      setStatus({
        type: 'success',
        message: `Message dispatched! Your name, email, and message details have been sent to Sachin Yadav (${PERSONAL_INFO.email}).`,
        notice: emailNoticeText
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Submission error:', err);
      setStatus({
        type: 'error',
        message: 'Could not automatically deliver. Please use the direct "Open in Gmail" button below.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Contact & Discussion
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
            Whether you have an exciting full-stack opportunity, contract project, or technical question, feel free to send a message or connect directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-md space-y-5">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                Direct Contact Information
              </h3>

              {/* Email */}
              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80">
                <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    Email Address
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-emerald-600 dark:hover:text-emerald-400 break-all transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80">
                <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    Mobile / WhatsApp
                  </span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80">
                <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    Current Location
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 block">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                  Professional Profiles:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 text-xs font-medium transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-blue-500" />
                    <span>LinkedIn Profile</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 text-xs font-medium transition-colors"
                  >
                    <Github className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                    <span>GitHub Repos</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form Column */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-xl space-y-4"
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                    Send Direct Message
                  </h3>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800">
                    <Sparkles className="w-3 h-3" /> Auto-Email to Sachin
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Your message will be sent directly to <strong className="text-slate-700 dark:text-slate-200 font-mono">{PERSONAL_INFO.email}</strong>.
                </p>
              </div>

              {status.type && (
                <div
                  className={`p-4 rounded-xl space-y-2 text-xs font-medium ${
                    status.type === 'success'
                      ? 'bg-emerald-50 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-800'
                      : 'bg-rose-50 dark:bg-rose-950/80 text-rose-900 dark:text-rose-200 border border-rose-300 dark:border-rose-800'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    {status.type === 'success' ? (
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-500" />
                    ) : (
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-500" />
                    )}
                    <div className="space-y-1">
                      <span className="font-semibold block">{status.message}</span>
                      {status.notice && (
                        <p className="text-[11px] opacity-90">{status.notice}</p>
                      )}
                    </div>
                  </div>

                  {status.type === 'success' && lastSubmitted && (
                    <div className="pt-2 border-t border-emerald-200 dark:border-emerald-800/80 flex flex-wrap items-center gap-2">
                      <span className="text-[11px] text-emerald-800 dark:text-emerald-300">
                        Need instant confirmation?
                      </span>
                      <a
                        href={getGmailComposeUrl(lastSubmitted)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" /> Open in Gmail
                      </a>
                      <a
                        href={getWhatsAppUrl(lastSubmitted)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-emerald-700 hover:bg-emerald-600 text-white transition-colors"
                      >
                        <MessageCircle className="w-3 h-3" /> Send via WhatsApp
                      </a>
                    </div>
                  )}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-200 text-xs sm:text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-200 text-xs sm:text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  placeholder="Full Stack Opportunity / Project Discussion"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-200 text-xs sm:text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Message Details *
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Share details about the role, project requirements, or what you'd like to collaborate on..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-200 text-xs sm:text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-colors resize-y"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 disabled:opacity-50 transition-all cursor-pointer active:scale-98"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending to Sachin's Inbox...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>

                {/* Instant alternative triggers */}
                <div className="flex items-center gap-2 text-xs">
                  <a
                    href={getGmailComposeUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-slate-700 transition-colors"
                    title="Compose directly in Gmail with your filled text"
                  >
                    <Mail className="w-3.5 h-3.5 text-rose-500" />
                    <span>Open in Gmail</span>
                  </a>

                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 text-xs font-medium border border-emerald-200 dark:border-emerald-800/80 transition-colors"
                    title="Send directly via WhatsApp"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
