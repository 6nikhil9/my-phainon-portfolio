import React from 'react';
import styles from './Marquee.module.css';

const Marquee = () => {
  const words = ["JAVA CORE", "SYSTEM DESIGN", "OOP PRINCIPLES", "MCA STUDENT", "OPEN SOURCE ASPIRANT", "STRATEGY & LOGIC"];

  const MarqueeContent = () => (
    <div className="flex items-center">
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <span className={`text-2xl font-serif text-transparent ${styles['text-stroke-gold']} mx-4`}>{word}</span>
          <span className="text-2xl text-phainon-blue animate-pulse mx-4">✦</span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="relative flex overflow-x-hidden border-y border-phainon-gold/20 py-4 bg-phainon-bg">
      <div className="flex whitespace-nowrap animate-marquee">
        <MarqueeContent />
        <MarqueeContent />
      </div>
      <div className="flex whitespace-nowrap animate-marquee absolute top-4 left-0" aria-hidden="true">
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  );
};

export default Marquee;
