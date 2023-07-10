"use client"

import { Node } from "@/types/main.type"
import { motion } from "framer-motion"

const CardMotion = ({ children }: Node) => {
  return (
    <motion.div
      className="w-full flex md:flex-row flex-col justify-between text-center rounded-lg bg-sky-900 text-white my-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  )
}

export default CardMotion
