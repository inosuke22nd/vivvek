"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const titles = [
  "Senior Executive - Sales",
  "Marketing Enthusiast",
  "Business Analyst",
];

export default function TypingAnimation() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    let timeoutId: NodeJS.Timeout;

    if (isTyping) {
      // Typing animation
      if (displayedText.length < currentTitle.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        }, 80); // Typing speed
      } else {
        // Finished typing, wait before deleting
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2500); // Pause after completing
      }
    } else {
      // Deleting animation
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 40); // Deleting speed (faster)
      } else {
        // Finished deleting, move to next title
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, isTyping, currentTitleIndex]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="min-h-[4rem] flex items-center justify-center">
      <motion.div
        className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block">
          {displayedText}
          <motion.span
            className="text-yellow-400 ml-1"
            animate={{
              opacity: showCursor ? 1 : 0,
            }}
            transition={{
              duration: 0.1,
            }}
          >
            |
          </motion.span>
        </span>
      </motion.div>
    </div>
  );
}
