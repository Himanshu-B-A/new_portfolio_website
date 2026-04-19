import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi';
import { personalInfo, socialLinks } from '../data/portfolioData';
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_TO_EMAIL,
} from '../config/emailjs';
import SectionHeading from './SectionHeading';

const Contact = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const [formError, setFormError] = useState('');
  const [isGmailReconnectError, setIsGmailReconnectError] = useState(false);

  useEffect(() => {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (formStatus) setFormStatus(null);
    if (formError) setFormError('');
    setIsGmailReconnectError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    setSubmitting(true);
    setFormStatus(null);
    setFormError('');
    setIsGmailReconnectError(false);

    // Same keys as your HTML EmailJS snippet: name, email, subject, message, time, to_email
    const templateParams = {
      name,
      email,
      subject,
      message,
      time: new Date().toLocaleString(),
      to_email: EMAILJS_TO_EMAIL,
      from_name: name,
      title: subject,
    };

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setFormStatus('error');
      const raw = (err && (err.text || err.message)) || String(err || '');
      const gmailBroken = /invalid grant|Gmail_API|reconnect/i.test(raw);
      setIsGmailReconnectError(gmailBroken);
      if (gmailBroken) {
        setFormError(
          'The site could not deliver this message automatically (EmailJS ↔ Gmail needs reconnecting in your dashboard).'
        );
      } else {
        setFormError(raw || 'Could not send. Use “Open in email app” below or try again later.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: personalInfo.phone,
      link: `tel:${personalInfo.phoneTel}`,
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: personalInfo.location,
      link: null,
    },
  ];

  const contactSocialLinks = [
    {
      icon: FiGithub,
      label: 'GitHub',
      link: socialLinks.github,
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      link: socialLinks.linkedin,
    },
  ];

  return (
    <section ref={sectionRef} id="contact" className="relative overflow-hidden border-t border-white/5 bg-[#0a0a0a] py-24 md:py-32">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl"></div>

      <motion.div
        ref={ref}
        style={{ y, scale }}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="mb-14 md:mb-16">
          <SectionHeading eyebrow="Contact">
            Get in <span className="text-[#e50914]">touch</span>
          </SectionHeading>
          <p className="section-subtitle !mb-0">Let's build something amazing together</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Let's talk about everything!
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Have a project in mind or just want to say hi? Feel free to reach out.
                I'm always open to discussing new opportunities, creative ideas, or
                collaborations.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-brand-gray/30 rounded-xl border border-gray-800 hover:border-brand-accent/50 transition-all duration-300"
                >
                  <div className="p-3 bg-brand-accent/20 rounded-lg">
                    <info.icon className="text-brand-accent" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-white font-medium hover:text-brand-accent transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-400 mb-4">Follow me on social media</p>
              <div className="flex gap-4">
                {contactSocialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-brand-gray/30 rounded-lg border border-gray-800 hover:border-brand-accent hover:bg-brand-accent/10 transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="text-gray-400 hover:text-brand-accent transition-colors" size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: opens your mail client — nothing stored on this site */}
          <motion.div variants={itemVariants}>
            <form
              onSubmit={handleSubmit}
              className="bg-brand-gray/30 rounded-2xl p-8 border border-gray-800"
              autoComplete="off"
            >
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Submit tries EmailJS first. If that fails, use <strong className="text-neutral-400">Open in email app</strong>{' '}
                — same draft, sent from your own mail client. Nothing is stored on this server.
              </p>

              {formStatus === 'success' && (
                <p
                  className="mb-6 rounded-lg border border-green-800/80 bg-green-950/40 px-4 py-3 text-sm text-green-200"
                  role="status"
                >
                  Message sent successfully. I&apos;ll get back to you soon.
                </p>
              )}
              {formStatus === 'error' && (
                <div
                  className="mb-6 space-y-4 rounded-lg border border-red-900/60 bg-red-950/30 px-4 py-4 text-sm text-neutral-200"
                  role="alert"
                >
                  <p className="text-red-100/95">{formError || 'Could not send.'}</p>
                  <a
                    href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Message from portfolio')}&body=${encodeURIComponent(
                      `${formData.message || ''}\n\n---\nFrom: ${formData.name || '(name)'}\nReply-To: ${formData.email || '(your email)'}`
                    )}`}
                    className="inline-flex w-full items-center justify-center rounded-lg bg-[#e50914] px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#f40612] sm:w-auto"
                  >
                    Open in email app
                  </a>
                  <p className="text-xs text-neutral-500">
                    Sends to <span className="text-neutral-400">{personalInfo.email}</span> with your message
                    filled in — you only need to press Send in Gmail / Outlook.
                  </p>
                  {isGmailReconnectError && (
                    <details className="rounded border border-white/10 bg-black/40 px-3 py-2 text-xs text-neutral-500">
                      <summary className="cursor-pointer select-none text-neutral-400 hover:text-neutral-300">
                        Site owner: fix EmailJS Gmail (invalid grant)
                      </summary>
                      <p className="mt-2 leading-relaxed">
                        In{' '}
                        <a
                          href="https://dashboard.emailjs.com/admin"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-accent underline underline-offset-2"
                        >
                          EmailJS
                        </a>
                        : Email Services → Gmail → <strong>Reconnect</strong>. Or use SendGrid there instead of
                        Gmail.
                      </p>
                    </details>
                  )}
                </div>
              )}

              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-brand-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-brand-accent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-brand-accent transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-brand-accent transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={submitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
                  whileHover={submitting ? {} : { scale: 1.02 }}
                  whileTap={submitting ? {} : { scale: 0.98 }}
                >
                  <FiSend size={20} />
                  {submitting ? 'Sending…' : 'Send message'}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
