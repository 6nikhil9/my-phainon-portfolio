"use client";
import { motion } from "framer-motion";

const marqueeText = "JAVA DEVELOPMENT • FULL STACK • AUTONOMOUS SYSTEMS • UI/UX DESIGN • STRATEGY • ";

export default function Marquee() {
  return (
    <div className="relative w-full overflow-hidden bg-phainon-gold py-3">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex text-phainon-900 font-serif font-bold text-xl tracking-widest"
        >
          {marqueeText.repeat(4)}
        </motion.div>
      </div>
    </div>
  );
}