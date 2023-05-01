import { ReactNode } from "react"
import { motion } from "framer-motion"

type AnimatedDivProps = {
  children: ReactNode
  className?: string
}

/**
 * For entrance animation
 */
const AnimatedDiv = ({ children, className }: AnimatedDivProps) => {
  return <motion.div className={className}>{children}</motion.div>
}

export default AnimatedDiv
