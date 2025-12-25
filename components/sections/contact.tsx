"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./contact.module.css";

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
        className="max-w-2xl mx-auto"
      >
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-phainon-gold mb-4">
            Initiate Connection
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Whether you wish to discuss complex Java architectures, the GSoC roadmap, or the lore of Amphoreus—my frequency is open.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-phainon-gold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-gray-700 text-white p-2 focus:border-b-2 focus:border-phainon-blue focus:shadow-[0_10px_20px_-10px_rgba(0,240,255,0.3)] focus:outline-none transition-all duration-300"
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
              className="w-full bg-transparent border-b border-gray-700 text-white p-2 focus:border-b-2 focus:border-phainon-blue focus:shadow-[0_10px_20px_-10px_rgba(0,240,255,0.3)] focus:outline-none transition-all duration-300"
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
              rows={4}
              className="w-full bg-transparent border-b border-gray-700 text-white p-2 focus:border-b-2 focus:border-phainon-blue focus:shadow-[0_10px_20px_-10px_rgba(0,240,255,0.3)] focus:outline-none transition-all duration-300"
              placeholder="Your message..."
            />
          </div>
          <div className="text-center pt-4">
            <button 
              type="submit"
              className={`group relative overflow-hidden border border-phainon-gold text-phainon-gold px-8 py-3 rounded-lg font-semibold hover:text-phainon-bg transition-colors duration-300 ${styles['transmit-button']}`}
            >
              <span className="relative z-10">Transmit Message</span>
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}