import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FiCode,
  FiDatabase,
  FiServer,
  FiCpu,
  FiTool,
  FiTrendingUp,
  FiEye,
  FiMessageSquare,
  FiSmile,
  FiGitBranch,
  FiBarChart2,
} from 'react-icons/fi';
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiDocker,
  SiGit,
  SiExpress,
  SiStreamlit,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiGithub,
  SiJenkins,
  SiJira,
  SiLinux,
  SiSolidity,
  SiIpfs,
  SiWeb3Dotjs,
  SiHtml5,
} from 'react-icons/si';
import { skills as skillsData } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

const Skills = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Parallax and scale effects
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const skillCategories = [
    {
      category: 'Languages',
      icon: FiCode,
      skills: [
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'JavaScript / TypeScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'SQL', icon: FiDatabase, color: '#4A90E2' },
        { name: 'HTML / CSS', icon: SiHtml5, color: '#E34F26' },
      ],
    },
    {
      category: 'Frameworks & Libraries',
      icon: FiServer,
      skills: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Express', icon: SiExpress, color: '#888888' },
        { name: 'Streamlit', icon: SiStreamlit, color: '#FF4B4B' },
        { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F89939' },
        { name: 'Pandas', icon: SiPandas, color: '#130754' },
        { name: 'NumPy', icon: SiNumpy, color: '#4DABCF' },
        { name: 'Matplotlib', icon: FiBarChart2, color: '#11557C' },
      ],
    },
    {
      category: 'AI / ML',
      icon: FiCpu,
      skills: [
        { name: 'CNNs', icon: FiCpu, color: '#E50914' },
        { name: 'Gradient Boosting', icon: FiTrendingUp, color: '#22C55E' },
        { name: 'Sentiment Analysis', icon: FiSmile, color: '#FBBF24' },
        { name: 'Computer Vision', icon: FiEye, color: '#38BDF8' },
        { name: 'NLP', icon: FiMessageSquare, color: '#A78BFA' },
      ],
    },
    {
      category: 'DevOps & Tools',
      icon: FiTool,
      skills: [
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
        { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'Jira', icon: SiJira, color: '#0052CC' },
        { name: 'Linux', icon: SiLinux, color: '#FCC624' },
      ],
    },
    {
      category: 'Blockchain',
      icon: FiGitBranch,
      skills: [
        { name: 'Web3.js', icon: SiWeb3Dotjs, color: '#F16822' },
        { name: 'IPFS', icon: SiIpfs, color: '#65C2CB' },
        { name: 'Smart Contracts', icon: SiSolidity, color: '#363636' },
      ],
    },
  ];

  return (
    <section ref={sectionRef} id="skills" className="relative overflow-hidden border-t border-white/5 bg-[#0a0a0a] py-24 md:py-32">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl"></div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div style={{ scale, opacity, rotateX, perspective: 1000 }}>
        <motion.div variants={itemVariants} className="mb-14 md:mb-16">
          <SectionHeading eyebrow="Capabilities">
            Technical <span className="text-[#e50914]">skills</span>
          </SectionHeading>
          <p className="section-subtitle !mb-0">Technologies I work with</p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="bg-brand-gray/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-brand-accent/50 transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                y: -10, 
                boxShadow: '0 20px 40px rgba(229, 9, 20, 0.2)' 
              }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-brand-accent/20 rounded-lg">
                  <category.icon className="text-brand-accent" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">{category.category}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center gap-3 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                  >
                    <div className="p-2 bg-black/50 rounded-lg group-hover:bg-black transition-colors">
                      <skill.icon 
                        className="transition-colors" 
                        size={20} 
                        style={{ color: skill.color }}
                      />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Other Skills & Interests
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skillsData.additional.map((skill, index) => (
              <motion.span
                key={skill}
                className="px-4 py-2 bg-brand-gray/50 rounded-full text-gray-300 border border-gray-700 hover:border-brand-accent hover:text-white transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(229, 9, 20, 0.1)' }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
