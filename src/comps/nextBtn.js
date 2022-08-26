import { HiOutlineArrowNarrowRight } from "react-icons/hi"

const NextBtn = ({ className, text, to, offset }) => {
  return (
    <a smooth={true} offset={offset} duration={500} className={className + " w-fit group flex items-center border cursor-pointer border-white py-2 px-4 md:px-8 rounded-md hover:bg-[#FF5F1F] hover:border-[#FF5F1F] hover:drop-shadow-[0_5px_5px_rgba(255,255,255,0.1)]"}>
      <p>{text}</p> <HiOutlineArrowNarrowRight className="text-white text-lg ml-2 group-hover:rotate-90 group-hover:ease-in-out duration-200" />
    </a>
  )
}

export default NextBtn;