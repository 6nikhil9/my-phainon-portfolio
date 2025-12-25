"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVars = {
    initial: { scaleY: 0 },
    animate: {
      scaleY: 1,
      transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] },
    },
    exit: {
      scaleY: 0,
      transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const linkVars = {
    initial: { y: "30vh", transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] } },
    open: { y: 0, transition: { ease: [0, 0.55, 0.45, 1], duration: 0.7 } },
  };

  const containerVars = {
    initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
    open: { transition: { delayChildren: 0.3, staggerChildren: 0.09, staggerDirection: 1 } },
  };

  return (
    <header>
      {/* --- TOGGLE BUTTON --- */}
      <div className="fixed top-5 right-5 z-50 cursor-pointer p-2 rounded-md" onClick={toggleMenu}>
        <div className={`w-8 h-1 bg-accent-gold mb-1 transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></div>
        <div className={`w-8 h-1 bg-accent-gold mb-1 transition-all ${isOpen ? "opacity-0" : ""}`}></div>
        <div className={`w-8 h-1 bg-accent-gold transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
      </div>

      {/* --- FULL SCREEN OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-bg-void text-text-primary flex flex-col justify-center items-center z-40"
          >
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col gap-6 text-center font-serif text-4xl uppercase tracking-widest"
            >
              {navLinks.map((item, index) => (
                <div key={index} className="overflow-hidden">
                    <motion.div variants={linkVars} className="hover:text-accent-gold transition-colors cursor-pointer">
                        <Link href={item.href} onClick={toggleMenu}>
                            {item.name}
                        </Link>
                    </motion.div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
