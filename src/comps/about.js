import NextBtn from "./nextBtn";

const About = () => {
  return (
    <div name="about" className="w-full h-screen flex flex-col justify-center items-center px-4 text-white max-w-[1000px] mx-auto">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col items-end">
          <h1 className="w-fit py-2 text-4xl font-semibold border-b-4 border-[#FF5F1F]">About</h1>
          <p className="text-xl md:text-4xl text-right pt-8">Hey there, I'm Mohsen Ameli. Feel Free To Look Around!</p>
        </div>
        {/* <div className="flex flex-col items-start">
          <img className="w-28 rounded-full" src={face} alt="" />
        </div> */}
        <p className="self-end pt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor a tenetur modi et aperiam libero perspiciatis deserunt, eligendi voluptatum totam.</p>
      </div>

      <NextBtn className="my-8" text="Hmm Intereting!" to="skills" offset={150} />
    </div>
  );
}
 
export default About;