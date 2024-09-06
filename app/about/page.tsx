import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import Link from "next/link"

const About = () => {
  const year = new Date().getFullYear() - 2022
  const year_of_study = year === 0 ? "first" : year === 1 ? "second" : year === 2 ? "third" : year === 3 ? "fourth" : "fifth"

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8 max-w-[900px]">
        <div className="flex flex-col md:items-end">
          <div className="text-xl md:text-4xl text-center md:text-right">
            Welcome to my Portfolio! Feel Free To Look Around!
          </div>
        </div>
        <div className="text-center md:text-left">
          I&apos;m a {year_of_study} year computer science student at York University.
          I&apos;ve been programming since I was 13-14 years old. The first
          language I ever learned was C, and later I learned Python and
          JavaScript.
        </div>
      </div>

      <div>
        <Link
          href="/skills"
          className="w-fit mx-auto group flex items-center border cursor-pointer border-white mt-8 py-2 px-4 md:px-8 rounded-md hover:bg-[#FF5F1F] hover:border-[#FF5F1F] hover:drop-shadow-[0_5px_5px_rgba(255,255,255,0.1)]"
        >
          <div>Hmm Interesting!</div>{" "}
          <HiOutlineArrowNarrowRight className="text-white text-lg ml-2 group-hover:rotate-90 group-hover:ease-in-out duration-200" />
        </Link>
      </div>
    </>
  )
}

export default About
