import React, { useState, useEffect } from 'react';
import { Sparkles, Code, User, Send, ExternalLink, Zap, Star, Hexagon, ChevronRight, Monitor, Cpu } from 'lucide-react';

// --- HSR UI COMPONENTS ---

// The skewed button found everywhere in game
const HSRButton = ({ children, active, onClick, icon: Icon }) => (
  <button
    onClick={onClick}
    className={`
      relative group flex items-center gap-2 px-6 py-2 transition-all duration-300
      ${active 
        ? 'text-black bg-white' 
        : 'text-white hover:text-black hover:bg-white/90 bg-black/40'}
      transform -skew-x-12 border border-white/30 hover:border-white
    `}
  >
    <div className="transform skew-x-12 flex items-center gap-2 font-bold tracking-wider uppercase text-sm">
      {Icon && <Icon size={16} />}
      {children}
    </div>
    {/* Decorative corner bit */}
    {active && (
      <div className="absolute -right-1 -top-1 w-2 h-2 bg-yellow-400 transform skew-x-12" />
    )}
  </button>
);

// A container with the sci-fi tech borders
const TechCard = ({ children, title, subtitle, delay = 0 }) => (
  <div 
    className="relative bg-black/60 backdrop-blur-md border border-white/10 p-6 overflow-hidden animate-slide-up"
    style={{ animationDelay: `${delay}ms` }}
  >
    {/* Decorative Corners */}
    <div className="absolute top-0 left-0 w-4 h-1 bg-white/50" />
    <div className="absolute top-0 left-0 w-1 h-4 bg-white/50" />
    <div className="absolute bottom-0 right-0 w-4 h-1 bg-yellow-500" />
    <div className="absolute bottom-0 right-0 w-1 h-4 bg-yellow-500" />
    
    {/* Header */}
    <div className="mb-6 border-b border-white/10 pb-2 flex justify-between items-end">
      <div>
        <h3 className="text-xl text-white font-bold uppercase tracking-widest">{title}</h3>
        {subtitle && <p className="text-xs text-yellow-500 font-mono mt-1">{subtitle}</p>}
      </div>
      <div className="flex gap-1">
        {[1,2,3].map(i => <div key={i} className="w-1 h-1 bg-white/30 rounded-full" />)}
      </div>
    </div>
    
    {children}
  </div>
);

// Skill "Traces" Node
const TraceNode = ({ icon: Icon, label, level }) => (
  <div className="flex flex-col items-center group cursor-pointer">
    <div className="relative w-16 h-16 rounded-full border-2 border-white/20 bg-black/40 flex items-center justify-center transition-all duration-300 group-hover:border-yellow-400 group-hover:scale-110 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
      <div className="absolute inset-0 rounded-full border border-white/10 m-1" />
      <Icon className="text-white/80 group-hover:text-yellow-400 transition-colors" size={24} />
    </div>
    <div className="mt-3 text-center">
      <p className="text-xs text-gray-400 font-mono uppercase tracking-widest mb-1">Lv. {level}</p>
      <p className="text-sm text-white font-bold">{label}</p>
    </div>
  </div>
);

// "Light Cone" Project Card
const LightConeCard = ({ title, type, desc, tags }) => (
  <div className="group relative h-64 bg-gradient-to-b from-gray-900 to-black border border-white/10 hover:border-yellow-500/50 transition-all duration-300 overflow-hidden cursor-pointer">
    {/* Image Placeholder with Parallax effect */}
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 group-hover:opacity-40 transition-opacity" />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
    
    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
      <div className="flex items-center gap-2 mb-2">
         <Star className="text-yellow-500 fill-yellow-500" size={12} />
         <Star className="text-yellow-500 fill-yellow-500" size={12} />
         <Star className="text-yellow-500 fill-yellow-500" size={12} />
         <Star className="text-yellow-500 fill-yellow-500" size={12} />
         <Star className="text-yellow-500 fill-yellow-500" size={12} />
      </div>
      <span className="text-xs font-mono text-yellow-500 uppercase tracking-widest block mb-1">{type}</span>
      <h4 className="text-xl text-white font-bold mb-2 italic">{title}</h4>
      <p className="text-gray-400 text-sm line-clamp-2 mb-4">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase border border-white/20 px-2 py-1 text-gray-300 rounded-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
    
    {/* Path Icon Overlay */}
    <div className="absolute top-4 right-4 text-white/10 group-hover:text-white/20 transition-colors">
      <Hexagon size={48} />
    </div>
  </div>
);

