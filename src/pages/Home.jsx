import { React, useState } from "react";
import logopartenaire from "../assets/partenaire/gmesmarine-logo.png";
import { motion } from "framer-motion";
import { RiCustomerService2Line } from "react-icons/ri";
import PresentationHomeCard from "../components/presentationHomeCard";
import { services } from "../contents/ContentServices";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "aos/dist/aos.css";
import imageprojet from "../assets/soudure_image.jpg";
import { FaAffiliatetheme } from "react-icons/fa";
import Contact from "../components/Contact";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
const Home = () => {
  const [contact, setContact] = useState(false);

  const handelchange = () => {
    setContact(!contact);
    console.log(contact);
  };
  const iconeSvhene = [
    {
      icone: "",
      title: "Bâtiment",
    },
    {
      icone: "",
      title: "Industrie",
    },
  ];

  const { homeProjet } = services;

  return (
    <div className=" w-full grid grid-cols-1 ">
      <div className="absolute z-7 w-full text-center m-auto  p-6 grid grid-cols-1 max-sm:gap-2 md:gap-6 xl:gap-9">
        <h1
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
          className=" text-8xl max-sm:text-4xl  font-bold mb-10 max-sm:mb-5 text-sky-200"
        >
          SVHENE <br /> GLOBAL SERVICES
        </h1>{" "}
        <p
          data-aos="zoom-in-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="mb-10 max-sm:mb-5 text-white max-sm:text-xl md:text-4xl"
        >
          Prestation de services On/offshore et divers. <br /> Mise à
          disposition du personnel
        </p>
        <motion.button
          whileHover={{ scale: 1.1, transition: 0.7 }}
          whileTap={{ scale: 0.8 }}
          onClick={handelchange}
          className="flex items-center justify-center gap-2 text-justify bg-gradient-to-r from-pink-500  to-sky-500 rounded-sm m-auto p-3 xl:w-80 font-semibold text-md uppercase w-50 cursor-pointer hover:text-white"
        >
          {" "}
          Nous Contacter <RiCustomerService2Line className=" animate-bounce" />
        </motion.button>
      </div>
      {/*  */}
      {contact && <Contact onclose={handelchange} />}
      {/*  */}
      <div className=" relative  flex justify-center items-center bg-scroll opacity">
        <div className=" absolute  inset-0 bg-black opacity-50"></div>
        <img
          src={imageprojet}
          alt=""
          className=" max-sm:h-[300px]  h-[600px] w-full"
        />
      </div>

      <div className=" bg-neutral-800 p-2 w-full max-sm:h-auto items-center justify-center flex flex-col  ">
        <div
          data-aos="zoom-in-down"
          className="grid grid-cols-1 gap-12 max-sm:gap-2 "
        >
          <h1 className="text-center font-semibold text-white text-6xl mt-4 max-sm:text-4xl">
            Nous Sommes à vous !
          </h1>
          <h2 className="text-sky-400 text-center text-2xl max-sm:text-sm">
            Nous mettons à votre disposition des techniciens expérimentés,{" "}
            <br />
            pendant toute la durée du projet et de l'esquisse, jusqu'au plan
            d'exécution .
          </h2>
        </div>
        <div className="w-full flex   max-sm:object-contain max-sm:h-[200px] justify-around gap-4 mt-8">
          {iconeSvhene.map((item, i) => (
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              key={i}
              className=" bg-white h-[250px] max-sm:h-[100px] max-sm:w-[200px] w-3xs grid grid-cols-1 gap-2  "
            >
              {" "}
              <FaAffiliatetheme className="m-auto mt-10 text-7xl max-sm:text-4xl" />
              <div className="p-5 bg-sky-500 mt-6 text-3xl font-light flex justify-between items-center">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Section Partenaire */}
      <div className="w-full h-auto p-4 max-sm:p-2  gap-3 block   overflow-scroll">
        <h3 className="text-center text-5xl underline underline-offset-3 max-sm:text-2xl font-semibold">
          Nos partenaires
        </h3>
        <div className="overflow-scroll w-auto h-auto flex justify-center items-center gap-2 ">
          <img
            src={logopartenaire}
            alt=""
            className="w-20 h-20 max-sm:w-10 max-sm:h-10"
          />
        </div>
      </div>

      <div className="  p-4 gap-2  w-full h-auto max-sm:gap-3  grid grid-cols-3 max-sm:grid-cols-1 md:grid-cols-3 xl:gap-3 ">
        {homeProjet.map((item, i) => (
          <PresentationHomeCard
       
            key={i}
            description={item.description}
            image={item.image}
            title={item.titre}
          />
        ))}
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
          onClick={handelchange}
          className="border-2 border-pink-500 p-3 w-50 cursor-pointer text-pink-800 font-semibold hover:bg-pink-500 transition-all hover:text-white"
        >
          CONTACTEZ-NOUS
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
