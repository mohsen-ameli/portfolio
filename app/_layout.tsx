"use client"

import { Node } from "@/types/main.type"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"

const Layout = ({ children }: Node) => {
  const path = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div key={path}>{children}</motion.div>
    </AnimatePresence>
  )
}

export default Layout
