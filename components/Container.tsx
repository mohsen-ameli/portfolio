"use client"

import { ReactNode } from "react"
import { animated as a, useTransition } from "react-spring"

// const containerVariant: Variants = {
//   hidden: {
//     opacity: 0,
//     y: "-7vh",
//   },
//   visible: {
//     opacity: 1,
//     y: "-0.5vh",
//     transition: {
//       type: "spring",
//       mass: 0.5,
//       stiffness: 100,
//       delay: 0.1,
//       staggerChildren: 0.35,
//     },
//   },
//   exit: {
//     opacity: 0,
//     y: "5vh",
//     transition: { ease: "easeInOut" },
//   },
// }

type ContainerProps = {
  children: ReactNode
  className?: string
}

/**
 * The container for every page
 */
const Container = ({ children, className }: ContainerProps) => {
  const transitions = useTransition(children, {
    from: { opacity: 0, y: -100 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: -100 },
  })

  return (
    <div
      className={`w-full h-full text-2xl md:pl-20 p-8 max-w-[1000px] mx-auto text-white ${className}`}
    >
      {transitions((style, item) => (
        <a.div style={style}>{item}</a.div>
      ))}
    </div>
  )
}

export default Container
