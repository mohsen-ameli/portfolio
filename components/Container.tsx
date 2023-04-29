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
  override?: boolean
  style?: {}
}

/**
 * The container for every page
 */
const Container = ({
  children,
  className,
  override,
  style,
}: ContainerProps) => {
  return (
    <motion.div
      style={style}
      className={
        override
          ? className
          : `w-full h-full text-2xl md:pl-20 px-8 py-4 max-w-[1000px] mx-auto flex flex-col justify-center text-white ${className}`
      }
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
