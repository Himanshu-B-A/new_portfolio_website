import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import { experience, personalInfo } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

const Experience = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.4]);

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section ref={sectionRef} id="experience" className="relative border-t border-white/5 bg-[#0a0a0a] py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-brand-accent/5 blur-3xl" />

      <motion.div
        ref={ref}
        style={{ y, opacity }}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants}>
          <SectionHeading eyebrow="Career">
            Work <span className="text-[#e50914]">experience</span>
          </SectionHeading>
          <p className="section-subtitle mb-10 md:mb-12">
            Roles and impact — responsive grid, two columns on large screens.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10"
        >
          {experience.map((exp) => (
            <motion.article
              key={exp.id}
              variants={itemVariants}
              className="flex h-full flex-col rounded-xl border border-gray-800 bg-brand-gray/35 p-6 shadow-lg transition-all duration-300 hover:border-brand-accent/50 md:p-7"
            >
              <div className="mb-4 shrink-0">
                <div className="mb-2 flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold leading-tight text-white">{exp.title}</h3>
                  <div className="shrink-0 rounded-lg bg-brand-accent/20 p-2">
                    <FiBriefcase className="text-brand-accent" size={20} />
                  </div>
                </div>
                <p className="mb-2 text-lg font-semibold text-brand-accent">{exp.company}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <FiCalendar size={14} />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiMapPin size={14} />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="mb-4 shrink-0 text-sm leading-relaxed text-gray-300">{exp.description}</p>

              <div className="mb-4 flex-1">
                <h4 className="mb-2 text-sm font-semibold text-white">Key achievements</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="mt-0.5 shrink-0 text-brand-accent">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 border-t border-gray-700 pt-4">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-gray-700 bg-black/50 px-3 py-1 text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-14 px-4 text-center">
          <p className="mb-6 text-gray-400">Want the full timeline?</p>
          <motion.a
            href={personalInfo.resumeUrl}
            download
            className="btn-primary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Full Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
