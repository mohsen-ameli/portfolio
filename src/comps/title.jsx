import AnimatedDiv from "./animatedDiv"

const Title = ({ title, ...props }) => {
  return (
    <AnimatedDiv>
      <h1 className="w-fit py-2 md:py-4 mb-6 text-3xl md:text-5xl font-bold border-b-2 md:border-b-4 border-[#FF5F1F] mx-auto" {...props}>{title}</h1>
    </AnimatedDiv>
  )
}
 
export default Title