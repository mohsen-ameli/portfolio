import AnimatedDiv from "./AnimatedDiv"

type TitleProps = {
  title: string
}

/**
 * Title for a page
 */
const Title = ({ title }: TitleProps) => {
  return (
    <AnimatedDiv>
      <div className="w-fit text-white pb-2 mb-4 text-3xl md:text-5xl font-bold border-b-2 md:border-b-4 border-[#FF5F1F] mx-auto">
        {title}
      </div>
    </AnimatedDiv>
  )
}

export default Title
