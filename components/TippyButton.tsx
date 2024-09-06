"use client"

import Tippy from '@tippyjs/react'
import "tippy.js/dist/tippy.css"
import "tippy.js/themes/light.css"
import "tippy.js/animations/perspective.css"
import { ReactNode } from "react"

const TippyButton = ({
  name,
  link,
  icon,
}: {
  name: string
  link: string
  icon: ReactNode
}) => {
  const onClick = () => {
    if (name === "Resume")
      window?.open("/resume/resume.pdf", "_blank")
    else
      window.open(link, "_blank", "noreferrer")
  }

  return (
    <Tippy
      className="text-xl"
      offset={[0, 20]}
      content={name}
      placement="top"
      theme="tippy"
      animation="perspective"
    >
      <div
        onClick={onClick}
        className="p-4 text-3xl mx-auto cursor-pointer rounded-full bg-gradient-to-r from-sky-700 to-[#FF5F1F]
    shadow-xl hover:scale-125 hover:ease-in-out duration-300"
        aria-label={name}
      >
        {icon}
      </div>
    </Tippy>
  )
}

export default TippyButton
