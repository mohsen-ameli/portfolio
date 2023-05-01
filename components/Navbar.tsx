"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const toggle = () => setNav(!nav)

  return (
    <>
      <div className="w-full h-20 bg-transparent z-10" />
      <div className="w-full h-20 fixed top-0 bg-[#00003369] text-white z-10 select-none">
        <nav className="flex items-center justify-between max-w-[1240px] mx-auto p-4 lg:pt-4">
          {/* Logo */}
          <Link
            href="/"
            className="no-grab cursor-grab active:cursor-grabbing"
            title="M.A."
          >
            <motion.img
              drag
              dragSnapToOrigin={true}
              className="w-16 select-none"
              src="/images/logo.png"
              alt=""
            />
          </Link>

          {/* Hamburger Menu */}
          <MenuToggle
            className="lg:hidden p-4 z-20"
            toggle={() => toggle()}
            isOpen={nav}
          />

          {/* Desktop Navbar */}
          <ul className="hidden lg:flex items-center gap-x-32">
            <NavBtn text="Home" href="/" />
            <NavBtn text="About" href="/about" />
            <NavBtn text="Skills" href="/skills" />
            <NavBtn text="Projects" href="/projects" />
            <NavBtn text="Contact" href="/contact" />
          </ul>

          {/* Mobile Navbar */}
          <AnimatePresence mode="wait">
            {nav && (
              <motion.ul
                className="absolute lg:hidden top-0 left-0 h-screen w-screen flex flex-col items-center justify-center bg-[#000033]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: "easeInOut", duration: 0.2 }}
              >
                <motion.li className="text-3xl cursor-pointer sm:py-4 py-8">
                  <Link onClick={toggle} href="/">
                    Home
                  </Link>
                </motion.li>
                <motion.li className="text-3xl cursor-pointer sm:py-4 py-8">
                  <Link onClick={toggle} href="/about">
                    About
                  </Link>
                </motion.li>
                <motion.li className="text-3xl cursor-pointer sm:py-4 py-8">
                  <Link onClick={toggle} href="/skills">
                    Skills
                  </Link>
                </motion.li>
                <motion.li className="text-3xl cursor-pointer sm:py-4 py-8">
                  <Link onClick={toggle} href="/projects">
                    Projects
                  </Link>
                </motion.li>
                <motion.li className="text-3xl cursor-pointer sm:py-4 py-8">
                  <Link onClick={toggle} href="/contact">
                    Contact
                  </Link>
                </motion.li>
              </motion.ul>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </>
  )
}

/**
 * Menu Toggle
 */
type MenuToggleProps = {
  toggle: () => void
  isOpen: boolean
  className: string
}

const MenuToggle = ({ toggle, isOpen, className }: MenuToggleProps) => (
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
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </motion.button>
)

/**
 * Path Component
 */
const Path = (props: any) => (
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
    scaleX: 0,
  },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: {
      type: "tween",
      stiffness: 100,
      mass: 0.5,
    },
  },
}

/**
 * Nav Button Component
 */
type NavBtnProps = {
  text: string
  href: string
}

const NavBtn = ({ text, href }: NavBtnProps) => {
  const [show, setShow] = useState(false)

  const path = usePathname()

  const shouldHighlight = () => {
    if (path === "/") {
      return "home".includes(text.toLowerCase())
    } else {
      return path.includes(text.toLowerCase())
    }
  }

  return (
    <Link href={href}>
      <motion.div
        className="relative text-2xl cursor-pointer text-white text-center"
        onHoverStart={() => setShow(true)}
        onHoverEnd={() => setShow(false)}
      >
        {text}
        <AnimatePresence mode="wait">
          {(show || shouldHighlight()) && (
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