export default function HSRPortfolio() {
  const [activeTab, setActiveTab] = useState('profile');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Parallax background effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-void-black-darker text-white font-sans overflow-x-hidden selection:bg-yellow-500 selection:text-black">
      {/* Animated Background Layers */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{ 
          background: `radial-gradient(circle at 50% 50%, #1a1d2e 0%, #0b0c15 100%)`,
        }}
      >
        {/* Stars / Particles */}
        <div className="absolute inset-0 opacity-30" 
             style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
        </div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 animate-pulse"></div>
        
        {/* Moving Nebula */}
        <div 
          className="absolute top-[-20%] right-[-20%] w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[100px]"
          style={{ transform: `translate(${-mousePos.x}px, ${mousePos.y}px)` }}
        />
        <div 
          className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px]"
          style={{ transform: `translate(${mousePos.x}px, ${-mousePos.y}px)` }}
        />
      </div>

      {/* Main UI Container */}
      <div className="relative z-10 max-w-7xl mx-auto p-4 md:p-8 h-screen flex flex-col">
        
        {/* Top Navigation Bar */}
        <header className="flex justify-between items-center mb-12 animate-fade-in-down">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-bold text-xl rounded-sm transform rotate-45 border-2 border-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]">
              <span className="transform -rotate-45">P</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold italic tracking-wide">PHAINON</h1>
              <div className="text-[10px] text-yellow-500 tracking-[0.3em] uppercase">Full-Stack Developer</div>
            </div>
          </div>
          
          {/* Menu Items (Desktop) */}
          <nav className="hidden md:flex gap-4">
            <HSRButton active={activeTab === 'profile'} onClick={() => setActiveTab('profile')} icon={User}>Profile</HSRButton>
            <HSRButton active={activeTab === 'projects'} onClick={() => setActiveTab('projects')} icon={Code}>Projects</HSRButton>
            <HSRButton active={activeTab === 'contact'} onClick={() => setActiveTab('contact')} icon={Send}>Message</HSRButton>
          </nav>
        </header>

        {/* Content Area */}
        <main className="grid grid-cols-1 lg:grid-cols-4 gap-8 flex-1">
          
          {/* Left Sidebar (Character Stats) - Always visible */}
          <div className="hidden lg:block lg:col-span-1 animate-slide-right">
            <TechCard title="Core Competencies" subtitle="TECHNICAL SKILLS">
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-gray-400 text-sm">Frontend</span>
                  <div className="flex items-center gap-2 text-yellow-500 font-bold">
                    <Monitor size={14} /> React/Next.js
                  </div>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-gray-400 text-sm">Backend</span>
                  <div className="flex items-center gap-2 text-purple-400 font-bold">
                    <Zap size={14} /> Node.js/Express
                  </div>
                </div>
                
                <div className="pt-4 space-y-3">
                   <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Frontend</span>
                      <span className="text-white">90%</span>
                   </div>
                   <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full w-[90%] bg-white" />
                   </div>

                   <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Backend</span>
                      <span className="text-white">85%</span>
                   </div>
                   <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-yellow-500" />
                   </div>

                   <div className="flex justify-between text-sm">
                      <span className="text-gray-400">DevOps</span>
                      <span className="text-white">75%</span>
                   </div>
                   <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full w-[75%] bg-blue-400" />
                   </div>
                </div>
              </div>
            </TechCard>
            
            <div className="mt-4">
               <TechCard title="Current Status" subtitle="ONILNE">
                  <p className="text-sm text-gray-300 italic">"Rules are made to be broken, and code is made to be refactored."</p>
               </TechCard>
            </div>
          </div>

          {/* Center Dynamic Content */}
          <div className="lg:col-span-3 overflow-y-auto pr-2 pb-20 custom-scrollbar">
            
            {activeTab === 'profile' && (
              <div className="space-y-6">
                {/* Hero Section */}
                <div className="relative h-64 md:h-80 w-full bg-gradient-to-r from-gray-900 to-transparent border border-white/10 flex items-center p-8 md:p-12 overflow-hidden group">
                  <div className="absolute right-[-50px] top-[-50px] w-64 h-64 bg-yellow-500/20 rounded-full blur-[80px] group-hover:bg-yellow-500/30 transition-all duration-700" />
                  <div className="relative z-10 max-w-lg">
                    <div className="inline-block px-3 py-1 border border-yellow-500/50 text-yellow-500 text-xs font-mono mb-4 bg-yellow-900/20">
                      FULL-STACK DEVELOPER
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black italic mb-4 leading-tight">
                      CRAFTING DIGITAL <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">EXPERIENCES</span>
                    </h2>
                    <p className="text-gray-300 text-lg mb-6 max-w-md">
                      Specializing in full-stack architecture and immersive UI experiences. Warp into my digital universe.
                    </p>
                    <button className="bg-white text-black font-bold uppercase py-3 px-8 text-sm tracking-widest hover:bg-yellow-400 transition-colors clip-path-slant">
                      View Resume
                    </button>
                  </div>
                </div>

                {/* Skills */}
                <TechCard title="Skills" subtitle="MY SKILLSET" delay={200}>
                  <div className="flex flex-wrap justify-center gap-8 py-8">
                    <TraceNode icon={Code} label="React JS" level={10} />
                    <TraceNode icon={Cpu} label="Node.js" level={8} />
                    <TraceNode icon={Zap} label="Tailwind" level={9} />
                    <TraceNode icon={Hexagon} label="Python" level={7} />
                    <TraceNode icon={Monitor} label="UX Design" level={8} />
                  </div>
                  <div className="text-center text-xs text-gray-500 mt-4 font-mono">
                    Continuously learning and improving my skills.
                  </div>
                </TechCard>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                 <LightConeCard 
                    title="The Neural Cloud"
                    type="FULL STACK APP"
                    desc="A comprehensive dashboard for monitoring AI agents in real-time. Built with Next.js and Firebase."
                    tags={['React', 'AI', 'Tailwind']}
                 />
                 <LightConeCard 
                    title="Stellar Commerce"
                    type="E-COMMERCE"
                    desc="High performance headless e-commerce platform designed for selling digital assets across the galaxy."
                    tags={['Shopify', 'Hydrogen', 'GraphQL']}
                 />
                 <LightConeCard 
                    title="Quantum Chat"
                    type="REALTIME COMM"
                    desc="End-to-end encrypted messaging service with zero latency protocols."
                    tags={['WebSockets', 'Redis', 'Docker']}
                 />
                 <LightConeCard 
                    title="Aether Lens"
                    type="VISUALIZATION"
                    desc="3D data visualization tool for analyzing complex datasets using WebGL."
                    tags={['Three.js', 'D3', 'WebGL']}
                 />
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="max-w-2xl mx-auto animate-fade-in">
                 <TechCard title="Contact Me" subtitle="GET IN TOUCH">
                    <div className="space-y-4">
                       <div className="bg-black/40 border border-white/10 p-4">
                          <label className="block text-xs text-yellow-500 uppercase tracking-widest mb-2">Your Email</label>
                          <input type="email" placeholder="trailblazer@astral.express" className="w-full bg-transparent border-none outline-none text-white placeholder-gray-600 font-mono" />
                       </div>
                       <div className="bg-black/40 border border-white/10 p-4 h-40">
                          <label className="block text-xs text-yellow-500 uppercase tracking-widest mb-2">Your Message</label>
                          <textarea placeholder="Write your message here..." className="w-full h-full bg-transparent border-none outline-none text-white placeholder-gray-600 resize-none font-mono" />
                       </div>
                       <div className="flex justify-end">
                          <button className="flex items-center gap-2 bg-white text-black px-8 py-3 font-bold uppercase tracking-widest hover:bg-yellow-400 transition-colors clip-path-slant">
                             <Send size={16} /> Send Message
                          </button>
                       </div>
                    </div>
                 </TechCard>
                 
                 <div className="mt-8 grid grid-cols-2 gap-4">
                    <a href="#" className="flex items-center justify-between p-4 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                       <span className="font-mono text-sm">GITHUB_LINK</span>
                       <ExternalLink size={16} className="text-gray-400" />
                    </a>
                    <a href="#" className="flex items-center justify-between p-4 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                       <span className="font-mono text-sm">LINKEDIN_CONNECTION</span>
                       <ExternalLink size={16} className="text-gray-400" />
                    </a>
                 </div>
              </div>
            )}

          </div>
        </main>
      </div>
      
      {/* Mobile Nav (Bottom) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-white/10 p-4 flex justify-around z-50">
          <button onClick={() => setActiveTab('profile')} className={`flex flex-col items-center ${activeTab === 'profile' ? 'text-yellow-500' : 'text-gray-400'}`}>
            <User size={20} />
            <span className="text-[10px] uppercase mt-1">Profile</span>
          </button>
          <button onClick={() => setActiveTab('projects')} className={`flex flex-col items-center ${activeTab === 'projects' ? 'text-yellow-500' : 'text-gray-400'}`}>
            <Code size={20} />
            <span className="text-[10px] uppercase mt-1">Projects</span>
          </button>
          <button onClick={() => setActiveTab('contact')} className={`flex flex-col items-center ${activeTab === 'contact' ? 'text-yellow-500' : 'text-gray-400'}`}>
            <Send size={20} />
            <span className="text-[10px] uppercase mt-1">Chat</span>
          </button>
      </div>
    </div>
  );
}
