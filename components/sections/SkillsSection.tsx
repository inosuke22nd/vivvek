"use client";

import { motion, Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variants?: Variants;
}

const AnimatedSection = ({
  children,
  className,
  id,
  variants,
}: AnimatedSectionProps) => (
  <motion.section
    id={id}
    className={className}
    initial="initial"
    whileInView="animate"
    viewport={{ once: false, amount: 0.3 }}
    variants={variants}
  >
    {children}
  </motion.section>
);

// 🔥 Your Business Skills (Emoji Version)
const skills = [
  { name: "Sales & Business Development", icon: "📈" },
  { name: "Client Relationship Management", icon: "🤝" },
  { name: "Digital Marketing & Branding", icon: "📣" },
  { name: "Business Analysis", icon: "📊" },
  { name: "Market Research", icon: "🔍" },
  { name: "Negotiation", icon: "🧠" },
  { name: "Strategic Planning", icon: "♟️" },
  { name: "Leadership & Teamwork", icon: "👥" },
  { name: "Communication & Presentation", icon: "🗣️" },
  { name: "Problem Solving", icon: "🛠️" },
  { name: "Time Management", icon: "⏱️" },
  { name: "Emotional Intelligence", icon: "❤️" },
];

export default function SkillsSection() {
  return (
    <AnimatedSection
      id="skills"
      className="min-h-screen flex items-center justify-center px-4 py-16"
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-white mb-16 text-center"
          variants={fadeInUp}
        >
          Skills & Competencies
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
          variants={staggerContainer}
        >
          {skills.map((item) => (
            <motion.div key={item.name} variants={fadeInUp}>
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/20 group cursor-pointer h-40">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                  
                  {/* Emoji Icon */}
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>

                  {/* Skill Name */}
                  <p className="text-white text-sm font-medium group-hover:text-yellow-300 transition-colors duration-300 px-2">
                    {item.name}
                  </p>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
