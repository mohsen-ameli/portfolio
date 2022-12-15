import { motion } from "framer-motion"

const containerVariant = {
  hidden: {
    opacity: 0,
    y: "-3vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", mass: .5, stiffness: 100, delay: .1, staggerChildren: .35 }
  },
  exit: {
    opacity: 0,
    y: "3vh",
    transition: { ease: "easeInOut" }
  }
}

const Container = ({ children, className, override }) => {
  return (
      <motion.div className={override ? className : `w-full h-full md:pl-20 px-8 max-w-[1000px] mx-auto flex flex-col justify-center text-white ${className}`}
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
      {children}
    </motion.div>
  )
}
 
export default Container