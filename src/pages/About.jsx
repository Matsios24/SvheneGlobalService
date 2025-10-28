import { React, useState } from "react";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import mage from "../assets/projet_realisation.jpg";
import { motion } from "framer-motion";
import { services } from "../contents/ContentServices.js";
import Contact from "../components/Contact.jsx";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.7, duraton: 0.7 },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  },
};

const About = () => {
  const [contact, setContact] = useState(false);

  const handleChange = () => {
    setContact(!contact);
  };
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const { aboutImage } = services;
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className=" w-full flex flex-col gap-2"
    >
      {contact && <Contact onclose={handleChange} />}
      <div className=" flex justify-center items-center w-full h-screen max-sm:h-full ">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          className="h-full w-full flex justify-center items-center bg-neutral-800  max-sm:h-full"
        >
          {aboutImage.map((item, i) => (
            <SwiperSlide key={i} className=" w-100 h-90 m-auto ">
              <img src={item.image} alt="" className=" m-auto  object-cover " />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <h1 className="text-5xl max-sm:text-3xl font-bold text-center mt-2">
        A Propos de Nous
      </h1>

      <div className=" text-justify p-3 text-[1.2rem]  w-full m-auto ">
        {/* Espace pour le texe de About */}
        <p className="first-letter:text-8xl first-letter:text-pink-600 first-letter:font-extrabold max-sm:text-2xl ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste fugit
          in impedit veritatis nulla suscipit voluptate illum ratione harum
          eveniet, et cumque cupiditate corporis obcaecati, earum sequi odio
          explicabo. Minima.
        </p>
      </div>
      <motion.div
        data-aos="fade-up"
        className="bg-gradient-to-r from-pink-400  to-sky-500 w-80 text-center shadow-2xl shadow-neutral-700 h-80 flex flex-col gap-2 p-2 justify-evenly items-center m-auto mb-3"
      >
        <h1 className="text-pink-900 font-bold text-4xl ">
          Envie d'en savoir Plus ?
        </h1>
        <p className="text-2xl text-white">
          Notre équipe se tient à votre disposition
        </p>
        <motion.div
          whileHover={{ scale: 1.1, transition: 0.7 }}
          whileTap={{ scale: 0.8 }}
          onClick={handleChange}
          className="border-2 border-pink-500 p-3 w-50 cursor-pointer text-pink-800 font-semibold hover:bg-pink-500 transition-all hover:text-white"
        >
          CONTACTEZ-NOUS
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
