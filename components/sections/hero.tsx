"use client";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-phainon-gold/10 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-phainon-blue/10 rounded-full blur-[150px] animate-pulse animation-delay-2000" />

      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 relative z-10">
        <div className="mr-auto place-self-center lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl font-sans text-phainon-blue mb-2">Hello, I am [Your Name].</h2>
            <h1 className="max-w-2xl mb-4 text-4xl font-serif font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
              <TypeAnimation
                sequence={[
                  "Architect of Digital Systems & Logic.",
                  2000,
                  "MCA Scholar | Java Specialist.",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-transparent bg-clip-text bg-gradient-to-r from-phainon-gold to-phainon-blue h-20 md:h-28 block"
                repeat={Infinity}
              />
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl font-sans">
              Forging robust back-end systems with the precision of Java and the fluidity of modern web technologies. I bring order to chaos.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="#projects">
              <button className="p-0.5 rounded-lg bg-gradient-to-r from-phainon-gold to-phainon-blue hover:from-phainon-blue hover:to-phainon-gold transition-all">
                  <span className="block px-5 py-3 font-medium bg-phainon-bg text-white rounded-md">
                      View My Arsenal
                  </span>
              </button>
            </Link>

            <a href="/resume.pdf" target="_blank" className="relative inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-phainon-gold rounded-lg hover:bg-phainon-gold/10 focus:ring-4 focus:ring-gray-800 transition-all group">
              <Download className="mr-2 w-4 h-4 transition-transform group-hover:-rotate-12" /> Acquire Data
            </a>
          </motion.div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex relative items-center justify-center">
          {/* Phainon Halo Animation */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[350px] h-[350px] border-2 border-phainon-gold/30 rounded-full border-dashed"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute w-[450px] h-[450px] border border-phainon-blue/20 rounded-full"
          />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            className="absolute w-[550px] h-[550px] border-2 border-phainon-gold/10 rounded-full border-dashed"
          />
          {/* Placeholder for your profile picture */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-phainon-gold/50 shadow-[0_0_50px_rgba(212,175,55,0.4)] 
                       bg-gradient-to-br from-phainon-bg via-phainon-blue/10 to-phainon-bg"
          >
             {/* You can place an <Image> component here */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}