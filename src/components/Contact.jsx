import React from "react";
import "aos/dist/aos.css";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = ({ onclose }) => {
  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50 "
      data-aos="zoom-in-down"
      onClick={onclose}
    >
      <div
        className="bg-white grid grid-cols-1 gap-3 rounded-lg shadow-lg w-11/12 max-w-md p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div
          whileHover={{ scale: 1.1, transition: 0.7 }}
          whileTap={{ scale: 0.8 }}
          className="border-2 rounded-md text-center border-sky-500 p-3 w-11/12 max-w-md cursor-pointer  font-semibold hover:bg-sky-500 transition-all hover:text-white"
        >
          Contactez nous par Mail
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1, transition: 0.7 }}
          whileTap={{ scale: 0.8 }}
          className="border-2 rounded-md text-center border-green-500 p-3 w-11/12 max-w-md cursor-pointer  font-semibold hover:bg-green-900 transition-all hover:text-white"
        >
          Contactez-nous par Whatsapp{" "}
        </motion.div>
        <button
          onClick={onclose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
        >
          <FaTimes />
        </button>
      </div>
    </div>

    // <div className=" relative max-sm:h-full w-full ">
    //   <div
    //
    //     className=" z-[101]  left-85 max-sm:top-0 max-sm:left-2 fixed  flex flex-col items-center justify-center  gap-2 m-auto "
    //   >
    //     <div className="bg-white flex flex-col items-center justify-center gap-5 w-2xl  h-[250px] m-auto max-sm:w-[200px] max-sm:h-[200px]">
    //       <h1 className="text-2xl font-semibold">Contactez-nous par :</h1>
    //       <div className="flex gap-5">

    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Contact;
