"use client";

import Image, { ImageProps } from "next/image";
import { useState, useEffect } from "react";

interface OptimizedImageProps extends Omit<ImageProps, "onLoad" | "onLoadingComplete"> {
  aspectRatio?: "video" | "square" | "portrait" | "landscape" | "auto";
  showSkeleton?: boolean;
  hoverZoom?: boolean;
}

const aspectRatioStyles = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  auto: "",
};

export function OptimizedImage({
  src,
  alt,
  aspectRatio = "auto",
  showSkeleton = true,
  hoverZoom = true,
  className = "",
  fill = true,
  priority,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // For priority images, show immediately
  useEffect(() => {
    if (priority) {
      const timer = setTimeout(() => setIsLoading(false), 100);
      return () => clearTimeout(timer);
    }
  }, [priority]);

  const defaultHeightClass = fill && aspectRatio === "auto" ? "h-64" : "";

  return (
    <div
      className={`
        relative overflow-hidden
        ${aspectRatioStyles[aspectRatio]}
        ${defaultHeightClass}
        ${className}
      `}
    >
      {/* Loading skeleton */}
      {showSkeleton && isLoading && !hasError && (
        <div className="absolute inset-0 skeleton" aria-hidden="true" />
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-gray-500">
          <svg
            className="w-12 h-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      )}

      {/* Image */}
      <div
        className={`
          absolute inset-0
          transition-all duration-700 ease-out
          ${isLoading ? "opacity-0 scale-105 blur-lg" : "opacity-100 scale-100 blur-0"}
          ${hoverZoom ? "hover:scale-105" : ""}
        `}
      >
        <Image
          src={src}
          alt={alt}
          fill={fill}
          priority={priority}
          className="object-cover"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          sizes={props.sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
          {...props}
        />
      </div>
    </div>
  );
}
