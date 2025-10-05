/**
 * Skeleton Loader Components
 * Branded loading states for better perceived performance
 */

"use client"

import { motion } from "framer-motion"
import React from "react"

interface SkeletonLoaderProps {
  variant?: 'card' | 'text' | 'circle' | 'button' | 'image' | 'line'
  width?: string
  height?: string
  className?: string
  count?: number
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ 
  variant = 'card',
  width,
  height,
  className = '',
  count = 1,
}) => {
  const baseClasses = "bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%]"
  
  const variantClasses = {
    card: "h-32 rounded-lg",
    text: "h-4 rounded",
    line: "h-3 rounded",
    circle: "rounded-full",
    button: "h-10 w-24 rounded-none",
    image: "aspect-square rounded-lg",
  }

  const skeletonStyle = {
    width: width || undefined,
    height: height || undefined,
  }

  const skeletons = Array.from({ length: count }, (_, i) => (
    <motion.div
      key={i}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={skeletonStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: i * 0.05 }}
      aria-hidden="true"
    />
  ))

  return count > 1 ? <div className="space-y-3">{skeletons}</div> : skeletons[0]
}

// Specialized skeleton components
export const SkeletonCard: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`border-2 border-gray-200 dark:border-gray-700 rounded-lg p-4 ${className}`}>
    <div className="flex items-start gap-4">
      <SkeletonLoader variant="circle" width="80px" height="80px" />
      <div className="flex-1 space-y-3">
        <SkeletonLoader variant="text" width="60%" />
        <SkeletonLoader variant="text" width="40%" />
        <SkeletonLoader variant="line" count={2} />
      </div>
    </div>
  </div>
)

export const SkeletonProject: React.FC = () => (
  <div className="border-2 border-gray-200 dark:border-gray-700 rounded-lg p-4">
    <div className="flex justify-between items-start mb-3">
      <SkeletonLoader variant="text" width="150px" />
      <SkeletonLoader variant="button" width="60px" height="24px" />
    </div>
    <SkeletonLoader variant="line" count={2} />
  </div>
)

export const SkeletonSkills: React.FC = () => (
  <div className="flex flex-wrap gap-2">
    {Array.from({ length: 12 }, (_, i) => (
      <SkeletonLoader 
        key={i}
        variant="button" 
        width={`${60 + Math.random() * 40}px`}
        height="32px"
      />
    ))}
  </div>
)

export const SkeletonWriting: React.FC = () => (
  <div className="border-2 border-gray-200 dark:border-gray-700 rounded-lg p-4">
    <SkeletonLoader variant="text" width="70%" className="mb-2" />
    <SkeletonLoader variant="line" count={3} />
  </div>
)
