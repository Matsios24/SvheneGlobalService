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
        <p className="text-center text-sm font-semibold">
          Disponible 7J/7 & 24h/24
        </p>
      </div>
    </div>


  );
};

export default Contact;
