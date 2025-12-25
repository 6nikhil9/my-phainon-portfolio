// components/layout/loader.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame } from 'lucide-react';

const ShatterPiece: React.FC = () => {
  const x = (Math.random() - 0.5) * window.innerWidth * 1.5;
  const y = (Math.random() - 0.5) * window.innerHeight * 1.5;
  const rotate = Math.random() * 360 - 180;
  const scale = Math.random() * 0.5 + 0.5;

  return (
    <motion.div
      className="absolute bg-obsidian-dark"
      initial={{ opacity: 1 }}
      animate={{ 
        x, 
        y, 
        rotate,
        scale,
        opacity: 0,
      }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      style={{
        width: '5vw',
        height: '5vh',
      }}
    />
  );
};

const Shatter: React.FC = () => (
  <div className="absolute inset-0 z-20">
    {Array.from({ length: 400 }).map((_, i) => (
      <ShatterPiece key={i} />
    ))}
  </div>
);


const Loader: React.FC<{ onLoadingComplete: () => void }> = ({ onLoadingComplete }) => {
  const [count, setCount] = useState(0);
  const [isShattering, setIsShattering] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev < 12) {
          return prev + 1;
        }
        clearInterval(interval);
        setTimeout(() => {
          setIsShattering(true);
          setTimeout(onLoadingComplete, 1500); // Wait for shatter animation to finish
        }, 500);
        return 12;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-obsidian-dark text-marble-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: isShattering ? 0 : 1 }}
      transition={{ duration: 1.5 }}
    >
      <AnimatePresence>
        {isShattering && <Shatter />}
      </AnimatePresence>

      <AnimatePresence>
        {!isShattering && (
          <motion.div
            className="flex flex-col items-center justify-center"
            exit={{ opacity: 0 }}
          >
            <div className="relative w-24 h-32 mb-4">
              <Flame className="absolute inset-0 w-full h-full text-gray-700" />
              <motion.div
                className="absolute inset-0 w-full h-full text-solar-gold overflow-hidden"
                initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)' }}
                animate={{ clipPath: `polygon(0 100%, 100% 100%, 100% ${100 - (count / 12) * 100}%, 0% ${100 - (count / 12) * 100}%)` }}
                transition={{ duration: 0.2, ease: 'linear' }}
              >
                <Flame className="w-full h-full" />
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-2xl font-serif mb-2">Gathering Coreflame...</h2>
              <p className="text-4xl font-bold text-center text-solar-gold">{count}/12</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Loader;
