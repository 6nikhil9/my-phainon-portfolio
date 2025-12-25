// components/sections/skills.tsx
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame } from 'lucide-react';

const skillsData = {
  frontend: [
    { name: "React", level: 10 },
    { name: "Next.js", level: 9 },
    { name: "Tailwind CSS", level: 10 },
    { name: "Framer Motion", level: 7 },
  ],
  backend: [
    { name: "Node.js", level: 8 },
    { name: "Express", level: 8 },
    { name: "PostgreSQL", level: 7 },
    { name: "Prisma", level: 6 },
  ],
  general: [
    { name: "TypeScript", level: 9 },
    { name: "Git & GitHub", level: 8 },
    { name: "Docker", level: 5 },
  ],
};

const lineVariants = {
  hover: {
    stroke: "var(--primary)",
    transition: { duration: 0.3 },
  },
  initial: {
    stroke: "var(--primary-dark)",
  }
};

const SkillNode: React.FC<{ name: string; level: number; onHover: (name: string | null) => void }> = ({ name, level, onHover }) => (
  <motion.div
    className="group relative flex flex-col items-center cursor-pointer"
    onHoverStart={() => onHover(name)}
    onHoverEnd={() => onHover(null)}
  >
    <div className="w-24 h-24 rounded-full bg-background border-2 border-primary flex items-center justify-center text-center transition-all duration-300 group-hover:border-accent group-hover:shadow-[0_0_15px_var(--accent)]">
      <span className="font-sans text-foreground text-sm px-2">{name}</span>
    </div>
    <AnimatePresence>
      <motion.div
        className="absolute bottom-full mb-2 w-max px-3 py-1.5 bg-accent text-foreground text-xs rounded-md shadow-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
      >
        Level: {level}/10
      </motion.div>
    </AnimatePresence>
  </motion.div>
);

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const renderBranch = (title: string, skills: typeof skillsData.frontend) => {
    const skillNames = skills.map(s => s.name);
    return (
      <div>
        <h3 className="text-3xl font-serif text-center mb-12 text-primary-dark">{title}</h3>
        <div className="flex justify-around items-center relative h-24">
          <svg className="absolute top-0 left-0 w-full h-full" style={{ zIndex: -1 }}>
            {skills.slice(0, -1).map((_, i) => {
              const isHovered = hoveredSkill === skillNames[i] || hoveredSkill === skillNames[i+1];
              return (
                <motion.line
                  key={i}
                  x1={`${(i + 0.5) / skills.length * 100}%`}
                  y1="50%"
                  x2={`${(i + 1.5) / skills.length * 100}%`}
                  y2="50%"
                  strokeWidth="3"
                  variants={lineVariants}
                  initial="initial"
                  animate={isHovered ? "hover" : "initial"}
                />
              );
            })}
          </svg>
          {skills.map((skill) => (
            <SkillNode key={skill.name} name={skill.name} level={skill.level} onHover={setHoveredSkill} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-serif text-center mb-24 text-primary drop-shadow-[0_0_8px_var(--primary)] flex items-center justify-center gap-4">
          <Flame size={40} /> Trace Tree <Flame size={40} />
        </h2>

        <div className="max-w-5xl mx-auto space-y-24">
          {renderBranch("Frontend Traces", skillsData.frontend)}
          {renderBranch("Backend Traces", skillsData.backend)}
          {renderBranch("General Traces", skillsData.general)}
        </div>
      </div>
    </section>
  );
};

export default Skills;