"use client";

import { motion } from "framer-motion";
import { forwardRef } from "react";

interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
}

interface BentoItemProps {
  children: React.ReactNode;
  span?: "default" | "wide" | "tall" | "large";
  index?: number;
  className?: string;
}

const gapStyles = {
  sm: "gap-3 md:gap-4",
  md: "gap-4 md:gap-6",
  lg: "gap-6 md:gap-8",
};

const columnStyles = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

const spanStyles = {
  default: "",
  wide: "sm:col-span-2",
  tall: "sm:row-span-2",
  large: "sm:col-span-2 sm:row-span-2",
};

export const BentoGrid = forwardRef<HTMLDivElement, BentoGridProps>(
  ({ children, columns = 3, gap = "md", className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`grid ${columnStyles[columns]} ${gapStyles[gap]} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

BentoGrid.displayName = "BentoGrid";

export const BentoItem = forwardRef<HTMLDivElement, BentoItemProps>(
  ({ children, span = "default", index = 0, className = "" }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.5,
          delay: index * 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`
          relative overflow-hidden rounded-2xl
          bg-white/[0.03] border border-white/[0.08]
          transition-all duration-500 ease-out
          hover:bg-white/[0.06] hover:border-white/[0.15]
          hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]
          ${spanStyles[span]}
          ${className}
        `}
      >
        {children}
      </motion.div>
    );
  }
);

BentoItem.displayName = "BentoItem";
