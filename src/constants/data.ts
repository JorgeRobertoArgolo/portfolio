import { Code2, Database, Layers, Zap, Mail, Phone, MapPin, NewspaperIcon, Building2Icon, FileTextIcon, Search } from "lucide-react"

import githubSvg from "@/assets/github.svg"
import linkedinSvg from "@/assets/linkedin.svg"

export const ABOUT_HIGHLIGHTS = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Código limpo, legível e bem documentado",
  },
  {
    icon: Database,
    title: "Backend Sólido",
    description: "Integrações Spring Boot robustas e seguras",
  },
  {
    icon: Layers,
    title: "Full Stack",
    description: "Do frontend e mobile ao deploy em produção",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Otimização e boas práticas sempre",
  },
]

export const PROJECTS_DATA = [
  {
    title: "Sol Sertão Online",
    description:
      "Portal de notícias regional desenvolvido do zero. Toda a infraestrutura foi configurada em uma VPS própria, incluindo o banco de dados Supabase self-hosted e pipeline de CI/CD via GitHub Actions para deploys automatizados.",
    image: "/placeholder-project-1.svg",
    icon: NewspaperIcon,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "VPS/Actions"],
    liveUrl: "https://solnoticias.com.br/", 
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Cidades Inteligentes (Core)",
    description:
      "Módulos vitais para a gestão municipal, englobando a emissão de alvarás de construção, manutenção urbana e o sistema de notificações. Arquitetura full stack robusta e containerizada.",
    image: "/placeholder-project-2.svg",
    icon: Building2Icon,
    tags: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Next.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Cidades Inteligentes (Processos)",
    description:
      "Plataforma focada na digitalização e fluxo de processos. Integração de scripts em Python para automações e processamento de dados, com uma interface fluida construída no ecossistema React.",
    image: "/placeholder-project-3.svg",
    icon: FileTextIcon,
    tags: ["Next.js", "TypeScript", "Supabase", "Python"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Portal de Transparência - Assistir Mais",
    description:
      "Refatoração completa e implementação de novas funcionalidades no portal de transparência, melhorando o acesso e a visualização de dados públicos com alta performance.",
    image: "/placeholder-project-4.svg",
    icon: Search,
    tags: ["React", "Vite", "JavaScript", "Supabase"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
]

export const SKILL_CATEGORIES = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "mobile", label: "Mobile" }, 
  { id: "database", label: "Banco de Dados" },
]

export const SKILLS_DATA = {
  frontend: [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 90 },
    { name: "Tailwind CSS", level: 85 },
  ],
  backend: [
    { name: "Java", level: 90 },
    { name: "Spring Boot", level: 90 },
    { name: "REST APIs", level: 90 },
  ],
  mobile: [ 
    { name: "React Native", level: 70 },
    { name: "Expo", level: 70 },
    { name: "Flutter", level: 50 },
    { name: "Dart", level: 50 },
  ],
  database: [
    { name: "PostgreSQL", level: 90 },
    { name: "MySQL", level: 90 },
  ],
}

export const OTHER_SKILLS = [
  "Git", "Docker", "Supabase", "Vercel", "Agile/Scrum", "CI/CD", "Linux"
]

export const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "jorgerobertoargolo@gmail.com", 
    href: "mailto:jorgerobertoargolo@gmail.com",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "+55 (74) 99963-3107", 
    href: "tel:+557499963107",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Irecê, Bahia - Brasil",
    href: null,
  },
]

export const SOCIAL_LINKS = [
  { 
    icon: githubSvg, 
    href: "https://github.com/JorgeRobertoArgolo",
    label: "GitHub" 
  },
  { 
    icon: linkedinSvg, 
    href: "https://www.linkedin.com/in/jorge-roberto-argolo/", 
    label: "LinkedIn" 
  },
]

export const HERO_ROLES = [
  "Desenvolvedor Full Stack",
  "Desenvolvedor Mobile",
  "Engenheiro de Software",
  "Especialista em APIs Java",
]