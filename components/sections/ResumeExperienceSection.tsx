"use client";

import { motion, Variants } from "framer-motion";
import { FileText, Briefcase, ExternalLink } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
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

export default function ResumeExperienceSection() {
  return (
    <AnimatedSection
      id="resume-experience"
      className="min-h-screen flex items-center justify-center px-4 py-32"
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 relative">

          {/* LEFT SIDE - RESUME */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.3 }}
            variants={slideInLeft}
            className="space-y-8"
          >
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                Resume
              </h3>

              <div
                className="bg-gray-800/50 border border-gray-600/50 rounded-t-xl shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 group cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1jLkV3r8SOLL6TNh4JquI8bcJuBhY8_aP/view?usp=drivesdk",
                    "_blank"
                  )
                }
              >
                {/* Window Header */}
                <div className="bg-gray-700/70 border-b border-gray-600/50 rounded-t-xl px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>

                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <FileText size={16} />
                    <span>Resume.pdf</span>
                  </div>

                  <ExternalLink size={16} className="text-gray-400" />
                </div>

                {/* Resume Image Preview */}
                <div className="p-4 bg-white/5 rounded-b-xl group-hover:bg-white/10 transition-all duration-300">
                  <div className="relative w-full aspect-[3/4] bg-white rounded-lg shadow-2xl overflow-hidden">
                    <Image
                      src="/resume/resume-vivvek.png"
                      alt="Resume Preview"
                      fill
                      className="object-contain p-3 bg-white"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-center space-x-2 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">
                      Click to view full resume
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - EXPERIENCE */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.3 }}
            variants={slideInRight}
            className="space-y-8"
          >
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                Work Experience
              </h3>

              <div
                className="bg-gray-800/50 border border-gray-600/50 rounded-t-xl shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 group cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/vivvek-kumar-singh-00543017a",
                    "_blank"
                  )
                }
              >
                {/* Window Header */}
                <div className="bg-gray-700/70 border-b border-gray-600/50 rounded-t-xl px-4 py-3 flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>

                  <span className="text-gray-300 text-sm font-medium">
                    Experience Timeline
                  </span>

                  <ExternalLink size={16} className="text-gray-400" />
                </div>

                {/* Experience Image Preview */}
                <div className="p-4 bg-white/5 rounded-b-xl group-hover:bg-white/10 transition-all duration-300">
                  <div className="relative w-full aspect-[4/3] bg-white rounded-lg shadow-lg overflow-hidden">
                    <Image
                      src="/experience/spark.png"
                      alt="Experience Preview"
                      fill
                      className="object-contain p-4 bg-white"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-center space-x-2 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">
                      View full experience on LinkedIn
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </AnimatedSection>
  );
}
