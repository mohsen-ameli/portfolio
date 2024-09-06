/**
 * Title for a page
 */
const Title = ({ title }: {
  title: string
}) => {
  return (
    <div className="w-fit text-white pb-2 mb-4 text-3xl md:text-5xl font-bold border-b-2 md:border-b-4 border-[#FF5F1F] mx-auto">
        {title}
      </div>
  )
}

export default Title
