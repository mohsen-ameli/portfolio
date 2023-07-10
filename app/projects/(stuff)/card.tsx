import { MdOutlineViewInAr } from "react-icons/md"
import { BsCodeSlash } from "react-icons/bs"
import Image from "next/image"
import Link from "next/link"
import Paragraph from "./paragraph"
import CardMotion from "./cardMotion"

type CardProps = {
  img: string
  title: string
  url1: string
  url2: string
  body1: string
  body2: string
}

const Card = ({ img, title, url1, url2, body1, body2 }: CardProps) => {
  return (
    <CardMotion>
      {/* Image */}
      <Image
        className="md:h-[400px] md:max-w-[350px] h-[250px] w-full bg-cover object-cover bg-center bg-no-repeat bg-origin-content group rounded-lg"
        src={img}
        alt={title}
        width={700}
        height={700}
        quality={100}
      />

      <div className="self-center w-full py-4">
        {/* Tittle */}
        <h1 className="text-3xl md:text-4xl font-semibold text-[#FF5F1F] px-4">
          {title}
        </h1>

        {/* Paragraph */}
        <Paragraph body1={body1} body2={body2} />

        {/* Buttons */}
        <div className="flex justify-evenly">
          <Link
            href={url1}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer mt-4 py-1 text-lg md:text-xl px-4 flex items-center justify-center btn font-semibold text-[#FF5F1F] border-2 border-[#FF5F1F] rounded-lg hover:bg-[#FF5F1F] hover:text-white hover:scale-105 duration-150"
          >
            <MdOutlineViewInAr className="mx-2" size={25} /> View
          </Link>
          <Link
            href={url2}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer mt-4 py-1 text-lg md:text-xl px-4 flex items-center justify-center btn font-semibold text-[#FF5F1F] border-2 border-[#FF5F1F] rounded-lg hover:bg-[#FF5F1F] hover:text-white hover:scale-105 duration-150"
          >
            <BsCodeSlash className="mx-2" size={25} /> Code
          </Link>
        </div>
      </div>
    </CardMotion>
  )
}

export default Card
