// ── Social & Contact ──
export const SOCIAL = {
  linkedin: 'https://www.linkedin.com/in/shifali-gupta-sg/',
    github: 'https://github.com/Shifali-143',
  email: 'shifali8542@gmail.com',
  phone: '+91 8318190614',
} as const

// ── Skill categories ──
export type SkillLevel = 'expert' | 'proficient' | 'familiar'

export interface Skill {
  name: string
  level: SkillLevel
}

export interface SkillCategory {
  title: string
  icon: string
  skills: Skill[]
  color: string
}

export const SKILL_LEVELS: Record<SkillLevel, { label: string; color: string }> = {
  expert: { label: 'Expert', color: '#06b6d4' },
  proficient: { label: 'Proficient', color: '#fbbf24' },
  familiar: { label: 'Familiar', color: '#64748b' },
}

export const SKILLS: SkillCategory[] = [
  {
    title: 'AI / ML',
    icon: '🧠',
    color: '#f472b6',
    skills: [
      { name: 'Large Language Models', level: 'expert' },
      { name: 'Generative AI', level: 'expert' },
      { name: 'Agentic AI', level: 'expert' },
      { name: 'LangChain', level: 'expert' },
      { name: 'LangGraph', level: 'proficient' },
      { name: 'RAG', level: 'proficient' },
      { name: 'Prompt Engineering', level: 'expert' },
      { name: 'NLP', level: 'proficient' },
    ],
  },
  {
    title: 'Deep Learning',
    icon: '⚡',
    color: '#c084fc',
    skills: [
      { name: 'PyTorch', level: 'proficient' },
      { name: 'TensorFlow', level: 'proficient' },
      { name: 'CNN + LSTM', level: 'expert' },
      { name: 'ResNet', level: 'proficient' },
      { name: 'YOLOv8', level: 'proficient' },
      { name: 'Faster R-CNN', level: 'familiar' },
      { name: 'ONNX', level: 'familiar' },
      { name: 'TorchServe', level: 'familiar' },
    ],
  },
  {
    title: 'Computer Vision',
    icon: '👁️',
    color: '#34d399',
    skills: [
      { name: 'OpenCV', level: 'proficient' },
      { name: 'Object Detection', level: 'proficient' },
      { name: 'Signal Classification', level: 'expert' },
      { name: 'Visual Defect Detection', level: 'proficient' },
      { name: 'Image Preprocessing', level: 'proficient' },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: '#818cf8',
    skills: [
      { name: 'Python', level: 'expert' },
      { name: 'Django', level: 'expert' },
      { name: 'Django REST Framework', level: 'expert' },
      { name: 'Flask', level: 'proficient' },
      { name: 'REST APIs', level: 'expert' },
      { name: 'JWT / SSO', level: 'proficient' },
      { name: 'SQL', level: 'proficient' },
    ],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    color: '#38bdf8',
    skills: [
      { name: 'React', level: 'proficient' },
      { name: 'TypeScript', level: 'proficient' },
      { name: 'JavaScript', level: 'proficient' },
      { name: 'Tailwind CSS', level: 'proficient' },
      { name: 'Vite', level: 'proficient' },
      { name: 'HTML / CSS', level: 'expert' },
    ],
  },
  {
    title: 'Database, Cloud & Tools',
    icon: '☁️',
    color: '#fbbf24',
    skills: [
      { name: 'PostgreSQL', level: 'expert' },
      { name: 'SQLite', level: 'proficient' },
      { name: 'Redis', level: 'proficient' },
      { name: 'AWS S3', level: 'proficient' },
      { name: 'Celery', level: 'proficient' },
      { name: 'Git / GitHub', level: 'expert' },
      { name: 'PDF Parsing', level: 'proficient' },
    ],
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
    title: 'Visual Defect Detection System',
    subtitle: 'Real-time computer vision pipeline',
    tech: ['Python', 'YOLOv8', 'OpenCV', 'Faster R-CNN', 'ONNX', 'TorchServe'],
    color: '#34d399',
    badge: 'Computer Vision',
    features: [
      'Real-time YOLOv8 pipeline for surface defect detection on imbalanced industrial datasets',
      'OpenCV preprocessing: noise filtering, contrast normalization & geometric correction',
      'Exported to ONNX and served via TorchServe REST API with drift monitoring',
      'Benchmarked YOLOv8 vs Faster R-CNN on accuracy and inference latency',
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