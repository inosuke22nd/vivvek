"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ReactNode, useState } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variants?: Variants;
}

/* -------------------- SECTION WRAPPER -------------------- */

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
    viewport={{ once: false, amount: 0.2 }}
    variants={variants}
  >
    {children}
  </motion.section>
);


/* -------------------- ANIMATIONS -------------------- */

const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 100, scale: 0.92 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* -------------------- CERTIFICATE DATA -------------------- */

const certificates = [
  { title: "SparkMinda", image: "/certificates/Sparkminda.jpg" },
  { title: "Almonda", image: "/certificates/Almonda.jpg" },
  { title: "Learntube", image: "/certificates/Learntube.jpg" },
  { title: "Google", image: "/certificates/Google.jpg" },
  { title: "Greatlearning", image: "/certificates/Greatlearning.jpg" },
];

/* -------------------- COMPONENT -------------------- */

export default function CertificatesSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <AnimatedSection
        id="certificates"
        className="min-h-screen py-32 px-6"
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">

          {/* Section Title */}
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold text-white text-center mb-20"
          >
            Certificates
          </motion.h2>

          {/* Certificates Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16"
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -12, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="cursor-pointer"
                onClick={() => setSelectedImage(cert.image)}
              >
                <Card className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl hover:shadow-yellow-500/30 transition-all duration-500 group">

                  <CardContent className="p-0">

                    {/* Certificate Image */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500" />
                    </div>

                    {/* Certificate Title */}
                    <div className="p-6 text-center">
                      <h3 className="text-2xl font-semibold text-white group-hover:text-yellow-400 transition-colors duration-300">
                        {cert.title}
                      </h3>
                    </div>

                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </AnimatedSection>

      {/* -------------------- MODAL PREVIEW -------------------- */}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-4xl aspect-[4/3]"
            >
              <Image
                src={selectedImage}
                alt="Certificate Preview"
                fill
                className="object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
