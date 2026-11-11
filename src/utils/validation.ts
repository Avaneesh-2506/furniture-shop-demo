import { ContactFormData, FormErrors } from '../types';

export const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const PHONE_REGEX = /^(\+?\d{1,4}[-.\s]?)?(\(?\d{2,5}\)?[-.\s]?)?\d{3,5}[-.\s]?\d{3,5}$/;

export function validateContactForm(data: ContactFormData): FormErrors {
  const errors: FormErrors = {};

  // Honeypot check - if filled, spam detected silently or rejected
  if (data.honeypot.trim() !== '') {
    errors.honeypot = 'Spam detected';
    return errors;
  }

  // Name validation
  if (!data.from_name || data.from_name.trim().length < 2) {
    errors.from_name = 'Please enter your name (at least 2 characters).';
  }

  // Email validation
  if (!data.from_email || !data.from_email.trim()) {
    errors.from_email = 'Please provide an email address.';
  } else if (!EMAIL_REGEX.test(data.from_email.trim())) {
    errors.from_email = 'Please enter a valid email address (e.g. name@domain.com).';
  }

  // Phone validation
  if (!data.phone || !data.phone.trim()) {
    errors.phone = 'Please provide a contact phone number.';
  } else if (!PHONE_REGEX.test(data.phone.trim().replace(/\s+/g, ''))) {
    errors.phone = 'Please enter a valid phone number (at least 7 digits).';
  }

  // Subject validation
  if (!data.subject || !data.subject.trim()) {
    errors.subject = 'Please select or enter an inquiry subject.';
  }

  // Message validation
  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Please provide a detailed message (at least 10 characters).';
  }

  return errors;
}

