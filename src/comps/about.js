const About = () => {
  return (
    <div name="about" className="w-full h-screen text-white max-w-[1000px] mx-auto pt-40">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col items-end">
          <h1 className="text-4xl font-semibold border-b-4 border-[#FF5F1F] w-[6.5rem] py-2">About</h1>
          <p className="text-4xl text-right pt-8">Hey there, I'm Mohsen Ameli. Feel Free To Look Around!</p>
        </div>
        <p className="self-end">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor a tenetur modi et aperiam libero perspiciatis deserunt, eligendi voluptatum totam.</p>
      </div>
      



      {/* <div className="grid grid-cols-4 gap-x-8 text-center py-16">
        <BsFillQuestionCircleFill className="text-2xl mx-2" />
      </div> */}
    </div>
  );
}
 
export default About;