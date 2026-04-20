import { Code2, Database, Layers, Zap, Mail, Phone, MapPin, NewspaperIcon, Building2Icon, FileTextIcon, Search, GraduationCapIcon, CodeIcon, MessageSquare } from "lucide-react"

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
  // --- PROJETOS EM PRODUÇÃO ---
  {
    title: "Sol Sertão Online",
    description:
      "Portal de notícias regional desenvolvido do zero. Infraestrutura em VPS própria com Supabase self-hosted. Faz uso de Web Scraping para coleta de dados, Edge Functions para lógicas de borda e CI/CD via GitHub Actions.",
    image: "/projects/sol-sertao-online.png",
    icon: NewspaperIcon,
    tags: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Scraping", "Edge Functions"],
    liveUrl: "https://solnoticias.com.br/", 
    githubUrl: null,
    featured: true,
    type: "production"
  },
  {
    title: "Cidades Inteligentes (Core)",
    description:
      "Módulos vitais para a gestão municipal, englobando a emissão de alvarás de construção, manutenção urbana e o sistema de notificações. Arquitetura full stack robusta e containerizada.",
    image: "/projects/cidades-inteligentes.png",
    icon: Building2Icon,
    tags: ["Java", "Spring Boot", "PostgreSQL", "React", "TypeScript", "Docker"],
    liveUrl: "https://conectaci.com/",
    githubUrl: null,
    featured: true,
    type: "production"
  },
  {
    title: "Cidades Inteligentes (Processos)",
    description:
      "Plataforma focada na digitalização e fluxo de processos. Integração de scripts em Python para automações de dados, com uma interface fluida construída no ecossistema React com Next.js.",
    image: "/projects/plataforma-de-processos.png",
    icon: FileTextIcon,
    tags: ["React", "Next.js", "TypeScript", "Supabase", "Python"],
    liveUrl: "https://plataforma-digital-de-processos.vercel.app/",
    githubUrl: null,
    featured: true,
    type: "production"
  },
  {
    title: "Portal de Transparência - Assistir Mais",
    description:
      "Refatoração parcial e implementação de novas funcionalidades no portal de transparência, melhorando o acesso e a visualização de dados públicos com alta performance.",
    image: "/projects/assistir-mais-org.png",
    icon: Search,
    tags: ["React", "Vite", "JavaScript", "Supabase"],
    liveUrl: "https://assistirmais.org/",
    githubUrl: null,
    featured: true,
    type: "production"
  },

  // --- PROJETOS PESSOAIS / ACADÊMICOS (Com botão de código) ---
  {
    title: "Stat-Calc Mobile",
    description: "App nativo para cálculos estatísticos (Regra de Sturges) compilado para Android usando EAS Build. Novas funcionalidades de cálculos estáticos estão em desenvolvimento, com foco em performance e usabilidade.",
    image: "/personal/stat-calc.jpeg", 
    icon: CodeIcon,
    tags: ["React Native", "Expo", "TypeScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/JorgeRobertoArgolo/stat-calc",
    featured: false,
    type: "personal"
  },
  {
    title: "Sistema de Chat Multi usuário",
    description: "Arquitetura cliente/servidor construída puramente em Java 21. Utiliza Sockets TCP e multithreading para suportar múltiplas conexões simultâneas, salas de bate-papo, mensagens privadas (1-1) e geração automática de logs.",
    image: "/personal/socket-chat.png",
    icon: MessageSquare,
    tags: ["Java 21", "TCP Sockets", "Multithreading", "Redes"],
    liveUrl: "#",
    githubUrl: "https://github.com/JorgeRobertoArgolo/socket-chat",
    featured: false,
    type: "personal"
  }
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
    icon: MapPin,
    label: "Localização",
    value: "Brasil",
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
  "Desenvolvedor Backend",
  "Engenheiro de Software",
  "Especialista em APIs Java",
  "Desenvolvedor Mobile React Native",
]