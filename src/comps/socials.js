import {BsGithub, BsTwitter, BsInstagram} from "react-icons/bs"
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import 'tippy.js/animations/perspective.css';

// import {IoMdPaperPlane} from "react-icons/io"
// import pdf from "../images/resume-dev.pdf"

const Socials = () => {
  return (
    <div name="socials" className="w-full h-full py-60 max-w-[500px] mx-auto text-white">
      <h1 className="mx-auto w-fit py-4 mb-8 text-5xl font-semibold border-b-4 border-[#FF5F1F]">Socials</h1>
      <div className="grid grid-cols-4 gap-4 mx-4">
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

        {/* <Tippy offset={[0, 20]} content="Indeed" placement="bottom" theme="tippy" animation="perspective">
          <a className="p-4 mx-auto cursor-pointer rounded-full bg-gradient-to-r from-sky-500 to-green-700
          shadow-xl hover:scale-110 hover:ease-in-out duration-300" href="https://github.com/mohsen-ameli" target="_blank" rel="noopener noreferrer">
            <SiIndeed size={30} />
          </a>
        </Tippy> */}

        {/* <Tippy offset={[0, 20]} content="Resume" placement="bottom" theme="tippy" animation="perspective">
          <a className="p-4 mx-auto cursor-pointer rounded-full bg-gradient-to-r from-sky-500 to-green-700
          shadow-xl hover:scale-110 hover:ease-in-out duration-300" href={pdf} target="_blank" rel="noopener noreferrer">
            <IoMdPaperPlane size={30} />
          </a>
        </Tippy> */}
      </div>
    </div>
  );
}
 
export default Socials;