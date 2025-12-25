// components/effects/fire-particles.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Particle: React.FC = () => {
  const x = (Math.random() - 0.5) * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  const duration = Math.random() * 1.5 + 0.5;

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        backgroundColor: Math.random() > 0.5 ? 'var(--primary)' : 'var(--accent)',
        width: `${Math.random() * 5 + 2}px`,
        height: `${Math.random() * 5 + 2}px`,
        left: `${Math.random() * 100}%`,
        top: '-10px',
      }}
      animate={{
        y: y,
        x: x,
        opacity: [1, 0.8, 0],
      }}
      transition={{ duration, ease: "easeOut" }}
    />
  );
};

const FireParticles: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[101] pointer-events-none">
      {Array.from({ length: 100 }).map((_, i) => (
        <Particle key={i} />
      ))}
    </div>
  );
};

export default FireParticles;
