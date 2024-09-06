"use client"

import { ReactTyped } from "react-typed"

const Typed = ({
  strings,
  typeSpeed = 50,
  backSpeed = 80,
  loop = false,
}: {
  strings: string[]
  typeSpeed?: number
  backSpeed?: number
  loop?: boolean
}) => {
  return (
    <ReactTyped
      strings={strings}
      typeSpeed={typeSpeed}
      backSpeed={backSpeed}
      loop={loop}
    />
  )
}

export default Typed
