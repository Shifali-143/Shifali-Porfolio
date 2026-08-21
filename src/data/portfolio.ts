// ── Social & Contact ──
export const SOCIAL = {
  linkedin: 'https://www.linkedin.com/in/shifali-gupta-sg/',
    github: 'https://github.com/Shifali-143',
  email: 'shifali8542@gmail.com',
  phone: '+91 8318190614',
} as const

// ── Skill categories ──
export interface SkillCategory {
  title: string
  icon: string
  skills: string[]
  color: string
}

export const SKILLS: SkillCategory[] = [
  {
    title: 'Programming',
    icon: '⌨️',
    skills: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
    color: '#06b6d4',
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: ['Django', 'Django REST Framework', 'Flask', 'REST APIs'],
    color: '#c084fc',
  },
  {
    title: 'Frontend',
    icon: '🎨',
    skills: ['React', 'Tailwind CSS', 'Vite', 'HTML/CSS'],
    color: '#818cf8',
  },
  {
    title: 'AI / ML',
    icon: '🧠',
    skills: ['LLMs', 'Agentic AI', 'LangChain', 'LangGraph', 'RAG', 'CNN', 'LSTM', 'Prompt Engineering'],
    color: '#f472b6',
  },
  {
    title: 'Database & Cloud',
    icon: '☁️',
    skills: ['PostgreSQL', 'SQLite', 'AWS S3', 'Redis'],
    color: '#34d399',
  },
  {
    title: 'Dev Tools',
    icon: '🔧',
    skills: ['Git / GitHub', 'Celery', 'DSA', 'Debugging'],
    color: '#fbbf24',
  },
]

// ── Experience ──
export interface Experience {
  title: string
  company: string
  period: string
  current: boolean
  highlights: string[]
}

export const EXPERIENCES: Experience[] = [
  {
    title: 'AI Developer & Full Stack Developer',
    company: 'LensVox Pvt Ltd',
    period: 'Apr 2025 – Present',
    current: true,
    highlights: [
      'Developing AI-driven NLP and LLM applications with LangChain, including prompt engineering and evaluation of AI outputs',
      'Building scalable full-stack applications using Django, Flask, React, and TypeScript with integrated AI features',
      'Resolving critical bugs and optimizing performance across service-based enterprise projects',
    ],
  },
  {
    title: 'Python Developer',
    company: 'Ramakrishna Electro Components Pvt Ltd',
    period: 'Apr 2024 – Mar 2025',
    current: false,
    highlights: [
      'Engineered database architecture for a Smart Meter IoT project, achieving 40% improvement in data processing efficiency',
      'Integrated real-time data monitoring capabilities with cross-functional teams, enhancing system reliability',
    ],
  },
]

// ── Projects ──
export interface Project {
  title: string
  subtitle: string
  tech: string[]
  color: string
  badge?: string
  features: string[]
}

export const PROJECTS: Project[] = [
  {
    title: 'Enterprise CRM & Project Platform',
    subtitle: 'Unified SaaS covering PM, HRMS, CRM & IMS',
    tech: ['Django', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Agentic AI'],
    color: '#818cf8',
    badge: 'Enterprise',
    features: [
      'JWT-based SSO with centralized identity & secure RBAC',
      'Agentic AI system using LangChain for natural-language operations',
      'Automated employee lifecycle from requisition to onboarding',
    ],
  },
  {
    title: 'ECG MI Detection System',
    subtitle: 'Deep learning for cardiac diagnosis',
    tech: ['Python', 'CNN', 'CNN+LSTM', 'ResNet', 'PTB-XL'],
    color: '#f472b6',
    features: [
      '4-class ECG classification with 82%+ accuracy on 43,674 records',
      'Compared five deep-learning architectures for optimal MI detection',
      'Applied class-imbalance techniques to boost 88%+ MI sensitivity',
    ],
  },
  {
    title: 'FinDoc AI Extractor',
    subtitle: 'AI-powered financial document parser',
    tech: ['Python', 'TypeScript', 'Vite', 'SONET AI', 'PDF Parsing'],
    color: '#06b6d4',
    features: [
      'Table extraction from complex financial PDFs with formatting intelligence',
      'Dual-panel validation interface with interactive annotation controls',
      '95% extraction accuracy improvement, 70% faster validation workflow',
    ],
  },
]

// ── Education ──
export const EDUCATION = {
  degree: 'Bachelor of Technology (B.Tech)',
  field: 'Electronics & Communication Engineering',
  school: 'Meerut Institute of Engineering and Technology, AKTU',
  period: '2020 – 2024',
} as const

// ── Stats ──
export const STATS = [
  { value: '2+', label: 'Years Exp' },
  { value: '5+', label: 'Projects' },
  { value: '3+', label: 'AI/ML Apps' },
  { value: '95%', label: 'Accuracy' },
] as const
