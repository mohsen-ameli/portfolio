import NextBtn from "./nextBtn";

const About = () => {
  return (
    <div name="about" className="w-full h-screen flex flex-col justify-center items-center px-4 text-white max-w-[1000px] mx-auto">
      <h1 className="w-fit py-2 text-5xl font-bold border-b-4 border-[#FF5F1F]">About</h1>
      <div className="grid grid-cols-2 gap-x-8 max-w-[900px]">
        <div className="flex flex-col items-end">
          <p className="text-xl md:text-4xl text-right pt-8">Welcome to my Portfolio! Feel Free To Look Around!</p>
        </div>
        {/* <div className="flex flex-col items-start">
          <img className="w-28 rounded-full" src={face} alt="" />
        </div> */}
        <p className="pt-10">I'm a first year computer science student. I've been programming since I was 13-14. The first language I ever learned was C, and later I learned Python and JavaScript.</p>
      </div>

      <NextBtn className="my-8" text="Hmm Intereting!" to="skills" offset={150} />
    </div>
  );
}
 
export default About;