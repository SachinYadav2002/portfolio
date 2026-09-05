import { Project, Experience, Education, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: "Sachin Yadav",
  title: "Full Stack Developer",
  tagline: "Specializing in MERN Stack, Next.js, TypeScript & High-Performance Web Applications",
  summary: "Results-driven Full Stack Developer with expertise in building scalable, high-performance web applications using React.js, Next.js, TypeScript, Node.js, Express.js, and MongoDB. Proven track record in transforming Figma UI/UX designs into modular components, engineering RESTful APIs, and optimizing web performance.",
  location: "Surat, Gujarat, India",
  phone: "+91 7822900241",
  email: "yadavsachin7249407392@gmail.com",
  linkedin: "https://linkedin.com/in/sachin-yadav-20a79b231",
  github: "https://github.com/SachinYadav2002",
  portfolioUrl: "https://portfolio-six-phi-joylbsgqdg.vercel.app",
  stats: [
    { label: "CGPA (TY BCA)", value: "9.04" },
    { label: "Frontend Speedup", value: "30%" },
    { label: "Full Stack Stack", value: "MERN" },
    { label: "Production Experience", value: "1.5+ Yrs" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "electro-ecommerce",
    title: "Electro – E-Commerce Platform",
    subtitle: "Full-Featured High-Speed Digital Storefront",
    description: "Architected a modern e-commerce application using Next.js server-side rendering for optimal page speed and SEO ranking. Implemented strict TypeScript typing across all components, reducing production defects and improving code maintainability. Designed fully adaptive layout components for seamlessly consistent user experiences across mobile, tablet, and desktop screens.",
    category: "Full Stack",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Express.js", "REST APIs"],
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    highlights: [
      "Server-side rendering (SSR) delivering sub-second First Contentful Paint and optimal SEO",
      "Strict end-to-end TypeScript interfaces across API endpoints, data models, and UI props",
      "Dynamic product catalog with interactive category filters, real-time search, and responsive cart",
      "Express.js & MongoDB backed product inventory and shopping session management"
    ],
    githubUrl: "https://github.com/SachinYadav2002/electro-ecommerce",
    liveDemoUrl: "https://portfolio-six-phi-joylbsgqdg.vercel.app",
    featured: true,
    demoType: "ecommerce",
    metrics: "Sub-second load times & 100% type safety"
  },
  {
    id: "headphone-showcase",
    title: "Headphone Showcase Application",
    subtitle: "Interactive Product Experience & Audio Visualizer",
    description: "Developed an interactive React.js application featuring dynamic state management, smooth transition animations, and modern UI elements. Incorporates real-time audio profile switching, interactive color theme customizers, and technical frequency response comparisons.",
    category: "Frontend",
    tags: ["React.js", "CSS3", "Tailwind CSS", "Web Audio", "Motion", "State Management"],
    techStack: ["React.js", "CSS3 & Modern Tailwind", "Web Audio API", "Framer Motion", "Vite"],
    highlights: [
      "Dynamic state management handling active sound equalization profiles and visual feedback",
      "Interactive 360-degree color swatch selector with synchronized hardware finish previews",
      "Smooth hardware-accelerated transition animations between product views and technical specs",
      "Audio frequency visualizer simulating real-time acoustic tuning (Bass, Vocal, Studio, Spatial)"
    ],
    githubUrl: "https://github.com/SachinYadav2002/headphone-showcase",
    liveDemoUrl: "https://portfolio-six-phi-joylbsgqdg.vercel.app",
    featured: true,
    demoType: "headphone",
    metrics: "60 FPS dynamic transitions"
  },
  {
    id: "devsprint-kanban",
    title: "DevSprint – MERN Agile Project Manager",
    subtitle: "Full-Stack Sprint & Workflow Engine",
    description: "Enterprise-grade sprint board application built on the MERN stack. Enables engineering teams to organize backlogs, drag tasks across status lanes, assign priorities, and analyze sprint velocities with MongoDB aggregation pipelines.",
    category: "MERN",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "RESTful API"],
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Real-time task state transitions across Backlog, In Progress, Review, and Completed lanes",
      "RESTful API architecture with MongoDB schema validation and index optimization",
      "Interactive ticket generator with tag assignment, priority flags, and team allocation",
      "Clean decoupled client-server architecture with error boundaries and optimistic updates"
    ],
    githubUrl: "https://github.com/SachinYadav2002/devsprint-mern-kanban",
    liveDemoUrl: "https://portfolio-six-phi-joylbsgqdg.vercel.app",
    featured: true,
    demoType: "kanban",
    metrics: "Full CRUD & Real-time status sync"
  },
  {
    id: "codecraft-snippets",
    title: "CodeCraft – Developer Snippet Hub",
    subtitle: "MERN Developer Community & Sandbox",
    description: "Curated community repository for software engineers to publish, bookmark, and test reusable React hooks, Express middlewares, and MongoDB aggregation pipelines. Features syntax highlighting, one-click clipboard copying, and live like counters.",
    category: "Full Stack",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    techStack: ["React.js", "Express.js", "MongoDB", "Node.js", "Prism syntax"],
    highlights: [
      "Tabbed multi-language code inspector with clean syntax formatting and line numbering",
      "Instant copy-to-clipboard functionality with feedback animations",
      "Live interactive likes and bookmark counters persisted via Express backend endpoints",
      "Search and filter by programming language (TypeScript, React, Node.js, MongoDB)"
    ],
    githubUrl: "https://github.com/SachinYadav2002/codecraft-snippets",
    liveDemoUrl: "https://portfolio-six-phi-joylbsgqdg.vercel.app",
    featured: false,
    demoType: "codecraft",
    metrics: "MERN REST API integration"
  }
];

