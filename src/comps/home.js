import { HiOutlineArrowNarrowRight } from "react-icons/hi"

const Home = () => {
  return (
    <div name="home" className="w-full h-screen max-w-[1000px] mx-auto text-white pt-32 md:pl-20 pl-8">
      <h3 className="text-[#FF5F1F]">Hi, my name is</h3>
      <h2 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-sky-200">Mohsen Ameli</h2>
      <h1 className="text-3xl sm:text-4xl md:text-7xl font-semibold text-sky-600">I'm a Full Stack Developer.</h1>
      <p className="py-4">I build amazing websites for both front and back end. I like building cool looking, responsive web apps for fun! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, debitis?</p>
      <button className="group flex items-center border border-white py-2 px-8 rounded-md hover:bg-[#FF5F1F] hover:border-[#FF5F1F] hover:drop-shadow-[0_5px_5px_rgba(255,255,255,0.1)]">
        Cool Beans <HiOutlineArrowNarrowRight className="text-white text-lg ml-2 group-hover:rotate-90 group-hover:ease-in-out duration-200" />
      </button>
    </div>
  );
}
 
export default Home;