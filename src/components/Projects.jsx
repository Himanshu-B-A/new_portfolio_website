import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';
import { projects } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

const Projects = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5]);

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative border-t border-white/5 bg-black py-24 md:py-32"
    >
      <motion.div
        ref={ref}
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={cardVariants}>
          <SectionHeading eyebrow="Portfolio">
            Featured <span className="text-[#e50914]">projects</span>
          </SectionHeading>
          <p className="section-subtitle mb-10 md:mb-12">
            Selected work in a responsive grid — one column on small screens, up to three on large.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative flex min-h-0 min-w-0 w-full flex-col overflow-hidden rounded-xl border border-gray-800 bg-brand-gray/40 shadow-lg transition-all duration-300 hover:border-brand-accent/60 hover:shadow-red-900/20"
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            >
              <button
                type="button"
                className="flex w-full flex-1 flex-col text-left"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 w-full shrink-0 overflow-hidden bg-black">
                  <img
                    src={project.image}
                    alt=""
                    className="absolute inset-0 h-full w-full max-w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
                  <div className="absolute left-4 top-4 rounded-full bg-brand-accent px-3 py-1 text-xs font-semibold text-white">
                    {project.category}
                  </div>
                </div>

                <div className="relative z-[1] flex flex-1 flex-col p-5 md:p-6">
                  <h3 className="mb-2 line-clamp-2 text-lg font-bold text-white transition-colors group-hover:text-brand-accent md:text-xl">
                    {project.title}
                  </h3>
                  <p className="mb-4 line-clamp-3 flex-1 text-sm text-gray-400">{project.description}</p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-gray-700 bg-black/50 px-2 py-1 text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="rounded bg-black/50 px-2 py-1 text-xs text-brand-accent">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </button>

              <div
                className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-gray-800 px-5 pb-5 pt-0 md:px-6 md:pb-6"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  className="text-sm font-semibold text-brand-accent hover:underline"
                  onClick={() => setSelectedProject(project)}
                >
                  View Details
                </button>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white"
                  >
                    <FiGithub size={16} />
                    View Source Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-brand-accent"
                  >
                    <FiExternalLink size={16} />
                    Visit Website
                  </a>
                )}
              </div>

              <div className="pointer-events-none absolute inset-0 bg-brand-accent/0 transition-colors group-hover:bg-brand-accent/5" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-gray-800 bg-brand-darkGray"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 overflow-hidden md:h-96">
                <img
                  src={selectedProject.image}
                  alt=""
                  className="absolute inset-0 h-full w-full max-w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-darkGray via-brand-darkGray/50 to-transparent" />
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-4 top-4 rounded-full bg-black/50 p-2 hover:bg-black"
                >
                  <FiX size={24} />
                </button>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="mb-2 inline-block rounded-full bg-brand-accent px-3 py-1 text-xs font-semibold">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-3xl font-bold text-white md:text-4xl">{selectedProject.title}</h3>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <p className="mb-6 text-lg leading-relaxed text-gray-300">{selectedProject.fullDescription}</p>

                <div className="mb-6">
                  <h4 className="mb-3 text-xl font-bold text-white">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-gray-700 bg-black/50 px-4 py-2 text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center gap-2"
                    >
                      <FiGithub size={20} />
                      View Source Code
                    </a>
                  )}
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center gap-2"
                    >
                      <FiExternalLink size={20} />
                      Visit Website
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