export const WORK_EXPERIENCE: Experience[] = [
  {
    role: "Front End Developer",
    company: "Suvya Web",
    location: "Surat, Gujarat",
    period: "02/2025 – 08/2026",
    responsibilities: [
      "Engineered responsive, cross-browser web interfaces using React.js and Next.js, delivering smooth user experiences across mobile and desktop devices.",
      "Translated Figma/UI mockups into high-quality, reusable components leveraging Tailwind CSS, SCSS, and semantic HTML5.",
      "Developed and integrated RESTful APIs using Express.js and MongoDB, streamlining client-server data flow and system responsiveness.",
      "Optimized frontend performance through lazy loading, code splitting, and bundle size reduction, cutting initial load times by 30%.",
      "Collaborated with cross-functional design and engineering teams to ensure UI consistency, strict accessibility, and feature alignment.",
      "Utilized Git and GitHub for version control, conducting peer code reviews and managing structured workflow branching strategies."
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Express.js", "MongoDB", "Figma", "Git"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    skills: [
      { name: "React.js", level: "Advanced" },
      { name: "Next.js (SSR / SSG)", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "HTML5 & Semantic Web", level: "Advanced" },
      { name: "CSS3 & SCSS", level: "Advanced" },
      { name: "Responsive UI/UX", level: "Advanced" }
    ]
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "RESTful APIs", level: "Advanced" },
      { name: "Microservices Architecture", level: "Intermediate" },
      { name: "API Security & JWT", level: "Intermediate" },
      { name: "Middleware Design", level: "Advanced" }
    ]
  },
  {
    title: "Databases & Storage",
    skills: [
      { name: "MongoDB (Mongoose / Aggregations)", level: "Advanced" },
      { name: "MySQL", level: "Intermediate" },
      { name: "Database Schema Design", level: "Advanced" },
      { name: "Indexing & Query Optimization", level: "Intermediate" }
    ]
  },
  {
    title: "Tools & Methodologies",
    skills: [
      { name: "Git & GitHub Version Control", level: "Advanced" },
      { name: "Figma to Code Implementation", level: "Advanced" },
      { name: "Webpack & Vite Tooling", level: "Advanced" },
      { name: "Web Performance Optimization (-30% Load Time)", level: "Advanced" },
      { name: "Agile / Scrum Methodologies", level: "Advanced" },
      { name: "Code Splitting & Lazy Loading", level: "Advanced" }
    ]
  }
];

export const EDUCATION: Education = {
  degree: "BCA (Bachelor of Computer Applications)",
  college: "C D Jain College of Commerce",
  location: "Shrirampur, Maharashtra",
  completion: "Completed: 02/2024",
  scores: [
    { year: "TY BCA (Third Year)", cgpa: "9.04 CGPA" },
    { year: "SY BCA (Second Year)", cgpa: "8.86 CGPA" },
    { year: "FY BCA (First Year)", cgpa: "8.33 CGPA" }
  ]
};

export const LANGUAGES = [
  { name: "English", level: "Professional Working" },
  { name: "Hindi", level: "Native / Full Professional" },
  { name: "Marathi", level: "Working Proficiency" }
];

export const INTERESTS = [
  "Exploring Modern Web Frameworks",
  "Technical Reading & Architecture",
  "Performance Profiling",
  "Kabaddi & Sports"
];
