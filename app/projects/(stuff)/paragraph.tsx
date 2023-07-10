"use client"

import { useState } from "react"

type ParagraphProps = {
  body1: string
  body2: string
}

const Paragraph = ({ body1, body2 }: ParagraphProps) => {
  const [show, setShow] = useState(false)

  return (
    <p className="text-lg md:text-xl leading-relaxed p-4 select-text">
      {body1}
      <span className={!show ? "hidden ml-1" : "ml-1"}>{body2}</span>
      <button
        className="mx-2 px-1 btn text-[#FF5F1F] border-2 border-[#FF5F1F] rounded-md hover:bg-[#FF5F1F] hover:text-white hover:scale-105 duration-150"
        onClick={() => setShow(!show)}
      >
        {!show ? "View More" : "View Less"}
      </button>
    </p>
  )
}

export default Paragraph
