import NextBtn from "./nextBtn";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen flex flex-col justify-center md:pl-20 pl-8 max-w-[1000px] mx-auto text-white">
      <h3 className="text-[#FF5F1F]">Hi, my name is</h3>
      <h2 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-sky-200">Mohsen Ameli</h2>
      <h1 className="text-3xl sm:text-4xl md:text-7xl font-semibold text-sky-600">I'm a Full Stack Developer.</h1>
      <p className="py-4">I build amazing websites for both front and back end. I like building cool looking, responsive web apps for fun! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, debitis?</p>
      <NextBtn text="Cool Beans" to="about" offset={0} />
    </div>
  );
}
 
export default Home;