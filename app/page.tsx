import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import Marquee from "@/components/Marquee";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/Experience";
import TechStack from "@/components/sections/TechStack";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen relative">
       {/* Global background grain/texture could go here */}
       <Navbar />
       <Hero />
       <Marquee />
       <About />
       <Projects />
       <Experience />
       <TechStack />
       <Contact />
       
       <footer className="py-6 text-center text-gray-600 text-sm border-t border-phainon-gold/10 mt-10">
          © 2025 [Your Name]. Built with discipline and code.
       </footer>
    </main>
  );
}