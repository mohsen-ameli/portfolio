"use client"

import { Node } from "@/types/main.type"
import { AnimatePresence, motion } from "framer-motion"

const Layout = ({ children }: Node) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname}>{children}</motion.div>
    </AnimatePresence>
  )
}

export default Layout
