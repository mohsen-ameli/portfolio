import aws from "../images/aws.png"
import css from "../images/css.png"
import html from "../images/html.png"
import js from "../images/javascript.png"
import django from "../images/django2.jpg"
import react from "../images/react.png"
import tailwind from "../images/tailwind.png"
import github from "../images/github.png"
import python from "../images/python.png"
import java from "../images/java.svg"
import bootstrap from "../images/bootstrap.png"
import linux from "../images/linux.svg"

const Skills = () => {
  return (
    <div name="skills" className="w-full h-full px-4 py-60 max-w-[1000px] mx-auto flex flex-col items-center text-white">
      <h1 className="w-fit py-4 mb-6 text-5xl font-semibold border-b-4 border-[#FF5F1F]">Skills</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4 select-none">
        <div className="py-4 px-12 rounded-lg bg-sky-900 flex flex-col items-center hover:scale-105 ease-in-out duration-200 shadow-md shadow-black">
          <img className="w-16" src={linux} alt="" />
          <p className="mt-4 text-xl font-thin uppercase">Linux</p>
        </div>
        <div className="py-4 px-12 rounded-lg bg-sky-900 flex flex-col items-center hover:scale-105 ease-in-out duration-200 shadow-md shadow-black">
          <img className="w-16" src={css} alt="" />
          <p className="mt-4 text-xl font-thin uppercase">CSS3</p>
        </div>
        <div className="py-4 px-12 rounded-lg bg-sky-900 flex flex-col items-center hover:scale-105 ease-in-out duration-200 shadow-md shadow-black">
          <img className="w-16" src={html} alt="" />
          <p className="mt-4 text-xl font-thin uppercase">HTML5</p>
        </div>
        <div className="py-4 px-12 rounded-lg bg-sky-900 flex flex-col items-center hover:scale-105 ease-in-out duration-200 shadow-md shadow-black">
          <img className="w-16" src={js} alt="" />
          <p className="mt-4 text-xl font-thin uppercase">Javascript</p>
        </div>
        <div className="py-4 px-12 rounded-lg bg-sky-900 flex flex-col items-center hover:scale-105 ease-in-out duration-200 shadow-md shadow-black">
          <img className="w-16" src={django} alt="" />
          <p className="mt-4 text-xl font-thin uppercase">Django</p>
        </div>
        <div className="py-4 px-12 rounded-lg bg-sky-900 flex flex-col items-center hover:scale-105 ease-in-out duration-200 shadow-md shadow-black">
          <img className="w-16 animate-[spin_5s_linear_infinite]" src={react} alt="" />
          <p className="mt-4 text-xl font-thin uppercase">React</p>
        </div>
        <div className="py-4 px-12 rounded-lg bg-sky-900 flex flex-col items-center hover:scale-105 ease-in-out duration-200 shadow-md shadow-black">
          <img className="w-16" src={tailwind} alt="" />
          <p className="mt-4 text-xl font-thin uppercase">Tailwind</p>
        </div>
        <div className="py-4 px-12 rounded-lg bg-sky-900 flex flex-col items-center hover:scale-105 ease-in-out duration-200 shadow-md shadow-black">
          <img className="w-16" src={github} alt="" />
          <p className="mt-4 text-xl font-thin uppercase">Github</p>
        </div>
        <div className="py-4 px-12 rounded-lg bg-sky-900 flex flex-col items-center hover:scale-105 ease-in-out duration-200 shadow-md shadow-black">
          <img className="w-16" src={python} alt="" />
          <p className="mt-4 text-xl font-thin uppercase">Python</p>
        </div>
        <div className="py-4 px-12 rounded-lg bg-sky-900 flex flex-col items-center hover:scale-105 ease-in-out duration-200 shadow-md shadow-black">
          <img className="w-16" src={java} alt="" />
          <p className="mt-4 text-xl font-thin uppercase">Java</p>
        </div>
        <div className="py-4 px-12 rounded-lg bg-sky-900 flex flex-col items-center hover:scale-105 ease-in-out duration-200 shadow-md shadow-black">
          <img className="w-16" src={bootstrap} alt="" />
          <p className="mt-8 text-xl font-thin uppercase">Bootstrap</p>
        </div>
        <div className="py-4 px-12 rounded-lg bg-sky-900 flex flex-col items-center hover:scale-105 ease-in-out duration-200 shadow-md shadow-black">
          <img className="w-16" src={aws} alt="" />
          <p className="mt-4 text-xl font-thin uppercase">aws</p>
        </div>
      </div>
    </div>
  );
}
 
export default Skills;