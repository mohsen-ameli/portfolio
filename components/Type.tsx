"use client"

import Typed from "react-typed"

const Type = ({
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
    <Typed
      strings={strings}
      typeSpeed={typeSpeed}
      backSpeed={backSpeed}
      loop={loop}
    />
  )
}

export default Type
