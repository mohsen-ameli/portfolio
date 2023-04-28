import { motion } from "framer-motion"
import React from "react"

const item = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

type AnimatedDivProps = {
  children: React.ReactNode
  className?: string
}

/**
 * For entrance animation
 */
const AnimatedDiv = ({ children, className }: AnimatedDivProps) => {
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  )
}

export default AnimatedDiv
