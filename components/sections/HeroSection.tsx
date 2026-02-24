"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram, Mail, Phone } from "lucide-react";
import TypingAnimation from "@/components/typing-animation";
import DiscordIcon from "@/components/icons/discord-icon";
import LeetCodeIcon from "@/components/icons/leetcode-icon";

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

export default function HeroSection() {
  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Primary gradient orbs - Optimized for performance */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/25 to-orange-500/25 rounded-full blur-3xl"
          style={{ willChange: "transform" }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-amber-500/20 to-yellow-500/20 rounded-full blur-3xl"
          style={{ willChange: "transform" }}
          animate={{
            x: [0, -40, 0],
            y: [0, 25, 0],
            scale: [1.1, 1, 1.1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Additional ambient orbs */}
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-yellow-300/18 to-amber-400/18 rounded-full blur-3xl"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [0.8, 1.2, 0.9, 0.8],
            opacity: [0.7, 0.3, 0.6, 0.7],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />

        {/* Enhanced grid pattern */}
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px]"
          style={{
            maskImage:
              "radial-gradient(ellipse 60% 60% at 50% 50%, #000 40%, transparent 70%)",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "60px 60px", "0px 0px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Simple background gradient */}
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            background: `
              radial-gradient(ellipse 80% 30% at 50% 0%, 
                rgba(139, 92, 246, 0.08) 0%, 
                rgba(147, 51, 234, 0.08) 50%,
                transparent 100%
              )
            `,
          }}
        />
      </div>

      <div className="text-center space-y-6 relative z-10">
        <motion.h1
          className="text-4xl md:text-7xl font-bold text-white"
          variants={fadeInUp}
        >
          Hi, I&apos;m <span className="gradient-text-simple">Vivek!</span>
        </motion.h1>

        <motion.div
          className="text-xl md:text-5xl text-gray-300"
          variants={fadeInUp}
        >
          I&apos;m
        </motion.div>

        <motion.div
          className="text-2xl md:text-4xl text-gray-300"
          variants={fadeInUp}
        >
          <TypingAnimation />
        </motion.div>

        {/* Social Media Icons - Simplified for performance */}
        <motion.div
          className="flex justify-center space-x-6 mt-8 relative"
          variants={fadeInUp}
        >
          {/* Simple background glow */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/10 via-amber-500/10 to-orange-500/10 blur-xl pointer-events-none"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/vivvek-kumar-singh-00543017a"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-blue-600 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group relative z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={24} className="group-hover:animate-pulse" />
          </motion.a>
        
          {/* Twitter */}
          <motion.a
            href="https://x.com/YOUR-ID"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-sky-500 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-300 group relative z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Twitter size={24} className="group-hover:animate-pulse" />
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/s_ilent__warrio_r"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 group relative z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram size={24} className="group-hover:animate-pulse" />
          </motion.a>

          {/* Phone */}
          <motion.a
            href="tel:+918787005663"
            className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-green-600 hover:border-green-600 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 group relative z-10"
             whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >        
            <Phone size={24} className="group-hover:animate-pulse" />
          </motion.a>

           {/* Email */}
          <motion.a
             href="mailto:vivek25rajput2000@gmail.com"
             className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-red-500 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 group relative z-10"
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.95 }}
           >
              <Mail size={24} className="group-hover:animate-pulse" />
          </motion.a>


        </motion.div>
      </div>
    </motion.section>
  );
}
