import {
  Code2,
  Database,
  Brain,
  Cloud,
  Wrench,
  Sparkles,
  Trophy,
  GraduationCap,
  Briefcase,
  Award,
  BarChart3,
} from "lucide-react";

export const profile = {
  name: "Vaibhav Pruthi",
  roles: ["Frontend Developer", "Data Analytics Enthusiast", "AI/ML Explorer"],
  tagline:
    "Computer Science student skilled in HTML, CSS, JavaScript, and React. Passionate about building responsive, user-friendly interfaces with clean code and modern UI design.",
  location: "Haryana, Karnal, India",
  phone: "+91-7404992403",
  email: "vaibhavpruthi556@gmail.com",
  github: "https://github.com/vaibhav-pruthi",
  linkedin: "https://www.linkedin.com/in/vaibhav-pruthi%F0%9F%87%AE%F0%9F%87%B3-83562128b/",
  portfolio: "#",
  resumeUrl: "https://drive.google.com/file/d/170LpQ6Joi6RocT3oitIyqRZEJKF16DS7/view?usp=sharing",
  avatar: "VP",
};

export const stats = [
  { label: "CGPA", value: 8.44, suffix: "/10" },
  { label: "Projects Built", value: 6, suffix: "+" },
  { label: "Technologies", value: 20, suffix: "+" },
  { label: "Internships", value: 1, suffix: "" },
  { label: "Certifications", value: 3, suffix: "" },
  // { label: "Model Accuracy", value: 98, suffix: "%" },
];

export const about = {
  summary:
    "I'm a Computer Science undergraduate at Bennett University with a strong foundation in frontend development, data analytics, and applied machine learning. I love turning ideas into clean, responsive interfaces and data-driven products.",
  objective:
    "To grow as a frontend and full-stack developer by building thoughtful, performant user experiences while contributing to impactful AI and data-driven products.",
  journey:
    "From writing my first HTML page to shipping AI-powered apps with LangChain and FastAPI — my journey has been about curiosity, clean code, and continuous learning.",
};

export type SkillCategory = {
  title: string;
  icon: any;
  gradient: string;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Code2,
    gradient: "from-violet-500 to-blue-500",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "C++", level: 82 },
      { name: "SQL", level: 85 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 92 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Sparkles,
    gradient: "from-cyan-500 to-blue-500",
    skills: [
      { name: "React.js", level: 88 },
      { name: "Node.js", level: 78 },
      { name: "Express.js", level: 76 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Flask", level: 75 },
      { name: "FastAPI", level: 80 },
    ],
  },
  {
    title: "AI / ML & Data",
    icon: Brain,
    gradient: "from-pink-500 to-violet-500",
    skills: [
      { name: "NumPy", level: 85 },
      { name: "Pandas", level: 88 },
      { name: "Scikit-learn", level: 80 },
      { name: "TensorFlow", level: 78 },
      { name: "LangChain", level: 80 },
      { name: "NLP", level: 82 },
    ],
  },
  {
    title: "Databases & Analytics",
    icon: Database,
    gradient: "from-emerald-500 to-cyan-500",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 78 },
      { name: "Power BI", level: 84 },
      { name: "Microsoft Excel", level: 86 },
      { name: "Data Analysis", level: 85 },
    ],
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    gradient: "from-blue-500 to-violet-500",
    skills: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Google Colab", level: 88 },
      { name: "Postman", level: 88 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    gradient: "from-amber-500 to-pink-500",
    skills: [
      { name: "Vercel", level: 88 },
      { name: "Render", level: 80 },
      { name: "Netlify", level: 85 },
      { name: "Docker", level: 70 },
    ],
  },
];

