import NextBtn from "./nextBtn";
import Typed from 'react-typed';

import {BsGithub, BsTwitter, BsInstagram} from "react-icons/bs"
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import 'tippy.js/animations/perspective.css';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen flex flex-col justify-center md:pl-20 pl-8 max-w-[1000px] mx-auto text-white">
      <h3 className="text-[#FF5F1F]">Hi, my name is</h3>
      <h2 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-sky-200">Mohsen Ameli</h2>
      <h1 className="text-3xl sm:text-4xl md:text-7xl font-semibold text-sky-600">
        I'm a <span></span>
        <Typed strings={['Full Stack Developer.', 'Computer Enthusiast.', 'Comp Sci Student.']} typeSpeed={120} backSpeed={70} loop></Typed>
      </h1>
      <p className="py-4">I build amazing websites for both front and back end. I like building cool looking, responsive web apps for fun! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, debitis?</p>
      
      <div className="flex items-center">
        <NextBtn text="Cool Beans" to="about" offset={0} />

        <div className="grid grid-cols-4 gap-10 mx-16 my-4">
          <Tippy offset={[0, 20]} content="GitHub" placement="bottom" theme="tippy" animation="perspective">
            <a className="p-4 mx-auto cursor-pointer rounded-full bg-gradient-to-r from-sky-500 to-green-700
            shadow-xl hover:scale-110 hover:ease-in-out duration-300" href="https://github.com/mohsen-ameli" target="_blank" rel="noopener noreferrer">
              <BsGithub className="" size={30} />
            </a>
          </Tippy>

          <Tippy offset={[0, 20]} content="Twitter" placement="bottom" theme="tippy" animation="perspective">
            <a className="p-4 mx-auto cursor-pointer rounded-full bg-gradient-to-r from-sky-500 to-green-700
            shadow-xl hover:scale-110 hover:ease-in-out duration-300" href="https://twitter.com/AmeliMohsen" target="_blank" rel="noopener noreferrer">
              <BsTwitter size={30} />
            </a>
          </Tippy>

          <Tippy offset={[0, 20]} content="Instagram" placement="bottom" theme="tippy" animation="perspective">
            <a className="p-4 mx-auto cursor-pointer rounded-full bg-gradient-to-r from-sky-500 to-green-700
            shadow-xl hover:scale-110 hover:ease-in-out duration-300" href="https://www.instagram.com/mohsen.ameli83/" target="_blank" rel="noopener noreferrer">
              <BsInstagram size={30} />
            </a>
          </Tippy>
        </div>
      </div>
    </div>
  );
}
 
export default Home;