"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Briefcase, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import githubSvg from "@/assets/github.svg"
import { PROJECTS_DATA } from "@/constants/data"

export function Projects() {
  const [activeTab, setActiveTab] = useState<"production" | "personal">("production")

  const activeProjects = PROJECTS_DATA.filter((p) => p.type === activeTab)
  const featuredProjects = activeProjects.filter((p) => p.featured)
  const otherProjects = activeProjects.filter((p) => !p.featured)

  return (
    <section id="projetos" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Cabeçalho */}
        <div className="text-center mb-10">
          <p className="text-primary font-mono text-sm mb-2">Meu trabalho</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Portfólio de Projetos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
        </div>

        {/* Botões de Filtro (Abas) */}
        <div className="flex justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveTab("production")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
              activeTab === "production"
                ? "bg-primary text-primary-foreground shadow-lg scale-105"
                : "bg-background border border-border text-muted-foreground hover:border-primary/50"
            }`}
          >
            <Briefcase className="w-4 h-4" />
            Em Produção
          </button>
          <button
            onClick={() => setActiveTab("personal")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
              activeTab === "personal"
                ? "bg-primary text-primary-foreground shadow-lg scale-105"
                : "bg-background border border-border text-muted-foreground hover:border-primary/50"
            }`}
          >
            <User className="w-4 h-4" />
            Pessoais / Estudos
          </button>
        </div>

        {/* Projetos em Destaque */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              } animate-in fade-in slide-in-from-bottom-4 duration-700`}
            >
              {/* Visual do Projeto (Imagem) */}
              <div className={`relative group ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative bg-background rounded-xl border border-border overflow-hidden aspect-video">
                  {/* Barra do Navegador */}
                  <div className="bg-muted/50 px-4 py-2 border-b border-border flex items-center gap-2 z-10 relative">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                  </div>
                  
                  {/* Imagem Real */}
                  <div className="relative w-full h-[calc(100%-40px)] group overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-background/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <project.icon className="h-16 w-16 text-foreground drop-shadow-lg" />
                    </div>
                  </div>
                </div>
                <div className="absolute -inset-4 bg-primary/5 rounded-2xl -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Informações do Projeto */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div>
                  <p className="text-primary font-mono text-sm mb-2">Projeto em Destaque</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    {project.title}
                  </h3>
                </div>

                <div className="bg-background border border-border rounded-xl p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-mono">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Botões Dinâmicos */}
                <div className="flex gap-4">
                  {/* Renderiza o botão do GitHub SOMENTE se existir a URL */}
                  {project.githubUrl && (
                    <Button asChild variant="outline" size="sm" className="border-border hover:border-primary hover:text-primary">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Image src={githubSvg} alt="GitHub" width={16} height={16} className="mr-2 dark:invert" />
                        Código
                      </a>
                    </Button>
                  )}
                  
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Ver Projeto
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Outros Projetos (Cards Menores) */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-foreground text-center mb-8">Outros Trabalhos</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project) => (
                <div key={project.title} className="bg-background border border-border rounded-xl p-6 hover:border-primary/30 transition-colors group animate-in fade-in slide-in-from-bottom-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    
                    <div className="flex gap-4 items-center">
                      {/* Ícone do GitHub apenas se existir */}
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="Ver código">
                          <Image src={githubSvg} alt="GitHub" width={20} height={20} className="opacity-60 hover:opacity-100 transition-opacity dark:invert" />
                        </a>
                      )}
                      
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs text-muted-foreground font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}