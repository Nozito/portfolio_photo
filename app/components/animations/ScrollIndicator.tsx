"use client";

import { motion } from "framer-motion";

interface ScrollIndicatorProps {
  className?: string;
  text?: string;
}

export function ScrollIndicator({
  className = "",
  text = "Défiler",
}: ScrollIndicatorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className={`flex flex-col items-center gap-3 ${className}`}
    >
      {text && (
        <span className="text-sm text-gray-400 tracking-widest uppercase">
          {text}
        </span>
      )}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        {/* Mouse outline */}
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-2">
          {/* Scroll wheel */}
          <motion.div
            animate={{ y: [0, 6, 0], opacity: [1, 0.3, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 rounded-full bg-white"
          />
        </div>
      </motion.div>
      {/* Arrow */}
      <motion.svg
        animate={{ y: [0, 4, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2,
        }}
        className="w-4 h-4 text-white/40"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </motion.svg>
    </motion.div>
  );
}
