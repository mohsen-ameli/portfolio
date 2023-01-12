import { Link } from "react-router-dom"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import Container from "../comps/container"
import Title from "../comps/title"
import AnimatedDiv from "../comps/animatedDiv"

const About = () => {
  return (
    <Container className="items-center pt-44">
      {/* Title */}
      <Title title="About" />

      <AnimatedDiv className="grid grid-cols-2 gap-x-8 max-w-[900px]">
        <div className="flex flex-col items-end">
          <p className="text-xl md:text-4xl text-right pt-8">
            Welcome to my Portfolio! Feel Free To Look Around!
          </p>
        </div>
        <p className="pt-10">
          I'm a first year computer science student. I've been programming since
          I was 13-14. The first language I ever learned was C, and later I
          learned Python and JavaScript.
        </p>
      </AnimatedDiv>

      <AnimatedDiv>
        <Link
          to="/skills"
          className="w-fit group flex items-center border cursor-pointer border-white mt-8 py-2 px-4 md:px-8 rounded-md hover:bg-[#FF5F1F] hover:border-[#FF5F1F] hover:drop-shadow-[0_5px_5px_rgba(255,255,255,0.1)]"
        >
          <p>Hmm Interesting!</p>{" "}
          <HiOutlineArrowNarrowRight className="text-white text-lg ml-2 group-hover:rotate-90 group-hover:ease-in-out duration-200" />
        </Link>
      </AnimatedDiv>
    </Container>
  )
}

export default About
