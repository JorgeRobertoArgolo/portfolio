import Image from "next/image"
import { Heart } from "lucide-react"

// Importação dos SVGs locais
import githubSvg from "@/assets/github.svg"
import linkedinSvg from "@/assets/linkedin.svg"

const socialLinks = [
  { icon: githubSvg, href: "https://github.com/JorgeRobertoArgolo", label: "GitHub" },
  { icon: linkedinSvg, href: "https://www.linkedin.com/in/jorge-roberto-argolo/", label: "LinkedIn" },
]

const footerLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a
              href="#inicio"
              className="text-xl font-bold text-foreground hover:text-primary transition-colors inline-block mb-3"
            >
              <span className="text-primary">&lt;</span>
              Dev
              <span className="text-primary">/&gt;</span>
            </a>
            <p className="text-muted-foreground text-sm">
              © {currentYear} Jorge Roberto
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center hover:border-primary transition-colors group"
                aria-label={social.label}
              >
                <Image 
                  src={social.icon} 
                  alt={social.label} 
                  width={20} 
                  height={20} 
                  className="opacity-70 group-hover:opacity-100 transition-opacity dark:invert" 
                />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
            Feito com muito código
          </p>
        </div>
      </div>
    </footer>
  )
}