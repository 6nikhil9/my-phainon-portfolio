"use client";

import { motion, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { useMousePosition } from "@/hooks/use-mouse-position";

interface HeroProps {
  // Define any props if needed
}

const Hero: React.FC<HeroProps> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { mouseX, mouseY } = useMousePosition(ref);

  // Parallax for the halo
  const springConfig = { stiffness: 100, damping: 30, mass: 1 };
  const translateX = useSpring(useTransform(mouseX, [0, 1], [-50, 50]), springConfig);
  const translateY = useSpring(useTransform(mouseY, [0, 1], [-50, 50]), springConfig);

  return (
    <section 
      ref={ref} 
      className="relative flex items-center justify-center min-h-screen bg-bg-void overflow-hidden"
    >
      {/* Halo Effect */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-br from-accent-gold/40 to-transparent blur-3xl opacity-30 animate-spin-slow"
        style={{
          x: translateX,
          y: translateY,
        }}
      ></motion.div>
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-accent-cyan/30 to-transparent blur-3xl opacity-20 animate-reverse-spin"
        style={{
          x: translateX,
          y: translateY,
        }}
      ></motion.div>

      <div className="relative z-10 text-center flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-7xl md:text-8xl lg:text-9xl font-serif font-bold mb-4 text-text-primary uppercase drop-shadow-lg"
          style={{
            background: 'var(--color-text-gold)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          The Cycle Ends Here.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-text-muted font-sans mb-8 max-w-2xl"
        >
          I build web experiences that last.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="px-8 py-3 bg-gradient-to-r from-accent-gold-dim to-accent-gold text-bg-void font-bold rounded-md tracking-wider uppercase shadow-gold-glow
                     hover:from-accent-gold hover:to-accent-gold-dim hover:scale-105 transition-all duration-300 transform-gpu"
        >
          Initiate Protocol (Download Resume)
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;