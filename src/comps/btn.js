import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const btnVariant = {
  hidden: {
    opacity: 0,
    scaleX: 0
  },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { 
      type: "tween",
      stiffness: 100,
      mass: .5
    }
  }
}

const Btn = ({ text, ...props }) => {
  const [show, setShow] = useState(false)

  return (
    <Link {...props}>
      <motion.div className="relative text-lg cursor-pointer text-white text-center"
        onHoverStart={() => setShow(true)}
        onHoverEnd={() => setShow(false)}
      >
        {text}
        <AnimatePresence mode="wait">
          {show && (
            <motion.div
              className="absolute w-full origin-left h-[2px] bg-[#ff5f1f]"
              variants={btnVariant}
              initial="hidden"
              animate="visible"
              exit="hidden"
            ></motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
}

// eslint-disable-next-line
{/* <AnimatePresence mode="wait">
    {show && 
    <motion.div
        className="fixed origin-[0%] h-[5px] w-[20px] bg-red-800"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          scaleX: 8,
        }}
        exit={{
          opacity: 0,
          scaleX: 0,
        }}
        transition={{
          type: "spring",
          duration: 1,
          stiffness: 80,
          mass: 0.1
        }}
      ></motion.div>
      }
    </AnimatePresence>

    <p className="max-w-[20px]">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam fuga explicabo nihil sit dicta. Commodi earum blanditiis quam explicabo mollitia necessitatibus omnis vel. Tenetur libero blanditiis voluptatibus aut, molestiae ducimus ab facilis minus, itaque eaque ratione quibusdam quia voluptas! Rem sit, earum numquam iure adipisci possimus quod aspernatur laudantium quo quis veritatis deleniti voluptatum ipsa autem quidem doloribus illo asperiores! Placeat magni, maxime id adipisci aperiam consectetur quia optio ex commodi voluptate sint mollitia doloribus recusandae, asperiores aliquam ipsa repudiandae iure minus pariatur ipsam! Quidem animi dignissimos soluta. Repellat sequi ad perspiciatis beatae corporis expedita sunt, eligendi aperiam et cum. Nisi nam dolores molestias eveniet illo tempora officia reiciendis suscipit quae aut alias possimus vero corporis ex fugit maxime tempore accusamus numquam, minus perspiciatis! Obcaecati vero culpa assumenda rem enim magnam nam perferendis expedita eum tempora beatae harum quisquam modi quo delectus, quis exercitationem reprehenderit minus laboriosam tempore quam maiores recusandae earum qui? Vel itaque corporis, ullam unde architecto aliquid tenetur laboriosam quae consequuntur aperiam tempore quos quo amet reiciendis, inventore atque sit reprehenderit cumque rerum recusandae accusantium voluptas eaque. Vero perferendis modi aut sint fugit. Dolorum, quaerat cumque fuga, ducimus ex consequatur sit illo in veritatis, blanditiis vero possimus?
    </p>

    <motion.button className="py-4 px-16 rounded-lg uppercase"
      variants={btnVariant}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      {text}
    </motion.button>
*/}
 
export default Btn;