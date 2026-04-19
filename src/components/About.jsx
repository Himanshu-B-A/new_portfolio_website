import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';
import { about, personalInfo } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
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
    <section ref={sectionRef} id="about" className="border-t border-white/5 bg-black py-24 md:py-32">
      <motion.div
        ref={ref}
        style={{ scale, opacity }}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="mb-14 md:mb-16">
          <SectionHeading eyebrow="About">
            About <span className="text-[#e50914]">me</span>
          </SectionHeading>
          <p className="section-subtitle !mb-0">Get to know me better</p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mx-auto max-w-3xl space-y-6 text-center md:text-left"
        >
          <h3 className="mb-2 text-3xl font-bold text-white md:text-4xl">{personalInfo.role}</h3>

          <div className="space-y-5">
            {about.description.map((paragraph, i) => (
              <p key={i} className="text-lg leading-relaxed text-gray-300">
                {paragraph}
              </p>
            ))}
          </div>

          <motion.a
            href={`mailto:${personalInfo.email}`}
            className="btn-primary mt-6 inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let&apos;s Connect
          </motion.a>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="mt-20 grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8"
        >
          {about.stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="rounded-xl border border-gray-700 bg-brand-gray/50 p-6 text-center transition-all hover:border-brand-accent/50 hover:shadow-[0_10px_30px_rgba(229,9,20,0.15)]"
              whileHover={{ y: -4 }}
            >
              <h4 className="mb-2 text-4xl font-bold gradient-text-accent md:text-5xl">{stat.value}</h4>
              <p className="font-medium text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
