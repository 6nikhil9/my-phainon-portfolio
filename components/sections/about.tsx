"use client";
import { motion } from "framer-motion";
import { BrainCircuit, Swords } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-phainon-gold"
      >
        Behind the Code
      </motion.h2>
      
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-2"
        >
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            I am an MCA student standing at the intersection of logic and creativity. Specializing in Java Ecosystems and System Architecture, I view coding not just as syntax, but as a strategic game of efficiency and structure.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Currently, I am sharpening my skills for Google Summer of Code (GSoC) 2026 and exploring the psychology behind user interaction. When I’m not debugging complex loops, I’m likely analyzing social dynamics, training to be physically stronger, or optimizing my own life algorithms.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="glass-panel p-4 rounded-lg flex items-center gap-4 border border-phainon-blue/20">
            <BrainCircuit className="w-8 h-8 text-phainon-blue" />
            <div>
              <h3 className="font-bold font-serif text-white">Hyper-focused</h3>
              <p className="text-sm text-gray-400">I notice details others miss.</p>
            </div>
          </div>
          <div className="glass-panel p-4 rounded-lg flex items-center gap-4 border border-phainon-blue/20">
            <Swords className="w-8 h-8 text-phainon-blue" />
            <div>
              <h3 className="font-bold font-serif text-white">Strategist</h3>
              <p className="text-sm text-gray-400">Psychology & Power Dynamics.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;