import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const btnVariant = {
  hidden: {
    opacity: 0,
    borderColor: "red",
  },
  visible: {
    opacity: 1
  }, 
  hover: {
    scale: 1.05
  }
}

const Btn = ({ text }) => {
  const [show, setShow] = useState(false)

  return (
    <>

    <motion.div className="text-3xl text-white text-center w-fit"
    onHoverStart={() => setShow(true)}
    onHoverEnd={() => setShow(false)}
    >
      something
      <AnimatePresence mode="wait">
      {show && 
      <motion.div
          className="fixed origin-[0%] h-1 w-1 bg-red-500"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            scaleX: 38,
            delay: 1
          }}
          exit={{
            opacity: 0,
            scaleX: 0,
          }}
          transition={{
            type: "spring",
            duration: 2,
            stiffness: 80,
            mass: 0.1
          }}
        ></motion.div>
        }
      </AnimatePresence>
    </motion.div>


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
      </AnimatePresence> */}

    {/* <p className="max-w-[20px]">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam fuga explicabo nihil sit dicta. Commodi earum blanditiis quam explicabo mollitia necessitatibus omnis vel. Tenetur libero blanditiis voluptatibus aut, molestiae ducimus ab facilis minus, itaque eaque ratione quibusdam quia voluptas! Rem sit, earum numquam iure adipisci possimus quod aspernatur laudantium quo quis veritatis deleniti voluptatum ipsa autem quidem doloribus illo asperiores! Placeat magni, maxime id adipisci aperiam consectetur quia optio ex commodi voluptate sint mollitia doloribus recusandae, asperiores aliquam ipsa repudiandae iure minus pariatur ipsam! Quidem animi dignissimos soluta. Repellat sequi ad perspiciatis beatae corporis expedita sunt, eligendi aperiam et cum. Nisi nam dolores molestias eveniet illo tempora officia reiciendis suscipit quae aut alias possimus vero corporis ex fugit maxime tempore accusamus numquam, minus perspiciatis! Obcaecati vero culpa assumenda rem enim magnam nam perferendis expedita eum tempora beatae harum quisquam modi quo delectus, quis exercitationem reprehenderit minus laboriosam tempore quam maiores recusandae earum qui? Vel itaque corporis, ullam unde architecto aliquid tenetur laboriosam quae consequuntur aperiam tempore quos quo amet reiciendis, inventore atque sit reprehenderit cumque rerum recusandae accusantium voluptas eaque. Vero perferendis modi aut sint fugit. Dolorum, quaerat cumque fuga, ducimus ex consequatur sit illo in veritatis, blanditiis vero possimus?
    </p> */}

    {/* <motion.button className="py-4 px-16 rounded-lg uppercase"
      variants={btnVariant}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      {text}
    </motion.button> */}
    </>
  );
}
 
export default Btn;