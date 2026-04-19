/**
 * EmailJS — matches vanilla `emailjs.send(service, template, templateParams)` setup.
 * Override with VITE_EMAILJS_* in `.env` if you change dashboard IDs.
 *
 * Gmail "Invalid grant": Email Services → Gmail → Reconnect.
 */
export const EMAILJS_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? 'CTftypSlf3y22r_uC';
export const EMAILJS_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID ?? 'service_epu7eot';
export const EMAILJS_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? 'template_h7nvxs3';
/** Passed as templateParams.to_email — must match template "To" in EmailJS if used there */
export const EMAILJS_TO_EMAIL =
  import.meta.env.VITE_EMAILJS_TO_EMAIL ?? '1DS23IS407@dsce.edu.in';
