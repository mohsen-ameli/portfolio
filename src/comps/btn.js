import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const btnVariant = {
  hidden: {
    opacity: 0,
    scaleX: 0
  },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { 
      type: "tween",
      stiffness: 100,
      mass: .5
    }
  }
}

const Btn = ({ text, ...props }) => {
  const [show, setShow] = useState(false)

  return (
    <Link {...props}>
      <motion.div className="relative text-lg cursor-pointer text-white text-center"
        onHoverStart={() => setShow(true)}
        onHoverEnd={() => setShow(false)}
      >
        {text}
        <AnimatePresence mode="wait">
          {show && (
            <motion.div
              className="absolute w-full origin-left h-[2px] bg-[#ff5f1f]"
              variants={btnVariant}
              initial="hidden"
              animate="visible"
              exit="hidden"
            ></motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
}
 
export default Btn;