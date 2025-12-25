"use client";
import { motion } from "framer-motion";
import { Cpu, Globe, Server, UserCheck } from "lucide-react";

const tech = {
  core: {
    title: "Core",
    skills: ["Java (Expert)", "C++", "Python"],
    icon: <Cpu className="w-8 h-8 text-phainon-blue" />,
  },
  web: {
    title: "Web",
    skills: ["HTML5/CSS3", "JavaScript", "React.js", "Tailwind CSS"],
    icon: <Globe className="w-8 h-8 text-phainon-blue" />,
  },
  system: {
    title: "System",
    skills: ["Linux (Command Line)", "Git/GitHub", "DBMS (SQL)"],
    icon: <Server className="w-8 h-8 text-phainon-blue" />,
  },
  soft: {
    title: "Soft Skills",
    skills: ["Strategic Analysis", "Psychology of UX", "Leadership"],
    icon: <UserCheck className="w-8 h-8 text-phainon-blue" />,
  },
};

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
        My Tools
      </motion.h2>
      
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.values(tech).map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-lg border border-phainon-gold/10"
          >
            <div className="flex items-center gap-4 mb-4">
              {category.icon}
              <h3 className="text-2xl font-serif font-bold text-white">{category.title}</h3>
            </div>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li key={skill} className="text-gray-300 font-sans">
                  <span className="text-phainon-blue mr-2">✦</span>{skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
