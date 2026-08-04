import StarryBackground from "@/components/StarryBackground";
import FloatingCursor from "@/components/FloatingCursor";
import { Hero } from "@/sections/Hero";
import { WorkExperience } from "@/sections/WorkExperience";
import { Education } from "@/sections/Education";
import { Skills } from "@/sections/Skills";
// import { LeetCode } from "@/sections/LeetCode";
import { GitHub } from "@/sections/GitHub";
import { Contact } from "@/sections/Contact";
import { Challenges } from "@/sections/Challenges";
import { Projects } from "@/sections/Projects";
import { Chatbot } from "@/components/Chatbot";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <StarryBackground />
      <FloatingCursor />
      <div className="relative z-10 ">
        <Hero />
        <WorkExperience />
        <Education />
        <Skills />
        <Projects />
        {/* <LeetCode /> */}
        <GitHub />
        <Challenges />
        <Contact />
      </div>
      <Chatbot />
      <ScrollToTop />
    </>
  );
}
