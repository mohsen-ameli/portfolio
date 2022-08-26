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
import Container from "./container"
import Title from "./title"

const Skills = () => {
  return (
    <Container className="pt-24">
      <Title title="Skills" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4 select-none">
        <Card img={linux} name="Linux" />
        <Card img={css} name="CSS3" />
        <Card img={html} name="HTML5" />
        <Card img={js} name="Javascript" />
        <Card img={django} name="Django" />
        <Card img={react} name="React" />
        <Card img={tailwind} name="Tailwind" />
        <Card img={github} name="Github" />
        <Card img={python} name="Python" />
        <Card img={java} name="Java" />
        <Card img={bootstrap} name="Bootstrap" />
        <Card img={aws} name="aws" />
      </div>
    </Container>
  );
}

const Card = ({ img, name }) => {
  return (
    <div className="py-4 px-12 rounded-lg bg-sky-900 flex flex-col items-center hover:scale-105 ease-in-out duration-200 shadow-md shadow-black">
      <img className={"w-12 md:w-16 " + (name === "React" && "animate-[spin_5s_linear_infinite]")} src={img} alt="" />
      <p className={"text-lg md:text-xl font-thin uppercase " + (name === "Bootstrap" ? "mt-8" : "mt-4")}>{name}</p>
    </div>
  )
}
 
export default Skills;