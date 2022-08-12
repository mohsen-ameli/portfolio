import img1 from "../images/zarathustrust.jpg"
import img2 from "../images/persian-empire.jpg"
import img3 from "../images/cute_cat.png"

import { MdOutlineViewInAr } from "react-icons/md"
import { BsCodeSlash } from "react-icons/bs"
import { useState } from "react"

const Projects = () => {
  return (
    <div name="projects" className="w-full h-full py-60 px-4 max-w-[1000px] mx-auto text-white flex flex-col items-center">
      <h1 className="w-fit py-4 mb-6 text-5xl font-semibold border-b-4 border-[#FF5F1F]">Projects</h1>
      {/* <p className="py-6 font-thin">My projects that I've done over the years.</p> */}

      <Card img={img1} title="ZarathusTrust" url1="https://www.zarathustrust.com/" url2="https://github.com/mohsen-ameli/money-moe-linux/" body1="My first big project. It took me quite a while to build it. It was for a business project, that never actually started." body2="Please visit it via the link bellow and sign up for a new account. Then you will be able to access all of the features. I used Bootstrap and some custom CSS for the styling, django for backend and react for frontend. (although in the earlier iterations it was all django) It's been hosted on Linode, Digital Ocean, home RaspberryPi, and heroku before. It has a custom domain." />
      <Card img={img2} title="Persian Empire" url1="https://persianempire.herokuapp.com/" url2="https://github.com/mohsen-ameli/Persian-Empire/" body1="First actual website ever built. This is a blog website, which I made with the help of YouTube tutorials. " body2="I modified its functionality and added some cool features like an editor for posting. I used Bootstrap for styling and Django for the backend, as well as for the front end. It is hosted on Heroku." />
      <Card img={img3} title="Randimalz" url1="https://randimalz.herokuapp.com/" url2="https://github.com/mohsen-ameli/randimalz/" body1="Fun little project I did with a few random free API's I found on github. It's website that has facts about cats and dogs, as well as some pictures and info about all animals." body2="I used quite a few APIs from Wikipedia, to fetch pics, search, and get information about the animals. It is powered by react in the frontend, and one small node server to get it up and running on Heroku." />
    </div>
  );
}


const Card = ({ img, title, url1, url2, body1, body2 }) => {
  const [show, setShow] = useState(false)
  
  return (
    <div className="w-full flex md:flex-row flex-col justify-between text-center rounded-lg bg-sky-900 text-white my-4">
      {/* Image */}
      <div className="md:w-1/2 h-[23rem] bg-cover bg-center bg-no-repeat bg-origin-content group rounded-lg" 
      style={{ backgroundImage: `url(${img})` }}></div>
      <div className="self-center w-full py-4">
        {/* Tittle */}
        <h1 className="text-3xl font-semibold text-[#FF5F1F] px-4">{title}</h1>
        {/* Paragraph */}
        <p className="text-lg leading-relaxed p-4">
          {body1}
          <span className={!show ? "hidden ml-1" : "ml-1"}>
            {body2}
          </span>
          <button className="mx-2 px-1 text-sm btn text-[#FF5F1F] border-2 border-[#FF5F1F] rounded-sm hover:bg-[#FF5F1F] hover:text-white hover:scale-105 duration-150" onClick={() => setShow(!show)}>
            {!show ? "View More" : "View Less"}
          </button> 
        </p>
        {/* Buttons */}
        <div className="flex justify-center">
          <a href={url1} target="_blank" rel="noreferrer" className="cursor-pointer mt-4 py-2 px-4 mx-4 flex items-center justify-center btn font-semibold text-[#FF5F1F] border-2 border-[#FF5F1F] rounded-lg hover:bg-[#FF5F1F] hover:text-white hover:scale-105 duration-150">
            <MdOutlineViewInAr className="mx-2" size={25} /> View
          </a>
          <a href={url2} target="_blank" rel="noreferrer" className="cursor-pointer mt-4 py-2 px-4 mx-4 flex items-center justify-center btn font-semibold text-[#FF5F1F] border-2 border-[#FF5F1F] rounded-lg hover:bg-[#FF5F1F] hover:text-white hover:scale-105 duration-150">
            <BsCodeSlash className="mx-2" size={25} /> Code
          </a>
        </div>
      </div>
    </div>
  )
}


export default Projects;