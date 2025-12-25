"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react"; // Using a generic icon for all skills

const skills = [
  "Java", "C", "C++", "Python", 
  "HTML5/CSS3", "JavaScript", "React.js", "Tailwind CSS",
  "Git/GitHub",
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-24 px-4">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-phainon-gold"
      >
        Skill Constellation
      </motion.h2>
      
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group flex items-center gap-3 bg-phainon-bg/30 p-4 rounded-full border border-white/10"
          >
            <div className="relative">
              <Star className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
              <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 ring-1 ring-phainon-blue shadow-[0_0_15px_#00F0FF] transition-opacity duration-300" />
            </div>
            <span className="text-gray-300 font-sans">{skill}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
