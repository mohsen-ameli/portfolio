import { Variants, motion } from "framer-motion"
import React from "react"

const containerVariant: Variants = {
  hidden: {
    opacity: 0,
    y: "-7vh",
  },
  visible: {
    opacity: 1,
    y: "-0.5vh",
    transition: {
      type: "spring",
      mass: 0.5,
      stiffness: 100,
      delay: 0.1,
      staggerChildren: 0.35,
    },
  },
  exit: {
    opacity: 0,
    y: "5vh",
    transition: { ease: "easeInOut" },
  },
}

type ContainerProps = {
  children: React.ReactNode
  className?: string
  style?: {}
}

/**
 * The container for every page
 */
const Container = ({ children, className, style }: ContainerProps) => {
  return (
    <motion.div
      className={`w-full h-full text-2xl md:pl-20 p-8 max-w-[1000px] mx-auto text-white ${className}`}
      style={style}
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}

export default Container
