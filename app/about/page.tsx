"use client"

import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import Link from "next/link"
import AnimatedDiv from "@/components/ui/AnimatedDiv"
import Title from "@/components/ui/Title"
import Container from "@/components/ui/Container"

const About = () => {
  return (
    <div className="h-screen">
      <Container>
        <Title title="About" />

        <AnimatedDiv className="grid grid-cols-2 gap-x-8 max-w-[900px]">
          <div className="flex flex-col items-end">
            <div className="text-xl md:text-4xl text-right pt-8">
              Welcome to my Portfolio! Feel Free To Look Around!
            </div>
          </div>
          <div className="pt-10">
            I&apos;m a first year computer science student. I&apos;ve been
            programming since I was 13-14. The first language I ever learned was
            C, and later I learned Python and JavaScript.
          </div>
        </AnimatedDiv>

        <AnimatedDiv>
          <Link
            href="/skills"
            className="w-fit mx-auto group flex items-center border cursor-pointer border-white mt-8 py-2 px-4 md:px-8 rounded-md hover:bg-[#FF5F1F] hover:border-[#FF5F1F] hover:drop-shadow-[0_5px_5px_rgba(255,255,255,0.1)]"
          >
            <div>Hmm Interesting!</div>{" "}
            <HiOutlineArrowNarrowRight className="text-white text-lg ml-2 group-hover:rotate-90 group-hover:ease-in-out duration-200" />
          </Link>
        </AnimatedDiv>
      </Container>
    </div>
  )
}

export default About
