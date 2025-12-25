"use client";
import { Briefcase, Star } from "lucide-react";
import { motion } from "framer-motion";

const experience = [
  {
    role: "Open Source Aspirant (GSoC 2026)",
    company: "Open Source Contributions",
    date: "Dec 2025 – Present",
    desc: "Currently architecting a roadmap to contribute to major Java/Linux organizations. Deep diving into large codebases and version control mastery.",
  },
  {
    role: "Master of Computer Applications (MCA)",
    company: "Group 1 University",
    date: "2024 – 2026",
    desc: "Focusing on Database Management Systems (DBMS), Operating Systems, and Advanced Java. Building a foundation for enterprise-level development.",
  },
  {
    role: "Java Developer Trainee (Self-Paced)",
    company: "Self-Study",
    date: "2024",
    desc: "Mastered Core Java, Collections Framework, and Multithreading. Completed projects involving GUI development and algorithmic problem solving.",
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-serif font-bold text-center mb-20 text-phainon-gold"
      >
        The Path
      </motion.h2>
      
      <div className="relative max-w-3xl mx-auto">
        {/* The Vertical Line */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-phainon-gold/50 via-phainon-blue/50 to-phainon-bg" />

        {experience.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="relative pl-12 mb-12"
          >
            {/* Timeline Star */}
            <div className="absolute -left-1 top-0">
                <Star className="h-10 w-10 text-phainon-gold fill-phainon-gold/30" style={{filter: "drop-shadow(0 0 5px theme(colors.phainon-gold))"}} />
            </div>
            
            <div className="glass-panel p-6 rounded-lg border border-phainon-gold/10 hover:border-phainon-gold/30 transition-colors duration-300">
              <h3 className="text-xl font-bold font-serif text-white flex items-center gap-2">
                <Briefcase size={18} className="text-phainon-blue" />
                {exp.role}
              </h3>
              <span className="text-sm text-phainon-gold block my-1">{exp.company} | {exp.date}</span>
              <p className="text-gray-400 text-base">
                {exp.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}