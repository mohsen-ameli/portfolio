"use client"

import Typed from "react-typed"
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs"
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
    <>
      {/* Name and other info */}
      <Container className="pt-8 md:pt-32">
        <AnimatedDiv>
          <div className="text-[#FF5F1F]">Hi, my name is</div>
          <div className="text-4xl sm:text-5xl md:text-7xl font-semibold text-[#e0f2fe]">
            <span className="text-[#FF5F1F] font-serif">M</span>ohsen{" "}
            <span className="text-[#FF5F1F] font-serif">A</span>meli
          </div>
        </AnimatedDiv>
        <AnimatedDiv>
          <div className="text-3xl sm:text-4xl md:text-[55px] md:leading-[1] font-semibold text-[#0284c7]">
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
        <AnimatedDiv className="py-4 text-2xl text-[#e0f2fe]">
          <Typed
            strings={[
              "I build amazing, good looking, and responsive websites using front and back end tools. Two of my favorite frameworks are React and Django.",
            ]}
            typeSpeed={50}
          />
        </AnimatedDiv>
      </Container>

      {/* Socials */}
      <AnimatedDiv className="fixed bottom-[10%] -translate-x-1/2 left-1/2 text-white">
        <div className="flex gap-x-8 md:gap-x-12 md:text-[30px]">
          {/* Github */}
          <Tippy
            className="text-xl"
            offset={[0, 20]}
            content="GitHub"
            placement="top"
            theme="tippy"
            animation="perspective"
          >
            <Link
              className="p-4 text-3xl mx-auto cursor-pointer rounded-full bg-gradient-to-r from-sky-700 to-[#FF5F1F]
            shadow-xl hover:scale-125 hover:ease-in-out duration-300"
              href="https://github.com/mohsen-ameli"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <BsGithub />
            </Link>
          </Tippy>
          {/* LinkedIn */}
          <Tippy
            className="text-xl"
            offset={[0, 20]}
            content="LinkedIn"
            placement="top"
            theme="tippy"
            animation="perspective"
          >
            <Link
              className="p-4 text-3xl mx-auto cursor-pointer rounded-full bg-gradient-to-r from-sky-700 to-[#FF5F1F]
            shadow-xl hover:scale-125 hover:ease-in-out duration-300"
              href="https://www.linkedin.com/in/mohsen-ameli-365b5917a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <BsLinkedin />
            </Link>
          </Tippy>
          {/* Twitter */}
          <Tippy
            className="text-xl"
            offset={[0, 20]}
            content="Twitter"
            placement="top"
            theme="tippy"
            animation="perspective"
          >
            <Link
              className="p-4 text-3xl mx-auto cursor-pointer rounded-full bg-gradient-to-r from-sky-700 to-[#FF5F1F]
            shadow-xl hover:scale-125 hover:ease-in-out duration-300"
              href="https://twitter.com/MohsenAmeli"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <BsTwitter />
            </Link>
          </Tippy>
          {/* Resume */}
          <Tippy
            className="text-xl"
            offset={[0, 20]}
            content="Resume"
            placement="top"
            theme="tippy"
            animation="perspective"
          >
            <button
              className="p-4 text-3xl mx-auto cursor-pointer rounded-full bg-gradient-to-r from-sky-700 to-[#FF5F1F]
            shadow-xl hover:scale-125 hover:ease-in-out duration-300"
              onClick={() => window?.open("/resume/resume.pdf", "_blank")}
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
    </>
  )
}

export default Home
