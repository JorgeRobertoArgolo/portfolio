"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { SKILL_CATEGORIES, SKILLS_DATA, OTHER_SKILLS } from "@/constants/data"

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend")

  return (
    <section id="habilidades" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">O que eu domino</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Habilidades Técnicas</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {SKILL_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-6 py-2.5 rounded-full font-medium text-sm transition-all",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground border border-border hover:border-primary/50"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {SKILLS_DATA[activeCategory as keyof typeof SKILLS_DATA].map((skill, index) => (
            <div
              key={skill.name}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-foreground">{skill.name}</span>
                <span className="text-primary font-mono text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 bg-background rounded-full overflow-hidden">
                <div
                  className="h-full bg-linear-to-r from-primary to-accent rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Outras tecnologias e conhecimentos:</p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {OTHER_SKILLS.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-card border border-border rounded-lg text-muted-foreground text-sm hover:border-primary/50 hover:text-foreground transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}