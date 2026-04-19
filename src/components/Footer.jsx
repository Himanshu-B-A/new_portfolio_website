import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo, socialLinks as portfolioSocial } from '../data/portfolioData';

/**
 * Minimal footer — rhythm similar to jobs.netflix.com (link row + legal line).
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, link: portfolioSocial.github, label: 'GitHub' },
    { icon: FiLinkedin, link: portfolioSocial.linkedin, label: 'LinkedIn' },
    { icon: FiMail, link: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-[90rem] px-4 py-14 sm:px-6 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <div className="mb-4 flex items-center justify-center gap-2 md:justify-start">
              <span className="flex h-8 w-8 items-center justify-center rounded bg-[#e50914] font-display text-lg font-black text-white">
                H
              </span>
              <span className="font-display text-lg font-semibold text-white">Himanshu B A</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-neutral-500">
              Information Science Engineer — AI/ML, full-stack, and data-driven products.
            </p>
            <div className="mt-6 flex justify-center gap-6 md:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  {...(social.link.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="text-neutral-500 transition-colors hover:text-[#e50914]"
                  aria-label={social.label}
                >
                  <social.icon size={20} strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm md:justify-end" aria-label="Footer">
            {quickLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-neutral-500 transition-colors hover:text-white">
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-neutral-600 md:text-left">
          <p>
            © {currentYear} Himanshu B A. Portfolio inspired by the layout rhythm of{' '}
            <a
              href="https://jobs.netflix.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-neutral-700 underline-offset-2 hover:text-neutral-400"
            >
              Netflix Jobs
            </a>
            — not affiliated with Netflix. Built with React.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
