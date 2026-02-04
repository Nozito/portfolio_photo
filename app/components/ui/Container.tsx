import { forwardRef } from "react";

type ContainerSize = "narrow" | "default" | "wide" | "full";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
  as?: "div" | "section" | "article" | "main" | "aside";
  noPadding?: boolean;
}

const sizeStyles: Record<ContainerSize, string> = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
  full: "max-w-full",
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      size = "default",
      as: Component = "div",
      noPadding = false,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = `
      mx-auto w-full
      ${sizeStyles[size]}
      ${noPadding ? "" : "px-6 md:px-8"}
    `;

    return (
      <Component
        ref={ref}
        className={`${baseClasses} ${className}`}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = "Container";
