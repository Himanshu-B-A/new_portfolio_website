// Portfolio Data Configuration

const base = import.meta.env.BASE_URL || '/';

export const personalInfo = {
  name: 'Himanshu B A',
  role: 'Information Science Engineer',
  tagline: 'Passionate about AI/ML & Full-Stack Development',
  bio: `Crafting intelligent solutions and seamless digital experiences.
From machine learning models to responsive web applications,
I bring ideas to life with code.`,
  email: 'himubullapur@gmail.com',
  phone: '+91 81234 50965',
  phoneTel: '+918123450965',
  location: 'Bangalore, India',
  /** Served from /public/resume.pdf (copied from project /resume folder) */
  resumeUrl: `${base}resume.pdf`,
};

export const socialLinks = {
  github: 'https://github.com/Himanshu-B-A',
  linkedin: 'https://linkedin.com/in/himanshu-ba',
};

export const about = {
  description: [
    `I'm a developer focused on Artificial Intelligence, Machine Learning, and full-stack engineering—from ISRO payload telemetry to production web apps.`,
    `I build reliable pipelines and interfaces: real-time dashboards, computer vision models, gradient-boosted forecasting, and secure institutional portals.`,
    `I care about measurable impact (accuracy, triage time, cost) and clear communication with teammates and stakeholders.`,
  ],
  stats: [
    { label: 'Experience', value: '6 months' },
    { label: 'Projects Shipped', value: '8+' },
    { label: 'Tech Stack Areas', value: '25+' },
    { label: 'Patents', value: '1' },
  ],
};

