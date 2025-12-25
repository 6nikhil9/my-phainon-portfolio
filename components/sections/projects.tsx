"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Eco-Map Initiative",
    tagline: "Bringing visibility to urban waste management.",
    description: "A geolocation-based web application that allows users to map and report road garbage. Features real-time image uploading and location pinning to streamline civic cleanup efforts.",
    tags: ["Java Spring Boot", "React", "Google Maps API"],
    link: "#",
    github: "#",
  },
  {
    title: "The OOPs Core",
    tagline: "A visualization of pure logic.",
    description: "A custom-built engine demonstrating advanced Object-Oriented Principles (Polymorphism, Inheritance) in real-time. Built to master the fundamentals of software architecture.",
    tags: ["Core Java", "Swing/AWT", "JUnit"],
    link: "#",
    github: "#",
  },
  {
    title: "Project Phainon",
    tagline: "A digital sanctuary inspired by Celestial aesthetics.",
    description: "A high-performance portfolio site using Glassmorphism and 3D animations, aimed at combining clean UI with a 'Worldbearing' aesthetic.",
    tags: ["Next.js 14", "Tailwind CSS", "Framer Motion"],
    link: "#",
    github: "#",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-phainon-gold"
      >
        The Arsenal
      </motion.h2>
      
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-phainon-bg/40 backdrop-blur-md border border-white/5 rounded-xl overflow-hidden 
                       hover:border-phainon-gold/50 hover:shadow-[inset_0_0_20px_rgba(212,175,55,0.1)] hover:-translate-y-2 transition-all duration-300"
          >
            <div className="relative h-48">
              <div className="absolute inset-0 bg-gradient-to-br from-phainon-bg via-phainon-blue/10 to-phainon-bg" />
              <div className="absolute inset-0 bg-phainon-gold/30 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold font-serif text-phainon-gold mb-1">
                {project.title}
              </h3>
              <p className="text-phainon-blue text-sm mb-3 font-sans italic">"{project.tagline}"</p>
              <p className="text-gray-400 text-sm mb-4 h-16 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-phainon-blue/10 text-phainon-blue border border-phainon-blue/20">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 pt-2">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-phainon-gold transition-colors"><Github size={20}/></a>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-phainon-gold transition-colors"><ExternalLink size={20}/></a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}