"use client"

import { ReactNode } from "react"
import { animated as a, useSpring } from "react-spring"

type AnimatedDivProps = {
  children: ReactNode
  className?: string
}

/**
 * For entrance animation
 */
const AnimatedDiv = ({ children, className }: AnimatedDivProps) => {
  const springs = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <a.div className={className} style={springs}>
      {children}
    </a.div>
  )
}

export default AnimatedDiv
