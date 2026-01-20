"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  animated?: boolean;
  id?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  level = 2,
  className = "",
  animated = true,
  id,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const baseClasses =
    "font-bold text-inkBlack dark:text-backgroundCreamDark relative mb-2 heading-tight";
  const sizeClasses = {
    1: "text-3xl md:text-4xl lg:text-5xl",
    2: "text-2xl md:text-3xl lg:text-4xl",
    3: "text-xl md:text-2xl lg:text-3xl",
    4: "text-lg md:text-xl lg:text-2xl",
    5: "text-base md:text-lg lg:text-xl",
    6: "text-sm md:text-base lg:text-lg",
  };

  const titleContent = (
    <span className="relative inline-block section-title-underline">
      {title}
    </span>
  );

  const resolvedId = id ?? title.toLowerCase().replace(/\s+/g, "-");

  const renderHeading = (headingLevel: number) => {
    const headingProps = {
      className: `${baseClasses} ${
        sizeClasses[headingLevel as keyof typeof sizeClasses]
      } ${className}`,
      id: resolvedId,
    };

    switch (headingLevel) {
      case 1:
        return <h1 {...headingProps}>{titleContent}</h1>;
      case 2:
        return <h2 {...headingProps}>{titleContent}</h2>;
      case 3:
        return <h3 {...headingProps}>{titleContent}</h3>;
      case 4:
        return <h4 {...headingProps}>{titleContent}</h4>;
      case 5:
        return <h5 {...headingProps}>{titleContent}</h5>;
      case 6:
        return <h6 {...headingProps}>{titleContent}</h6>;
      default:
        return <h2 {...headingProps}>{titleContent}</h2>;
    }
  };

  if (!animated) {
    return renderHeading(level);
  }

  return (
    <motion.div
      initial={
        shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {renderHeading(level)}
    </motion.div>
  );
};

export default SectionTitle;
