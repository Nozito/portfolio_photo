"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<HTMLMotionProps<"button">, keyof ButtonBaseProps> & {
    href?: never;
    external?: never;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.ComponentPropsWithoutRef<typeof Link>, keyof ButtonBaseProps> & {
    href: string;
    external?: boolean;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-white !text-black border border-white
    hover:!bg-black hover:!text-white hover:border-white
    active:!bg-black active:!text-white
    focus-visible:ring-white
  `,
  secondary: `
    bg-transparent !text-white border border-white
    hover:!bg-white hover:!text-black hover:border-white
    active:!bg-white active:!text-black
    focus-visible:ring-white
  `,
  ghost: `
    bg-transparent !text-white border border-transparent
    hover:!bg-white hover:!text-black
    active:!bg-white active:!text-black
    focus-visible:ring-white
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const LoadingSpinner = () => (
  <svg
    className="animate-spin -ml-1 mr-2 h-4 w-4"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

// Créer un Motion Link component
const MotionLink = motion(Link) as unknown as React.ComponentType<any>;

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      fullWidth = false,
      children,
      className = "",
      ...props
    },
    ref
  ) => {
    const baseClasses = `
      inline-flex items-center justify-center
      font-semibold rounded-full
      transition-all duration-300 ease-out
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black
      disabled:opacity-50 disabled:cursor-not-allowed
      ${sizeStyles[size]}
      ${fullWidth ? "w-full" : ""}
      ${variantStyles[variant]}
      ${className}
    `.trim().replace(/\s+/g, ' ');

    // External link variant
    if ("href" in props && props.href && props.external) {
      const { href, external, ...linkProps } = props as ButtonAsLink;

      return (
        <motion.a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          {...(linkProps as HTMLMotionProps<"a">)}
        >
          {children}
        </motion.a>
      );
    }

    // Internal Next.js link variant
    if ("href" in props && props.href) {
      const { href, external, ...linkProps } = props as ButtonAsLink;

      return (
        <MotionLink
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={baseClasses}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          {...linkProps}
        >
          {children}
        </MotionLink>
      );
    }

    // Button variant
    const buttonProps = props as ButtonAsButton;

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={baseClasses}
        disabled={loading || buttonProps.disabled}
        whileHover={!loading && !buttonProps.disabled ? { scale: 1.02, y: -2 } : {}}
        whileTap={!loading && !buttonProps.disabled ? { scale: 0.98 } : {}}
        {...buttonProps}
      >
        {loading && <LoadingSpinner />}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
