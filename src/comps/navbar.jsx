import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  let toggle = () => setNav(!nav)
  let navigate = useNavigate()

  return (
    <div className="w-full h-20 fixed top-0 bg-[#000033ed] text-white z-10 select-none">
      <nav className="flex items-center justify-between max-w-[1240px] mx-auto p-4 md:pt-4">
        {/* Logo */}
        <button className="cursor-pointer" onClick={() => navigate("/")} title="M.A.">
          <motion.img drag dragSnapToOrigin={true} className="w-16" src="/images/logo.png" alt="" />
        </button>

        {/* Hamburger Menu */}
        <MenuToggle className="md:hidden p-4 z-20" toggle={() => toggle()} isOpen={nav} />

        {/* Desktop Navbar */}
        <ul className="hidden md:flex items-center justify-center">
          <NavBtn className="mx-12 my-4" text="Home" to="/" />
          <NavBtn className="mx-12 my-4" text="About" to="/about" />
          <NavBtn className="mx-12 my-4" text="Skills" to="/skills" />
          <NavBtn className="mx-12 my-4" text="Projects" to="/projects" />
          <NavBtn className="mx-12 my-4" text="Contact" to="/contact" />
        </ul>

        {/* Mobile Navbar */}
        <AnimatePresence mode="wait">
          {nav &&
            <motion.ul className="absolute md:hidden top-0 left-0 h-screen w-screen flex flex-col items-center justify-center bg-[#000033]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: .2 }}
            >
              <motion.li className="text-3xl cursor-pointer py-8">
                <Link onClick={toggle} to="/">Home</Link>
              </motion.li>
              <motion.li className="text-3xl cursor-pointer py-8">
                <Link onClick={toggle} to="/about">About</Link>
              </motion.li>
              <motion.li className="text-3xl cursor-pointer py-8">
                <Link onClick={toggle} to="/skills">Skills</Link>
              </motion.li>
              <motion.li className="text-3xl cursor-pointer py-8">
                <Link onClick={toggle} to="/projects">Projects</Link>
              </motion.li>
              <motion.li className="text-3xl cursor-pointer py-8">
                <Link onClick={toggle} to="/contact">Contact</Link>
              </motion.li>
            </motion.ul>
          }
        </AnimatePresence>
      </nav>
    </div>
  )
}

/**
 * Menu Toggle
 */
const MenuToggle = ({ toggle, isOpen, className }) => (
  <motion.button
    className={className}
    onClick={toggle}
    animate={isOpen ? "open" : "closed"}
    title="Menu"
  >
    <svg width="36" height="36" viewBox="0 0 23 23" fill="white">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </motion.button>
)

/**
 * Path Component
 */
const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
)


/**
 * Nav Button Variant
 */
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

/**
 * Nav Button Component
 */
const NavBtn = ({ text, ...props }) => {
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
  )
}

export default Navbar