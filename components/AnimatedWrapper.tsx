"use client";
import { motion, useInView, Variants } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

type AnimatedWrapperProps = {
  children: React.ReactNode;
  type?:
    | "scale"
    | "rotate"
    | "spinScale"
    | "fade"
    | "slide"
    | "bounce"
    | "fadeInUp"
    | "slideIn"
    | "tiltOnHover"
    | "shakeOnHover";
  className?: string;
};

const scaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const rotateVariants: Variants = {
  hidden: { opacity: 0, rotate: 0 },
  visible: {
    opacity: 1,
    rotate: 360,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const spinScaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0, rotate: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 360,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const slideVariants: Variants = {
  hidden: { opacity: 0, x: "-100%" },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const bounceVariants: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      bounce: 0.5,
    },
  },
};

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const slideInVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const tiltOnHoverVariants: Variants = {
  hidden: { scale: 1, rotate: 0 },
  hover: {
    opacity: 1,
    scale: 1.05,
    rotate: -10,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  visible: { scale: 1, rotate: 0 },
};

const shakeOnHoverVariants: Variants = {
  hidden: { scale: 1 },
  hover: {
    scale: 1,
    x: [0, -10, 10, -10, 10, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  visible: { scale: 1 },
};

export const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
  children,
  type = "spinScale",
  className,
}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    setIsInView(inView);
  }, [inView]);

  const variants =
    {
      scale: scaleVariants,
      rotate: rotateVariants,
      spinScale: spinScaleVariants,
      fade: fadeVariants,
      slide: slideVariants,
      bounce: bounceVariants,
      fadeInUp: fadeInUpVariants,
      slideIn: slideInVariants,
      tiltOnHover: tiltOnHoverVariants,
      shakeOnHover: shakeOnHoverVariants,
    }[type] || spinScaleVariants;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      whileHover={
        type === "tiltOnHover" || type === "shakeOnHover" ? "hover" : undefined
      }
      className={className}
    >
      {children}
    </motion.div>
  );
};
