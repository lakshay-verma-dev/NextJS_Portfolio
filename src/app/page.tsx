import StarryBackground from "@/components/StarryBackground";
import FloatingCursor from "@/components/FloatingCursor"; // ✅ import here
import { Hero } from "@/sections/Hero";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { LeetCode } from "@/sections/LeetCode";
import { GitHub } from "@/sections/GitHub";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <StarryBackground />
      <FloatingCursor /> {/* ✅ add this */}
      <div className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <LeetCode />
        <GitHub />
        <Contact />
      </div>
    </>
  );
}
