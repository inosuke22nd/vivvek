"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Trophy, Award } from "lucide-react";
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

export default function AchievementSection() {
  return (
    <AnimatedSection
      id="achievement"
      className="min-h-screen flex items-center justify-center px-4 py-16"
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-white mb-16 text-center"
          variants={fadeInUp}
        >
          Achievements
        </motion.h2>

        {/* First Achievement */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center"
          variants={fadeInUp}
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.3 }}
            variants={slideInLeft}
            className="order-2 lg:order-1"
          >
            <div className="relative group">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-blue-500/25">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white/5 border border-white/10">
                  <Image
                    src="/achievements/vivek.jpg"
                    alt="Best Employee Award"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ objectFit: "cover" }}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const nextElement = e.currentTarget
                        .nextElementSibling as HTMLElement;
                      if (nextElement) nextElement.style.display = "flex";
                    }}
                  />
                  <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex-col">
                    <Trophy size={64} className="text-white/80 mb-4" />
                    <p className="text-white/80 text-lg font-medium">
                      Achievement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.3 }}
            variants={slideInRight}
            className="order-1 lg:order-2"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <Trophy size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Emerging Young Spark Award
                  </h3>
                  <p className="text-gray-400 text-sm">Spark Minda 2025</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                Received the award {" "}
                <span className="gradient-text font-medium">in Goa</span> as{" "}
                <span className="gradient-text font-medium">
                  Emerging Young Spark Award
                </span>{" "}
                at{" "}
                <span className="gradient-text font-medium">
                  Spark Minda
                </span>
                  . for outstanding performance, dedication, and contribution toward
                   organizational excellence and business growth
                   as Emerging Young Spark on India level 
              </p>
              <div className="mt-4 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
                <p className="text-blue-200 text-sm leading-relaxed">
                  <Award className="inline mr-2" size={25} />
                  Recognized for consistent high performance
                  leadership mindset, and commitment toward innovation
                  and operational excellence.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  🏆 Corporate Excellence
                </div>
                <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  🚀 Performance Award
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                   📍 in Goa 2025
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Second Achievement */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.3 }}
            variants={slideInLeft}
            className="order-1"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <Award size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Podcast Speaker – AI & Future of Sales
                  </h3>
                  <p className="text-gray-400 text-sm">
                    GIMS Chanakya Talk Series

                  </p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                Invited to participate in an interactive podcast discussion
                 with junior professionals on the topic:{" "}
                <span className="gradient-text font-medium">
                  
                </span>{" "}
                at{" "}
                <span className="gradient-text font-medium">
                Will Artificial Intelligence Replace Sales Professionals?”
                </span>{" "}
                The session focused on evolving sales strategies,{" "}
                
                human relationship management, and the future role of AI{" "}
                {" "}
                <span className="gradient-text font-medium">
                  in modern business environments.

                </span>
                .
              </p>
              <div className="mt-4 p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg border border-green-500/20">
                <p className="text-green-200 text-sm leading-relaxed">
                  <Trophy className="inline mr-2" size={16} />
                  Shared industry insights on how AI enhances sales efficiency
                  while emphasizing the irreplaceable value of human communication
                  negotiation, and emotional intelligence.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  🎙️ Podcast Speaker
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  🤖 AI Discussion
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  💼 Sales Leadership
                </div>
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  📍 Noida
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.3 }}
            variants={slideInRight}
            className="order-2"
          >
            <div className="relative group">
              <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-green-500/25">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white/5 border border-white/10">
                  <Image
                    src="/achievements/gims.jpg"
                    alt="Best Project Award IEEE YESIST12 Prelims"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ objectFit: "cover" }}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const nextElement = e.currentTarget
                        .nextElementSibling as HTMLElement;
                      if (nextElement) nextElement.style.display = "flex";
                    }}
                  />
                  <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-green-500/20 to-blue-500/20 flex-col">
                    <Award size={64} className="text-white/80 mb-4" />
                    <p className="text-white/80 text-lg font-medium">
                      Achievement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
