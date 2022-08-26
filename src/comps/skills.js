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
import linux from "../images/linux.png"
import Container from "./container"
import Title from "./title"
import Item from "./item"

const Skills = () => {
  return (
    <Container className="pt-24">
      <Title title="Skills" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4 select-none">
        <Item>
          <Card img={linux} name="Linux" />
          <Card img={django} name="Django" />
          <Card img={python} name="Python" />
        </Item>
        <Item>
          <Card img={css} name="CSS3" />
          <Card img={react} name="React" />
          <Card img={java} name="Java" />
        </Item>
        <Item>
          <Card img={html} name="HTML5" />
          <Card img={tailwind} name="Tailwind" />
          <Card img={bootstrap} name="Bootstrap" />
        </Item>
        <Item>
          <Card img={js} name="Javascript" />
          <Card img={github} name="Github" />
          <Card img={aws} name="aws" />
        </Item>
      </div>
    </Container>
  );
}

const Card = ({ img, name }) => {
  return (
    <div className="py-4 px-12 my-4 rounded-lg bg-sky-900 flex flex-col items-center hover:scale-105 ease-in-out duration-200 shadow-md shadow-black">
      <img className={"w-12 md:w-16 " + (name === "React" && "animate-[spin_5s_linear_infinite]")} src={img} alt="" />
      <p className={"text-lg md:text-xl font-thin uppercase " + (name === "Bootstrap" ? "mt-8" : "mt-4")}>{name}</p>
    </div>
  )
}
 
export default Skills;