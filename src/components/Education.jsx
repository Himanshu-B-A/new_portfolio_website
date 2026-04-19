import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBook, FiCalendar, FiFileText } from 'react-icons/fi';
import { education, patents } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

const Education = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

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

  return (
    <section ref={sectionRef} id="education" className="border-t border-white/5 bg-black py-24 md:py-32">
      <motion.div
        ref={ref}
        style={{ scale, opacity }}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="mb-14 md:mb-16">
          <SectionHeading eyebrow="Background">
            Education & <span className="text-[#e50914]">patents</span>
          </SectionHeading>
          <p className="section-subtitle !mb-0">Academic background and intellectual property</p>
        </motion.div>

        {/* Education Cards */}
        <motion.div variants={containerVariants} className="space-y-6 lg:space-y-8 mb-16 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className="bg-brand-gray/30 rounded-xl p-6 md:p-8 border border-gray-800 hover:border-brand-accent/50 transition-all duration-300"
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(229, 9, 20, 0.2)' }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                {/* Left: Degree Info */}
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="p-2 bg-brand-accent/20 rounded-lg mt-1">
                      <FiBook className="text-brand-accent" size={20} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-xl text-brand-accent font-semibold">
                        {edu.field}
                      </p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-300 mb-2">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <FiCalendar size={14} />
                      {edu.period}
                    </span>
                    <span>📍 {edu.location}</span>
                  </div>
                </div>

                {/* Right: Grade */}
                <div className="md:text-right">
                  <div className="inline-block px-4 py-2 bg-brand-accent/20 rounded-lg border border-brand-accent/30">
                    <p className="text-brand-accent font-bold text-lg">{edu.grade}</p>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="mt-6 pt-6 border-t border-gray-700">
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className="text-brand-accent mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Patents */}
        <motion.div variants={itemVariants}>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-2">
              Patents
            </h3>
            <p className="text-gray-400">Published applications</p>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 gap-4 lg:gap-6 max-w-5xl mx-auto"
          >
            {patents.map((patent, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-brand-gray/30 rounded-xl p-6 md:p-8 border border-gray-800 hover:border-brand-accent/50 transition-all duration-300 text-left"
                whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(229, 9, 20, 0.2)' }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-accent/20 rounded-lg shrink-0">
                    <FiFileText className="text-brand-accent" size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xl font-bold text-white mb-2">
                      {patent.title}
                    </h4>
                    <p className="text-brand-accent text-sm font-semibold mb-1">
                      {patent.number}
                    </p>
                    <p className="text-gray-400 text-sm mb-3">
                      {patent.status} · {patent.date}
                    </p>
                    <ul className="space-y-2">
                      {patent.summary.map((line, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                          <span className="text-brand-accent mt-1">•</span>
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;
