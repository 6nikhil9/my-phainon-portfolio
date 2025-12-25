import React from 'react';

const Marquee = () => {
  const marqueeText = "JAVA CORE ✦ SYSTEM DESIGN ✦ OOP PRINCIPLES ✦ MCA STUDENT ✦ OPEN SOURCE ASPIRANT ✦ STRATEGY & LOGIC ✦";
  const repeatedText = Array(4).fill(marqueeText).join(" ");

  return (
    <div className="relative flex overflow-x-hidden border-y border-phainon-gold/50 py-4 bg-phainon-bg">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-2xl mx-4 font-serif text-phainon-gold/80">{repeatedText}</span>
      </div>
      <div className="flex whitespace-nowrap animate-marquee absolute top-4">
        <span className="text-2xl mx-4 font-serif text-phainon-gold/80">{repeatedText}</span>
      </div>
    </div>
  );
};

export default Marquee;