export const projects = [
  {
    title: "SafeSpace — AI Mental Health Therapist",
    description:
      "AI-powered mental health agent providing context-aware conversational support with emergency response detection for high-risk signals.",
    features: ["LangChain agent", "Emergency detection", "Scalable API"],
    tech: ["Python", "FastAPI", "Streamlit", "LangChain", "Groq API", "NLP"],
    gradient: "from-violet-600 via-fuchsia-500 to-pink-500",
    github: "https://github.com/vaibhav-pruthi/safespace-ai-therapist",
    demo: "#",
  },
  {
    title: "Fake News Detection System",
    description:
      "Ensemble ML/DL system achieving 98% accuracy using LSTM, CNN, Random Forest, and Decision Tree models with a comprehensive NLP preprocessing pipeline.",
    features: ["98% accuracy", "LSTM + CNN", "TF-IDF features"],
    tech: ["Python", "NLP", "Random Forest", "LSTM", "CNN", "TensorFlow"],
    gradient: "from-blue-600 via-cyan-500 to-emerald-400",
    github: "https://github.com/vaibhav-pruthi/Fake-News-Detection",
    demo: "#",
  },
  {
    title: "GenAI — Code Generation Platform",
    description:
      "AI platform that automates code generation across frameworks from natural language prompts, with a responsive React UI and Monaco editor.",
    features: ["Natural language to code", "Monaco editor", "50% faster workflow"],
    tech: ["React.js", "Google Generative AI", "Vite", "Monaco Editor"],
    gradient: "from-pink-500 via-rose-500 to-amber-400",
    github: "https://github.com/vaibhav-pruthi/ai-comp-gen",
    demo: "#",
  },
  {
    title: "ChatSphere — Real-Time Chat Application",
    description:
      "A full-stack real-time chat application featuring secure JWT authentication, instant messaging, active user presence tracking, and user search functionality.",
    features: ["Real-time communication", "User search & discovery", "JWT auth & route protection"],
    tech: ["React.js", "Node.js", "Express.js", "Socket.io", "MongoDB", "Zustand", "Tailwind CSS"],
    gradient: "from-sky-400 via-blue-500 to-indigo-600",
    github: "https://github.com/vaibhav-pruthi/Real-Time_ChatApp",
    demo: "#",
  },
];

export const experience = [
  {
    role: "Data Analytics Intern",
    org: "Imarticus Learning",
    period: "June 2025 — July 2025",
    points: [
      "Optimized SQL queries for 10,000+ hospital records, improving report generation speed by 40%",
      "Performed EDA on patient data using Python (Pandas, NumPy), improving diagnostic accuracy by 25%",
      "Built a Power BI dashboard for road accident analysis, reducing manual analysis time by 60%",
    ],
    icon: BarChart3,
  },
];

export const education = [
  {
    degree: "Bachelor of Technology in Computer Science — CGPA 8.44/10",
    school: "Bennett University, Greater Noida, UP",
    period: "August 2023 — August 2027",
    coursework: [
      "Object Oriented Programming",
      "Databases",
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Data Mining",
      "Advanced DSA",
      "Discrete Mathematics",
    ],
    icon: GraduationCap,
  },
];

export const certifications = [
  {
    title: "Programming in C++: A Hands On Introduction",
    provider: "Coursera",
    date: "",
    gradient: "from-blue-500 to-violet-500",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/189DBUHSW2SO",
  },
  {
    title: "Algorithmic Toolbox",
    provider: "Coursera",
    date: "",
    gradient: "from-amber-500 to-pink-500",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/XEKB2E7S7G6J",
  },
  {
    title: "Text Retrieval and Search Engines",
    provider: "Coursera",
    date: "",
    gradient: "from-pink-500 to-violet-500",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/NGDENUOLTGRC",
  },
];

export const achievements = [
  {
    title: "98% Model Accuracy",
    desc: "Fake News Detection using ensemble ML/DL",
    icon: Trophy,
    color: "text-amber-400",
  },
  {
    title: "40% Faster Reports",
    desc: "SQL optimization on 10,000+ hospital records",
    icon: Award,
    color: "text-cyan-400",
  },
  {
    title: "60% Less Manual Work",
    desc: "Power BI dashboard for accident analysis",
    icon: BarChart3,
    color: "text-emerald-400",
  },
  {
    title: "CGPA 8.44 / 10",
    desc: "Consistent academic performance at Bennett University",
    icon: GraduationCap,
    color: "text-violet-400",
  },
];

export const testimonials = [
  {
    quote:
      "Vaibhav combines clean frontend craft with a strong analytical mindset — a rare and valuable mix.",
    name: "Mentor",
    title: "Bennett University",
  },
  {
    quote:
      "Delivered the Power BI dashboard ahead of schedule and made the data genuinely easy to act on.",
    name: "Team Lead",
    title: "Imarticus Learning",
  },
  {
    quote:
      "His attention to UI detail and willingness to learn make him a great teammate on any project.",
    name: "Peer",
    title: "Project Collaborator",
  },
];

export const navLinks = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Experience", href: "experience" },
  { label: "Education", href: "education" },
  { label: "Certifications", href: "certifications" },
  // { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "contact" },
];
