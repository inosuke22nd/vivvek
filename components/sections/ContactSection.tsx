"use client";

import { motion, Variants } from "framer-motion";
import { Linkedin, Twitter, Instagram, Clock, Mail, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { ReactNode, useState, useEffect } from "react";

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

export default function ContactSection() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setCurrentTime(now.toLocaleTimeString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatedSection
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 py-16"
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 mb-6"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-300 text-sm font-medium">
              Available for opportunities
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s Connect
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Open for business discussions, collaborations, and professional networking.
          </p>

          {/* Time & Response */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">

            <div className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
              <div className="text-yellow-400">⚡</div>
              <div>
                <div className="text-white text-sm font-medium">
                  Quick Response
                </div>
                <div className="text-gray-400 text-xs">Within 24 hours</div>
              </div>
            </div>

            <div className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
              <Clock className="text-yellow-400" size={18} />
              <div>
                <div className="text-white text-sm font-medium">
                  {currentTime} IST
                </div>
                <div className="text-gray-400 text-xs">India</div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Contact Content */}
        <div className="max-w-2xl mx-auto space-y-10">

          {/* Contact Form */}
          <ContactForm />

          {/* Social Links */}
          <div className="text-center">
            <h4 className="text-white font-medium mb-4">
              Connect With Me
            </h4>

            <div className="flex justify-center gap-5 flex-wrap">

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/vivvek-kumar-singh-00543017a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-blue-600 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Linkedin size={20} />
              </motion.a>

              {/* Twitter */}
              <motion.a
                href="https://x.com/YOUR-ID"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-sky-500 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Twitter size={20} />
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/s_ilent__warrio_r"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Instagram size={20} />
              </motion.a>

              {/* Phone */}
              <motion.a
                href="tel:+918787005663"
                className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-green-600 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Phone size={20} />
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:vivek25rajput2000@gmail.com"
                className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-red-500 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Mail size={20} />
              </motion.a>

            </div>
          </div>

        </div>
      </div>
    </AnimatedSection>
  );
}
