"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // Here you would typically send the data to a backend or email service
    alert("Transmission sent! (Check the console for data)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="glass-panel border border-phainon-gold/20 rounded-2xl p-8 md:p-12 max-w-2xl mx-auto"
      >
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-phainon-gold mb-4">
            Initiate Connection
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Whether you wish to discuss complex Java architectures, the GSoC roadmap, or the lore of Amphoreus—my frequency is open.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-phainon-gold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-phainon-bg/50 border border-phainon-gold/30 rounded-lg p-3 text-white focus:ring-2 focus:ring-phainon-blue focus:border-phainon-blue transition-all duration-300"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-phainon-gold mb-2">Signal (Email)</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-phainon-bg/50 border border-phainon-gold/30 rounded-lg p-3 text-white focus:ring-2 focus:ring-phainon-blue focus:border-phainon-blue transition-all duration-300"
              placeholder="your.signal@domain.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-phainon-gold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-phainon-bg/50 border border-phainon-gold/30 rounded-lg p-3 text-white focus:ring-2 focus:ring-phainon-blue focus:border-phainon-blue transition-all duration-300"
              placeholder="Your message..."
            />
          </div>
          <div className="text-center">
            <button 
              type="submit"
              className="p-0.5 rounded-lg bg-gradient-to-r from-phainon-gold to-phainon-blue hover:from-phainon-blue hover:to-phainon-gold transition-all group inline-block"
            >
              <span className="block px-8 py-3 font-semibold text-lg bg-phainon-bg text-white rounded-md">
                  Transmit Message
              </span>
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}