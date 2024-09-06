"use client"

import { ReactNode } from "react"
import { animated as a, useSpring } from "@react-spring/web"

/**
 * For entrance animation
 */
const AnimatedDiv = ({ children, className }: {
  children: ReactNode
  className?: string
}) => {
  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    []
  )

  // const springs = useSpring({
  //   from: { opacity: 0 },
  //   to: { opacity: 1 },
  // })

  return (
    <a.div className={className} style={props}>
      {children}
    </a.div>
  )
}

export default AnimatedDiv
