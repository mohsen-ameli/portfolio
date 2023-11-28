"use client"

import { ReactNode } from "react"
import { animated as a, useSpring } from "react-spring"

/**
 * For entrance animation
 */
const AnimatedDiv = ({ children, className }: {
  children: ReactNode
  className?: string
}) => {
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
