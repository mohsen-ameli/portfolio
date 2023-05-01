"use client"

import { Node } from "@/types/main.type"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"

const Transition = ({ children }: Node) => {
  const path = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div layout={false} key={path}>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default Transition
