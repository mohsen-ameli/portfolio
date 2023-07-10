import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs"
import { RiNewspaperLine } from "react-icons/ri"
import "tippy.js/dist/tippy.css"
import "tippy.js/themes/light.css"
import "tippy.js/animations/perspective.css"
import AnimatedDiv from "@/components/AnimatedDiv"
import Container from "@/components/Container"
import TippyButton from "@/components/TippyButton"
import Type from "@/components/Type"

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
            <Type
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
          <Type
            strings={[
              "I build amazing, good looking, and responsive websites using front and back end tools. Two of my favorite frameworks are React and Django.",
            ]}
          />
        </AnimatedDiv>
      </Container>

      {/* Socials */}
      <AnimatedDiv className="fixed bottom-[10%] -translate-x-1/2 left-1/2 text-white">
        <div className="flex gap-x-8 md:gap-x-12 md:text-[30px]">
          {/* Github */}
          <TippyButton
            name="GitHub"
            link="https://github.com/mohsen-ameli"
            icon={<BsGithub />}
          />
          {/* LinkedIn */}
          <TippyButton
            name="LinkedIn"
            link="https://www.linkedin.com/in/mohsen-ameli-365b5917a/"
            icon={<BsLinkedin />}
          />
          {/* Twitter */}
          <TippyButton
            name="Twitter"
            link="https://twitter.com/MohsenAmeli"
            icon={<BsTwitter />}
          />
          {/* Resume */}
          <TippyButton
            name="Resume"
            link="/resume/resume.pdf"
            icon={<RiNewspaperLine />}
          />
        </div>
      </AnimatedDiv>
    </>
  )
}

export default Home
