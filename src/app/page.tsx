import { Header } from "@/components/shared/Header"
import { Footer } from "@/components/shared/Footer"

import { Hero } from "@/components/home/Hero"
import { About } from "@/components/home/About"
import { Skills } from "@/components/home/Skills"
import { Projects } from "@/components/home/Projects"
import { Contact } from "@/components/home/Contact"


export default function Portfolio() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
