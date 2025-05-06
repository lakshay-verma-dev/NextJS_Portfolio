import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { LeetCode } from "@/sections/LeetCode";
import { GitHub } from "@/sections/GitHub";
import { Services } from "@/sections/Services";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <LeetCode />
      <GitHub />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}