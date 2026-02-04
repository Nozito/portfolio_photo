"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type SpanType = "default" | "large" | "wide";

interface BentoGridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
}

interface BentoItemProps {
  children: ReactNode;
  span?: SpanType;
  index?: number;
}

const gapStyles = {
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
};

const spanStyles: Record<SpanType, string> = {
  default: "col-span-1 row-span-1",
  large: "col-span-1 md:col-span-2 row-span-1 md:row-span-2", // 2x2 sur desktop
  wide: "col-span-1 md:col-span-3 row-span-1", // Toute la largeur
};

export function BentoGrid({ 
  children, 
  columns = 3, 
  gap = "md" 
}: BentoGridProps) {
  return (
    <div
      className={`
        grid 
        grid-cols-1 
        md:grid-cols-${columns}
        auto-rows-fr
        ${gapStyles[gap]}
      `}
    >
      {children}
    </div>
  );
}

export function BentoItem({ 
  children, 
  span = "default", 
  index = 0 
}: BentoItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={`
        ${spanStyles[span]}
        min-h-[320px]
        md:min-h-[400px]
        rounded-2xl 
        overflow-hidden
        bg-gray-900
        relative
      `}
    >
      {children}
    </motion.div>
  );
}