export const skills = {
  categories: [
    {
      category: 'Languages',
      skills: ['Python', 'JavaScript / TypeScript', 'SQL', 'HTML', 'CSS'],
    },
    {
      category: 'Frameworks & Libraries',
      skills: ['React', 'Node.js', 'Express', 'Streamlit', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    },
    {
      category: 'AI / ML',
      skills: ['CNNs', 'Gradient Boosting', 'Sentiment Analysis', 'Computer Vision', 'NLP'],
    },
    {
      category: 'DevOps & Tools',
      skills: ['Git', 'GitHub', 'Jenkins', 'Docker', 'Jira', 'Linux'],
    },
    {
      category: 'Blockchain',
      skills: ['Web3.js', 'IPFS', 'Smart Contracts (Solidity)'],
    },
  ],
  additional: [
    'REST APIs',
    'Real-time telemetry',
    'EDA & dashboards',
    'IoT data pipelines',
    'Merkle batching & on-chain cost optimization',
  ],
};

export const projects = [
  {
    id: 1,
    title: 'AI-Powered Reading Assistant for Dyslexic Children',
    category: 'AI · Accessibility',
    description:
      'Eye-tracking and speech recognition for real-time reading support, parent analytics, and consent-based highlighting.',
    fullDescription:
      'Final-year project integrating eye-tracking and speech recognition (Whisper) to detect reading struggles in real time. Consent-based highlighting, parent dashboard for analytics and progress. Stack: React, FastAPI, PostgreSQL, OpenCV, Whisper.',
    image:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&fit=crop&q=80',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'OpenCV', 'Whisper'],
    github: 'https://github.com/Himanshu-B-A',
    live: null,
    featured: true,
  },
  {
    id: 2,
    title: 'Trust in Transparency',
    category: 'Blockchain',
    description:
      'Blockchain-based evidence integrity system using Ethereum smart contracts and IPFS.',
    fullDescription:
      'Trust in Transparency: notarize digital evidence on-chain with Solidity contracts and IPFS storage. Merkle-tree batching reduces gas and operational cost while preserving integrity.',
    image:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
    tech: ['Solidity', 'IPFS', 'Web3.js'],
    github: 'https://github.com/Himanshu-B-A',
    live: null,
    featured: true,
  },
  {
    id: 3,
    title: 'Stock Price Prediction Web App',
    category: 'Machine Learning',
    description:
      'Streamlit app forecasting next-day stock prices with integrated news sentiment analysis.',
    fullDescription:
      'Streamlit application for next-day price forecasting with NewsAPI sentiment features, strong error metrics, and an interactive UI for exploration.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop',
    tech: ['Python', 'Streamlit', 'Scikit-learn', 'NewsAPI'],
    github: 'https://github.com/Himanshu-B-A',
    live: null,
    featured: true,
  },
  {
    id: 4,
    title: 'SJM Vidyapeta',
    category: 'Full-Stack Web',
    description:
      'Unified institutional portal serving 6 institutions with secure forms and REST APIs.',
    fullDescription:
      'Unified portal for six institutions with secure forms, REST APIs on Express/Node, and role-aware access. Reached about 1.5k users in Q1.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
    github: 'https://github.com/Himanshu-B-A',
    live: null,
    featured: true,
  },
  {
    id: 5,
    title: 'NISAR Telemetry Dashboard',
    category: 'Data · ISRO',
    description:
      'Real-time dashboard for satellite telemetry with anomaly detection using CNN.',
    fullDescription:
      'Real-time telemetry visualization for mission health; CNN-based anomaly detection on payload streams. Built with Python, TensorFlow, Pandas, and Matplotlib.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80',
    tech: ['Python', 'TensorFlow', 'Pandas', 'Matplotlib'],
    github: 'https://github.com/Himanshu-B-A',
    live: null,
    featured: true,
  },
  {
    id: 6,
    title: 'Smart Farming Yield Forecasting',
    category: 'Machine Learning',
    description:
      'Gradient-boosted ensemble model for agricultural yield prediction with interactive visualizations.',
    fullDescription:
      'Gradient-boosted models for crop yield forecasting with EDA on IoT and agronomic features; Jupyter-based insights and interactive charts.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=500&fit=crop',
    tech: ['Python', 'Scikit-learn', 'Jupyter', 'Pandas'],
    github: 'https://github.com/Himanshu-B-A',
    live: null,
    featured: true,
  },
  {
    id: 7,
    title: 'Helmet Detection System',
    category: 'Computer Vision',
    description:
      'AI/ML-based system for real-time helmet detection and safety compliance monitoring.',
    fullDescription:
      'Deep learning pipeline for detecting helmets in video or image streams for safety compliance; optimized for real-time inference with TensorFlow and OpenCV.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'Deep Learning'],
    github: 'https://github.com/Himanshu-B-A',
    live: null,
    featured: true,
  },
  {
    id: 8,
    title: 'Emotion-Based Music Recommendation',
    category: 'Deep Learning',
    description:
      'Recommends music based on facial expression analysis using deep learning.',
    fullDescription:
      'Maps facial expressions to mood and suggests tracks using a Keras-based model and OpenCV preprocessing; end-to-end prototype for personalized playlists.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=500&fit=crop',
    tech: ['Python', 'Deep Learning', 'OpenCV', 'Keras'],
    github: 'https://github.com/Himanshu-B-A',
    live: null,
    featured: true,
  },
];

/** Hero strips reuse project 1, 2, 5 thumbnails — keep those `image` URLs on-theme (dark tech, not generic stock). */
function heroImageThumb(url) {
  try {
    const u = new URL(url);
    u.searchParams.set('w', '420');
    u.searchParams.set('h', '260');
    u.searchParams.set('fit', 'crop');
    u.searchParams.set('q', '85');
    return u.toString();
  } catch {
    return url;
  }
}

const heroStripProjectIds = [1, 2, 5];

export const heroStripImages = heroStripProjectIds
  .map((id) => projects.find((p) => p.id === id))
  .filter(Boolean)
  .map((p) => heroImageThumb(p.image));

export const heroStripTitles = heroStripProjectIds
  .map((id) => projects.find((p) => p.id === id))
  .filter(Boolean)
  .map((p) => p.title);

export const experience = [
  {
    id: 1,
    title: 'Intern — NISAR Payload Monitoring',
    company: 'Indian Space Research Organisation (ISRO)',
    location: 'Bangalore, India',
    period: 'Nov 2023 – Present',
    description:
      'Payload monitoring and mission health analytics for NISAR; real-time telemetry visualization and ML-assisted anomaly review.',
    achievements: [
      'Engineered a real-time telemetry dashboard that reduced anomaly triage time by 40%.',
      'Optimized a CNN for eclipse-related anomalies: ~92% accuracy with under 2% false positives.',
      'Processed 500MB+ telemetry daily using Python and Pandas for mission health metrics.',
    ],
    tech: ['Python', 'Pandas', 'CNN', 'Telemetry', 'Real-time systems'],
  },
  {
    id: 2,
    title: 'AI/ML Intern',
    company: 'RLogic Technologies',
    location: 'Chitradurga, India',
    period: 'Nov 2020 – May 2023',
    description:
      'Agritech and IoT analytics: predictive modeling and exploratory analysis for sensor-driven insights.',
    achievements: [
      'Built a gradient-boosted crop yield model, improving R² from 0.68 to 0.78.',
      'Automated EDA on 20k+ IoT sensor records and delivered insights via Jupyter dashboards.',
    ],
    tech: ['Python', 'Scikit-learn', 'Jupyter', 'IoT', 'Gradient boosting'],
  },
];

export const education = [
  {
    id: 1,
    degree: 'B.E.',
    field: 'Information Science and Engineering',
    institution: 'Dayananda Sagar College of Engineering',
    location: 'Bangalore, India',
    period: '2021 – Present',
    grade: 'CGPA: 8.51',
    highlights: [
      'Focus: AI/ML, software engineering, and systems for real-world deployments.',
      'Final-year project: AI-powered reading assistant for dyslexic learners (see Projects).',
    ],
  },
  {
    id: 2,
    degree: 'Diploma',
    field: 'Computer Science and Engineering',
    institution: 'SJM Polytechnic',
    location: 'Chitradurga, India',
    period: '2018 – 2021',
    grade: 'CGPA: 9.70',
    highlights: ['Strong foundation in programming, databases, and practical engineering labs.'],
  },
];

export const patents = [
  {
    title: 'AI-Powered Reading Support for Dyslexia',
    number: 'Indian Patent Application No. 202641027447 A (Published)',
    status: 'Published',
    date: 'March 2026',
    summary: [
      'AI-based assistive reading with speech recognition and real-time feedback.',
      'Word-by-word highlighting and pronunciation support to improve accuracy and confidence.',
      'Trained with Mozilla Common Voice to improve robustness across accents.',
    ],
  },
];
