import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';

const app = express();
const PORT = 3000;

app.use(express.json());

// In-Memory MongoDB-style Document Store
interface MessageDocument {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  read: boolean;
}

const db = {
  profile: {
    name: "Sachin Yadav",
    role: "Full Stack Developer",
    location: "Surat, Gujarat, India",
    phone: "+91 7822900241",
    email: "yadavsachin7249407392@gmail.com",
    linkedin: "https://linkedin.com/in/sachin-yadav-20a79b231",
    github: "https://github.com/SachinYadav2002",
    portfolioUrl: "https://portfolio-six-phi-joylbsgqdg.vercel.app",
    summary: "Results-driven Full Stack Developer with expertise in building scalable, high-performance web applications using React.js, Next.js, TypeScript, Node.js, Express.js, and MongoDB. Proven track record in transforming Figma UI/UX designs into modular components, engineering RESTful APIs, and optimizing web performance.",
    academicPerformance: {
      degree: "BCA (Bachelor of Computer Applications)",
      college: "C D Jain College of Commerce",
      location: "Shrirampur, Maharashtra",
      completed: "02/2024",
      tyBca: "9.04 CGPA",
      syBca: "8.86 CGPA",
      fyBca: "8.33 CGPA"
    }
  },
  messages: [] as MessageDocument[]
};

// Seed initial message for demo
db.messages.push({
  _id: 'msg_' + Date.now(),
  name: "Priya Sharma",
  email: "priya.techlead@example.com",
  subject: "Full Stack Developer Role Opportunity",
  message: "Hi Sachin, loved your portfolio and your work on the Electro Next.js platform. We have an exciting MERN stack opening we would love to discuss with you!",
  createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
  read: false
});

// REST API Endpoints
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    stack: 'MERN (MongoDB + Express + React + Node.js)'
  });
});

// Get developer profile
app.get('/api/profile', (req, res) => {
  res.json(db.profile);
});

// Post contact message
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Please provide name, email, and message.'
    });
  }

  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a valid email address.'
    });
  }

  const newMessage: MessageDocument = {
    _id: 'msg_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
    name: String(name).trim(),
    email: String(email).trim().toLowerCase(),
    subject: subject ? String(subject).trim() : 'Portfolio Contact Inquiry',
    message: String(message).trim(),
    createdAt: new Date().toISOString(),
    read: false
  };

  db.messages.unshift(newMessage);

  res.status(201).json({
    success: true,
    message: 'Thank you for reaching out! Sachin will respond to you promptly.',
    data: newMessage
  });
});

// Get received messages (demonstrates real backend persistence)
app.get('/api/contact/messages', (req, res) => {
  res.json({
    success: true,
    count: db.messages.length,
    messages: db.messages
  });
});

// Download Project ZIP endpoint
app.get('/api/project/download-zip', (req, res) => {
  const zipFile = path.join(process.cwd(), 'public', 'portfolio-sachin-yadav.zip');
  if (fs.existsSync(zipFile)) {
    res.download(zipFile, 'sachin-yadav-portfolio.zip');
  } else {
    res.status(404).send('ZIP file not found');
  }
});

// Download Resume endpoint
app.get('/api/resume/download', (req, res) => {
  const resumeContent = `================================================================================
SACHIN YADAV - FULL STACK DEVELOPER
================================================================================
Surat, Gujarat, India • +91 7822900241 • yadavsachin7249407392@gmail.com
LinkedIn: linkedin.com/in/sachin-yadav-20a79b231
GitHub: github.com/SachinYadav2002
Portfolio: portfolio-six-phi-joylbsgqdg.vercel.app

PROFESSIONAL SUMMARY
--------------------------------------------------------------------------------
Results-driven Full Stack Developer with expertise in building scalable,
high-performance web applications using React.js, Next.js, TypeScript,
Node.js, Express.js, and MongoDB. Proven track record in transforming Figma
UI/UX designs into modular components, engineering RESTful APIs, and optimizing
web performance. Skilled in clean code principles, state management, and modern
responsive design.

TECHNICAL SKILLS
--------------------------------------------------------------------------------
• Frontend: React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, SCSS
• Backend: Node.js, Express.js, RESTful APIs, Microservices Architecture
• Databases: MongoDB, MySQL
• Tools & Methods: Git, GitHub, Figma, Webpack, Performance Optimization, Agile/Scrum Methodologies

WORK EXPERIENCE
--------------------------------------------------------------------------------
Front End Developer | Suvya Web (Surat, Gujarat)
02/2025 – 08/2026
• Engineered responsive, cross-browser web interfaces using React.js and Next.js,
  delivering smooth user experiences across mobile and desktop devices.
• Translated Figma/UI mockups into high-quality, reusable components leveraging
  Tailwind CSS, SCSS, and semantic HTML5.
• Developed and integrated RESTful APIs using Express.js and MongoDB, streamlining
  client-server data flow and system responsiveness.
• Optimized frontend performance through lazy loading, code splitting, and bundle
  size reduction, cutting initial load times by 30%.
• Collaborated with cross-functional design and engineering teams to ensure UI
  consistency, strict accessibility, and feature alignment.
• Utilized Git and GitHub for version control, conducting peer code reviews and
  managing structured workflow branching strategies.

KEY PROJECTS
--------------------------------------------------------------------------------
1. Electro – E-Commerce Platform
   Tech: Next.js | TypeScript | Tailwind CSS | Node.js | MongoDB
   • Architected a modern e-commerce application using Next.js server-side rendering
     for optimal page speed and SEO ranking.
   • Implemented strict TypeScript typing across all components, reducing production
     defects and improving code maintainability.
   • Designed fully adaptive layout components for seamlessly consistent user
     experiences across mobile, tablet, and desktop screens.

2. Headphone Showcase Application
   Tech: React.js | CSS3 | Web Audio API | Dynamic State Management
   • Developed an interactive React.js application featuring dynamic state
     management, smooth transition animations, and modern UI elements.

3. DevSprint – MERN Agile Project Management System
   Tech: MongoDB | Express.js | React.js | Node.js | Tailwind CSS
   • Built a real-time Kanban management platform with task tracking, status transitions,
     and MongoDB aggregation pipelines.

4. CodeCraft – Developer Snippet Hub & Community
   Tech: MERN Stack | RESTful APIs | Syntax Highlighting
   • Full-stack community application for sharing and reviewing modular frontend & backend code snippets.

EDUCATION
--------------------------------------------------------------------------------
BCA (Bachelor of Computer Applications) - Completed: 02/2024
C D Jain College of Commerce (Shrirampur, Maharashtra)
Academic Performance:
• TY BCA: 9.04 CGPA
• SY BCA: 8.86 CGPA
• FY BCA: 8.33 CGPA

LANGUAGES & INTERESTS
--------------------------------------------------------------------------------
• Languages: English (Professional) | Hindi (Native/Full) | Marathi (Working)
• Interests: Exploring Modern Web Frameworks, Technical Reading, Kabaddi
================================================================================
`;

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Content-Disposition', 'attachment; filename="Sachin_Yadav_Full_Stack_Resume.txt"');
  res.send(resumeContent);
});

// Vite middleware / production serving
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`MERN Stack Portfolio server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
