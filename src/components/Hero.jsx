import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiChevronDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo, socialLinks, heroStripImages, heroStripTitles } from '../data/portfolioData';

/**
 * Netflix Jobs–inspired hero: full-viewport black, oversized split type, image strips, uppercase CTA, scroll cue.
 * (Does not use Netflix trademarks, logo, or proprietary assets.)
 */
const Hero = () => {
  const { scrollY } = useScroll();
  const [vh, setVh] = useState(800);

  useEffect(() => {
    const update = () => setVh(window.innerHeight);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const y = useTransform(scrollY, [0, vh], [0, 120]);
  const opacity = useTransform(scrollY, [0, vh * 0.5], [1, 0.35]);

  const line1 = 'Join our';
  const accent = 'dream';
  const line3 = 'team';

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-black"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_-10%,rgba(229,9,20,0.14),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black via-black/80 to-transparent"
        aria-hidden
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto flex w-full max-w-[90rem] flex-1 flex-col justify-center px-5 pb-28 pt-28 text-center sm:px-8 md:px-12 md:pb-32 md:pt-32"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-[10px] font-semibold uppercase tracking-[0.4em] text-neutral-500 md:mb-12 md:text-xs"
        >
          Ready to jump in the spotlight?
        </motion.p>

        <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 md:gap-4">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-display text-[clamp(2.75rem,11vw,7rem)] font-bold leading-[0.95] tracking-tight text-white"
          >
            {line1}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="flex flex-wrap items-center justify-center gap-3 md:gap-5"
          >
            <span className="font-display text-[clamp(2.75rem,11vw,7rem)] font-bold leading-[0.95] tracking-tight text-[#e50914]">
              {accent}
            </span>
            {heroStripImages.map((src, i) => (
              <motion.div
                key={`${src}-${i}`}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: 0.2 + i * 0.06 }}
                className="hidden overflow-hidden rounded-md shadow-lg shadow-black/50 sm:block sm:h-[clamp(3rem,10vw,5.5rem)] sm:w-[clamp(4.5rem,14vw,8rem)] md:rounded-lg"
              >
                <img
                  src={src}
                  alt={heroStripTitles[i] ?? 'Featured project'}
                  title={heroStripTitles[i]}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="font-display text-[clamp(2.75rem,11vw,7rem)] font-bold leading-[0.95] tracking-tight text-white"
          >
            {line3}
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mx-auto mt-12 max-w-2xl text-pretty text-base leading-relaxed text-neutral-400 md:mt-14 md:text-lg"
        >
          We are making steady progress on our mission to ship intelligent systems and polished interfaces — from
          telemetry dashboards to production ML.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.42, duration: 0.6 }}
          className="mt-4 text-sm font-medium text-neutral-500 md:text-base"
        >
          {personalInfo.name} · {personalInfo.role}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.48, duration: 0.5 }}
          className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8 md:mt-14"
        >
          <a href="#projects" className="btn-cta min-h-[52px] w-full min-w-[220px] sm:w-auto">
            View my work
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400 transition-colors hover:text-white"
          >
            Connect on LinkedIn
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-10 flex items-center justify-center gap-10 border-t border-white/10 pt-10"
        >
          {[
            { icon: FiGithub, href: socialLinks.github, label: 'GitHub' },
            { icon: FiLinkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
            { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="text-neutral-500 transition-colors hover:text-[#e50914]"
              aria-label={label}
            >
              <Icon size={22} strokeWidth={1.75} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-neutral-500 transition-colors hover:text-neutral-300"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.35em]">Scroll to explore</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="text-neutral-400"
          aria-hidden
        >
          <FiChevronDown size={22} strokeWidth={2} />
        </motion.span>
      </motion.a>
    </section>
  );
};

export default Hero;
