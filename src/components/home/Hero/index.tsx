"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowDown, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

import { HERO_ROLES, CONTACT_INFO, SOCIAL_LINKS } from "@/constants/data"

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = HERO_ROLES[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % HERO_ROLES.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  const emailLink = CONTACT_INFO.find(info => info.label === "Email")?.href || "#"

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-background via-background to-card" />
      
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #38BDF8 1px, transparent 1px),
                           linear-gradient(to bottom, #38BDF8 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent/20 rounded-full blur-[128px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Greeting */}
        <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-in">
          Olá, meu nome é
        </p>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 text-balance">
          Jorge Roberto
        </h1>

        {/* Typewriter Role */}
        <div className="h-12 md:h-16 flex items-center justify-center mb-6">
          <span className="text-xl md:text-3xl lg:text-4xl text-muted-foreground font-medium">
            {displayText}
            <span className="animate-pulse text-primary">|</span>
          </span>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed text-pretty">
          Transformo ideias complexas em soluções digitais elegantes. Especializado em criar
          aplicações web escaláveis, APIs robustas e experiências de usuário excepcionais.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
          >
            <a href="#projetos">Ver Projetos</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-border text-foreground hover:bg-card hover:border-primary px-8"
          >
            <a href="#contato">Entrar em Contato</a>
          </Button>
        </div>

        {/* Social Links Dinâmicos */}
        <div className="flex items-center justify-center gap-6">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <Image 
                src={social.icon} 
                alt={social.label} 
                width={24} 
                height={24} 
                className="opacity-70 hover:opacity-100 transition-opacity dark:invert" 
              />
            </a>
          ))}
          
          <a
            href={emailLink}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  )
}