import Image from "next/image"
import { motion } from "framer-motion"

type CardProps = {
  img: string
  name: string
}

const Card = ({ img, name }: CardProps) => {
  return (
    <motion.div
      className="py-4 px-12 mt-6 rounded-lg bg-sky-900 flex flex-col items-center"
      animate={{
        boxShadow: "0px 0px 10px 1px rgb(14, 165, 233)",
      }}
      whileHover={{
        scale: 1.05,
        transition: {
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeOut",
        },
      }}
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
        priority
      />
      <p
        className={
          "text-lg md:text-xl font-thin uppercase " +
          (name === "Bootstrap" ? "mt-8" : "mt-4")
        }
      >
        {name}
      </p>
    </motion.div>
  )
}

export default Card
