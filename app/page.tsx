"use client"

import Typed from "react-typed"
import { BsGithub, BsTwitter, BsInstagram } from "react-icons/bs"
import { RiNewspaperLine } from "react-icons/ri"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"
import "tippy.js/themes/light.css"
import "tippy.js/animations/perspective.css"
import AnimatedDiv from "@/components/AnimatedDiv"
import Link from "next/link"
import Container from "@/components/Container"

const Home = () => {
  return (
    <div className="h-screen pb-24">
      <Container>
        {/* Name and other info */}
        <AnimatedDiv>
          <div className="text-[#FF5F1F]">Hi, my name is</div>
          <div className="text-4xl sm:text-5xl md:text-7xl font-semibold text-sky-200">
            Mohsen Ameli
          </div>
        </AnimatedDiv>
        <AnimatedDiv>
          <div className="text-3xl sm:text-4xl md:text-7xl font-semibold text-sky-600">
            I&apos;m a <span></span>
            <Typed
              strings={[
                "Full Stack Developer.",
                "Computer Enthusiast.",
                "Computer Science Student.",
              ]}
              typeSpeed={120}
              backSpeed={70}
              loop
            />
          </div>
        </AnimatedDiv>
        <AnimatedDiv className="py-4">
          I build amazing, good looking, and responsive websites using front and
          back end tools. Two of my strongest frameworks are React and Django.
        </AnimatedDiv>
      </Container>
      {/* Socials */}
      <AnimatedDiv className="absolute bottom-10 -translate-x-1/2 left-1/2 text-white">
        <div className="flex gap-x-12 md:text-[30px]">
          {/* Github */}
          <Tippy
            className="text-xl"
            offset={[0, 20]}
            content="GitHub"
            placement="bottom"
            theme="tippy"
            animation="perspective"
          >
            <Link
              className="p-4 mx-auto cursor-pointer rounded-full bg-gradient-to-r from-sky-700 to-[#FF5F1F]
            shadow-xl hover:scale-125 hover:ease-in-out duration-300"
              href="https://github.com/mohsen-ameli"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <BsGithub />
            </Link>
          </Tippy>
          {/* Twitter */}
          <Tippy
            className="text-xl"
            offset={[0, 20]}
            content="Twitter"
            placement="bottom"
            theme="tippy"
            animation="perspective"
          >
            <Link
              className="p-4 mx-auto cursor-pointer rounded-full bg-gradient-to-r from-sky-700 to-[#FF5F1F]
            shadow-xl hover:scale-125 hover:ease-in-out duration-300"
              href="https://twitter.com/AmeliMohsen"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <BsTwitter />
            </Link>
          </Tippy>
          {/* Instagram */}
          <Tippy
            className="text-xl"
            offset={[0, 20]}
            content="Instagram"
            placement="bottom"
            theme="tippy"
            animation="perspective"
          >
            <Link
              className="p-4 mx-auto cursor-pointer rounded-full bg-gradient-to-r from-sky-700 to-[#FF5F1F]
            shadow-xl hover:scale-125 hover:ease-in-out duration-300"
              href="https://www.instagram.com/mohsen.ameli83/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <BsInstagram />
            </Link>
          </Tippy>
          {/* Resume */}
          <Tippy
            className="text-xl"
            offset={[0, 20]}
            content="Resume"
            placement="bottom"
            theme="tippy"
            animation="perspective"
          >
            <button
              className="p-4 mx-auto cursor-pointer rounded-full bg-gradient-to-r from-sky-700 to-[#FF5F1F]
            shadow-xl hover:scale-125 hover:ease-in-out duration-300"
              onClick={() => window.open("/resume/resume_dev.pdf", "_blank")}
              // @ts-ignore
              target="_blank"
              rel="noopener noreferrer"
              title="Resume"
            >
              <RiNewspaperLine />
            </button>
          </Tippy>
        </div>
      </AnimatedDiv>
    </div>
  )
}

export default Home
