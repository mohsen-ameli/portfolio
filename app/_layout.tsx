"use client"

import { Node } from "@/types/main.type"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

const Layout = ({ children }: Node) => {
  const [path, setPath] = useState<string>()

  useEffect(() => {
    setPath(window.location.pathname)
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.div key={path}>{children}</motion.div>
    </AnimatePresence>
  )
}

export default Layout
