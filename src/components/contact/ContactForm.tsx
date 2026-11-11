import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Send, AlertTriangle, ShieldCheck } from 'lucide-react';
import { ContactFormData, FormErrors, FormStatus } from '../../types';
import { validateContactForm } from '../../utils/validation';
import { Button } from '../ui/Button';
import { Toast } from '../ui/Toast';

const INITIAL_FORM_STATE: ContactFormData = {
  from_name: '',
  from_email: '',
  phone: '',
  subject: 'Custom Furniture Design',
  message: '',
  honeypot: '',
};

const RATE_LIMIT_SECONDS = 30;

export const ContactForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormData, boolean>>>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [toastMessage, setToastMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [cooldownTime, setCooldownTime] = useState<number>(0);

  // Sync service from URL query param if present
  useEffect(() => {
    const serviceFromUrl = searchParams.get('service');
    if (serviceFromUrl) {
      setFormData(prev => ({ ...prev, subject: serviceFromUrl }));
    }
  }, [searchParams]);

  // Cooldown countdown timer
  useEffect(() => {
    if (cooldownTime <= 0) return;

    const interval = setInterval(() => {
      setCooldownTime(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [cooldownTime]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Real-time error clearance if valid
    if (touched[name as keyof ContactFormData]) {
      const validationErrors = validateContactForm({
        ...formData,
        [name]: value,
      });
      setErrors(prev => ({
        ...prev,
        [name]: validationErrors[name as keyof ContactFormData],
      }));
    }
  };

  const handleBlur = (field: keyof ContactFormData) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const validationErrors = validateContactForm(formData);
    setErrors(prev => ({
      ...prev,
      [field]: validationErrors[field],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Rate-limiting check
    if (cooldownTime > 0) {
      setToastMessage({
        type: 'error',
        text: `Please wait ${cooldownTime} seconds before submitting another request.`,
      });
      return;
    }

    // Validate all fields
    const validationErrors = validateContactForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setTouched({
        from_name: true,
        from_email: true,
        phone: true,
        subject: true,
        message: true,
      });

      // Focus first error field
      const firstErrorField = Object.keys(validationErrors)[0];
      const element = document.getElementById(firstErrorField);
      element?.focus();
      return;
    }

    setStatus('submitting');
    setToastMessage(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

    // Prepare template params matching EmailJS variables:
    // from_name, from_email, phone, subject, message
    const templateParams = {
      from_name: formData.from_name.trim(),
      from_email: formData.from_email.trim(),
      phone: formData.phone.trim(),
      subject: formData.subject,
      message: formData.message.trim(),
    };

    try {
      if (
        !serviceId ||
        !templateId ||
        !publicKey ||
        serviceId === 'service_woodcraft' ||
        publicKey === 'sample_public_key'
      ) {
        // Graceful mock simulation for local dev or when keys aren't yet populated
        await new Promise(resolve => setTimeout(resolve, 900));
      } else {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
      }

      setStatus('success');
      setFormData(INITIAL_FORM_STATE);
      setTouched({});
      setErrors({});
      setCooldownTime(RATE_LIMIT_SECONDS);
      setToastMessage({
        type: 'success',
        text: 'Thank you! Your custom consultation inquiry has been received. Our master designer will be in touch within 24 hours.',
      });
    } catch (error) {
      console.error('EmailJS Submission Error:', error);
      setStatus('error');
      setToastMessage({
        type: 'error',
        text: 'Unable to send message right now. Please call us directly or email hello@woodcraftfurniture.com.',
      });
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-10 rounded-3xl border border-sand-dark/60 shadow-soft">
      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-oak">
          Consultation Inquiry
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-walnut mt-1">
          Tell Us About Your Project
        </h2>
        <p className="text-sm text-charcoal-light mt-2">
          Fill out the details below to receive a personalized ballpark estimate and wood sample swatch kit.
        </p>
      </div>

      {toastMessage && (
        <div className="mb-6">
          <Toast
            type={toastMessage.type}
            message={toastMessage.text}
            onClose={() => setToastMessage(null)}
          />
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Honeypot field (hidden from view and screen readers) */}
        <div className="sr-only" aria-hidden="true" style={{ display: 'none' }}>
          <label htmlFor="honeypot">Leave this blank</label>
          <input
            type="text"
            id="honeypot"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label
              htmlFor="from_name"
              className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2"
            >
              Full Name <span className="text-oak">*</span>
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              required
              value={formData.from_name}
              onChange={handleChange}
              onBlur={() => handleBlur('from_name')}
              aria-invalid={Boolean(errors.from_name)}
              aria-describedby={errors.from_name ? 'from_name-error' : undefined}
              placeholder="e.g. Katherine Miller"
              className="w-full px-4 py-3 rounded-2xl bg-cream/70 border border-sand-dark text-charcoal placeholder:text-charcoal-muted/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-walnut transition-all text-sm"
            />
            {errors.from_name && touched.from_name && (
              <p
                id="from_name-error"
                role="alert"
                className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium"
              >
                <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.from_name}</span>
              </p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label
              htmlFor="from_email"
              className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2"
            >
              Email Address <span className="text-oak">*</span>
            </label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              required
              value={formData.from_email}
              onChange={handleChange}
              onBlur={() => handleBlur('from_email')}
              aria-invalid={Boolean(errors.from_email)}
              aria-describedby={errors.from_email ? 'from_email-error' : undefined}
              placeholder="katherine@example.com"
              className="w-full px-4 py-3 rounded-2xl bg-cream/70 border border-sand-dark text-charcoal placeholder:text-charcoal-muted/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-walnut transition-all text-sm"
            />
            {errors.from_email && touched.from_email && (
              <p
                id="from_email-error"
                role="alert"
                className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium"
              >
                <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.from_email}</span>
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Phone Number */}
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2"
            >
              Phone Number <span className="text-oak">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              onBlur={() => handleBlur('phone')}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-3 rounded-2xl bg-cream/70 border border-sand-dark text-charcoal placeholder:text-charcoal-muted/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-walnut transition-all text-sm"
            />
            {errors.phone && touched.phone && (
              <p
                id="phone-error"
                role="alert"
                className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium"
              >
                <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>

          {/* Project Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2"
            >
              Inquiry Subject <span className="text-oak">*</span>
            </label>
            <select
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              onBlur={() => handleBlur('subject')}
              className="w-full px-4 py-3 rounded-2xl bg-cream/70 border border-sand-dark text-charcoal focus:bg-white focus:outline-none focus:ring-2 focus:ring-walnut transition-all text-sm"
            >
              <option value="Custom Furniture Design">Custom Furniture Design</option>
              <option value="Bespoke Home Interiors">Bespoke Home Interiors</option>
              <option value="Artisan Modular Kitchens">Artisan Modular Kitchens</option>
              <option value="Restoration & French Polishing">Restoration & French Polishing</option>
              <option value="Delivery & White-Glove Installation">Delivery & White-Glove Installation</option>
              <option value="Executive & Commercial Office Woodwork">Executive & Commercial Office Woodwork</option>
              <option value="General Studio Inquiry">General Studio Inquiry</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2"
          >
            Project Details & Dimensions <span className="text-oak">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            onBlur={() => handleBlur('message')}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
            placeholder="Tell us about the desired dimensions, preferred timber (Walnut, Oak, Cherry), timeline, and room context..."
            className="w-full px-4 py-3 rounded-2xl bg-cream/70 border border-sand-dark text-charcoal placeholder:text-charcoal-muted/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-walnut transition-all text-sm resize-y"
          />
          {errors.message && touched.message && (
            <p
              id="message-error"
              role="alert"
              className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium"
            >
              <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Form Footer & Submit */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-charcoal-muted">
            <ShieldCheck className="w-4 h-4 text-sage shrink-0" />
            <span>Strict privacy. No unsolicited outreach.</span>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            isLoading={status === 'submitting'}
            disabled={status === 'submitting' || cooldownTime > 0}
            rightIcon={<Send className="w-4 h-4" />}
            className="w-full sm:w-auto min-w-[200px]"
          >
            {cooldownTime > 0
              ? `Wait (${cooldownTime}s)`
              : status === 'submitting'
              ? 'Sending Inquiry...'
              : 'Submit Request'}
          </Button>
        </div>
      </form>
    </div>
  );
};

