// src/app/page.tsx
import { Hero } from "@/sections/Hero"
import { About } from "@/sections/About"
import { Projects } from "@/sections/Projects"
import { Skills } from "@/sections/Skills"
import { Contact } from "@/sections/Contact"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-20">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}
