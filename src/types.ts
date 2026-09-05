export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'Full Stack' | 'Frontend' | 'Next.js' | 'MERN';
  tags: string[];
  techStack: string[];
  highlights: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  featured: boolean;
  demoType: 'ecommerce' | 'headphone' | 'kanban' | 'codecraft';
  metrics?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  college: string;
  location: string;
  completion: string;
  scores: {
    year: string;
    cgpa: string;
  }[];
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: string;
    iconName?: string;
  }[];
}

export interface ContactMessage {
  _id?: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  createdAt?: string;
}
