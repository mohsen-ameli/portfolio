import { MouseEvent, useRef } from "react"
import { useSpring, animated } from "@react-spring/web"
import Image from "next/image"

const calc = (x: number, y: number, rect: DOMRect) => [
  -(y - rect.top - rect.height / 2) / 5,
  (x - rect.left - rect.width / 2) / 5,
  1.1,
]

const trans = (x: number, y: number, s: number) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const config = {
  mass: 1,
  tension: 170,
  friction: 26,
  clamp: false,
  precision: 0.01,
  velocity: 0,
}

type CardProps = {
  img: string
  name: string
}

const SpringCard = ({ img, name }: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null!)

  const [{ xys }, api] = useSpring(() => ({ xys: [0, 0, 1], config }), [config])

  const handleMouseLeave = () =>
    api.start({
      xys: [0, 0, 1],
    })

  const handleMouseMove = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    const rect = cardRef.current.getBoundingClientRect()
    api.start({
      xys: calc(e.clientX, e.clientY, rect),
    })
  }

  return (
    <animated.div
      className="py-4 px-12 mt-6 rounded-lg bg-sky-900 flex flex-col items-center"
      ref={cardRef}
      style={{
        transform: xys.to(trans),
        boxShadow: "0px 0px 10px 1px rgb(14, 165, 233)",
      }}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <Image
        className={
          "w-12 md:w-16 " +
          (name === "React" && "animate-[spin_5s_linear_infinite]")
        }
        width={1000}
        height={1000}
        quality={100}
        src={img}
        alt={name}
      />
      <p
        className={
          "text-lg md:text-xl font-thin uppercase " +
          (name === "Bootstrap" ? "mt-8" : "mt-4")
        }
      >
        {name}
      </p>
    </animated.div>
  )
}

export default SpringCard
