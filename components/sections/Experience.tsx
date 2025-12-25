"use client";
import { Briefcase } from "lucide-react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from "framer-motion";
import './experience.module.css';

const experience = [
  {
    role: "Machine Learning Intern (2024)",
    company: "Unified Mentor",
    date: "Oct 2024",
    desc: "Learned and applied core machine learning concepts including supervised and unsupervised learning. Built basic models such as Linear Regression, Logistic Regression, KNN, and Decision Trees",
  },
  {
    role: "Master of Computer Applications (MCA)",
    company: "Group 1 University",
    date: "2025 – 2027",
    desc: "Focusing on Database Management Systems (DBMS), Operating Systems, and Advanced Java. Building a foundation for enterprise-level development.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-serif font-bold text-center mb-20 text-phainon-gold"
      >
        The Path
      </motion.h2>
      
      <VerticalTimeline>
        {experience.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'transparent', boxShadow: 'none', border: 'none' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(212, 175, 55, 0.2)' }}
            date={exp.date}
            iconStyle={{ background: '#0a0e17', color: '#00F0FF', boxShadow: '0 0 15px #D4AF37' }}
            icon={<Briefcase />}
          >
            <h3 className="text-xl font-bold font-serif text-white">
              {exp.role}
            </h3>
            <h4 className="text-md font-bold text-phainon-gold my-1">{exp.company}</h4>
            <p className="text-gray-400">
              {exp.desc}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}