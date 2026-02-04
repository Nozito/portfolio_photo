"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

type BlurLevel = "subtle" | "medium" | "strong";
type PaddingSize = "none" | "sm" | "md" | "lg" | "xl";

interface GlassPanelProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  blur?: BlurLevel;
  padding?: PaddingSize;
  hover?: boolean;
  className?: string;
  as?: "div" | "section" | "article" | "aside";
}

const blurStyles: Record<BlurLevel, string> = {
  subtle: "backdrop-blur-sm bg-white/[0.02] border-white/[0.05]",
  medium: "backdrop-blur-xl bg-white/[0.05] border-white/[0.1]",
  strong: "backdrop-blur-2xl bg-white/[0.08] border-white/[0.15]",
};

const paddingStyles: Record<PaddingSize, string> = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
  xl: "p-10 md:p-12",
};

export const GlassPanel = forwardRef<HTMLDivElement, GlassPanelProps>(
  (
    {
      children,
      blur = "medium",
      padding = "md",
      hover = true,
      className = "",
      as = "div",
      ...motionProps
    },
    ref
  ) => {
    const Component = motion[as] as typeof motion.div;

    const baseClasses = `
      rounded-2xl border
      shadow-[0_8px_32px_rgba(0,0,0,0.3)]
      ${blurStyles[blur]}
      ${paddingStyles[padding]}
      transition-all duration-300 ease-out
    `;

    const hoverClasses = hover
      ? "hover:bg-white/[0.08] hover:border-white/[0.2] hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)]"
      : "";

    return (
      <Component
        ref={ref}
        className={`${baseClasses} ${hoverClasses} ${className}`}
        {...motionProps}
      >
        {children}
      </Component>
    );
  }
);

GlassPanel.displayName = "GlassPanel";
