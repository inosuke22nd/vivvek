"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

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

export default function AboutSection() {
  return (
    <AnimatedSection
      id="about"
      className="min-h-screen flex flex-col justify-center px-4 py-16"
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-white mb-12 text-left"
          variants={fadeInUp}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">

          {/* LEFT SIDE - PROFILE PHOTO */}
          <motion.div variants={slideInLeft}>
            <div className="w-80 h-80 relative">
              
              <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-400/20 to-amber-500/20 border border-white/10 shadow-2xl">
                
                <Image
                  src="/images/profile-photo.jpg"
                  alt="Vivvek Profile"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />

              </div>

              {/* Decorative dots */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-500 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-amber-500 rounded-full opacity-40"></div>
            </div>
          </motion.div>

          {/* RIGHT SIDE CONTENT */}
          <motion.div
            className="flex-1 space-y-6 text-left"
            variants={slideInRight}
          >

            <motion.blockquote
              className="text-xl italic text-gray-300 border-l-4 border-yellow-500 pl-6 mb-8"
              variants={fadeInUp}
            >
              “The best way to predict the future is to invent it.”
              <span className="block mt-2 text-gray-400 text-sm not-italic">
                – Alan Kay
              </span>
            </motion.blockquote>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed"
              variants={fadeInUp}
            >
              I am a dedicated and growth-oriented professional currently serving as a Senior Executive at Spark Minda, one of India’s leading automotive components manufacturers.
               I am passionate about integrating data-driven insights into business outcomes and consistently contribute to business analysis, market research, and strategic sales support.

            </motion.p>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed"
              variants={fadeInUp}
            >
              In my current role, I conduct thorough market research to identify industry trends, competitor movements, and emerging opportunities.
               I use structured business analysis frameworks to support strategic decision-making and collaborate with cross-functional teams to align insights with sales and business objectives.
.
            </motion.p>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed"
              variants={fadeInUp}
            >
            My work focuses on optimizing business processes and enabling data-informed decisions that improve operational efficiency and measurable performance outcomes.
             I continuously strive to bridge the gap between analysis and execution, ensuring insights translate into real business value.

            </motion.p>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed"
              variants={fadeInUp}
            >
             Looking ahead, I aim to further strengthen my expertise in strategic business analysis, sales leadership, and market intelligence.
              I am committed to continuous learning, professional growth, and contributing meaningfully to organizational success.

            </motion.p>

          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
