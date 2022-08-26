import Container from "./container";
import NextBtn from "./nextBtn";
import Title from "./title"

const About = () => {
  return (
    <Container className="items-center pt-44">
      <Title title="About" />
      
      <div className="grid grid-cols-2 gap-x-8 max-w-[900px]">
        <div className="flex flex-col items-end">
          <p className="text-xl md:text-4xl text-right pt-8">Welcome to my Portfolio! Feel Free To Look Around!</p>
        </div>
        <p className="pt-10">I'm a first year computer science student. I've been programming since I was 13-14. The first language I ever learned was C, and later I learned Python and JavaScript.</p>
      </div>

      <NextBtn className="my-8" text="Hmm Intereting!" to="skills" offset={150} />
    </Container>
  );
}
 
export default About;