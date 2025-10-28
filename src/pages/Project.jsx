import React from "react";
import realisation_1 from "../assets/video/realisation_1.mp4";
import realisation_2 from "../assets/video/realisation_2.mp4";
import imageprojet from "../assets/soudure_image.jpg";
import equipe_1 from "../assets/equipe_1.jpg";
import logoImage from "../assets/Logo_SGS.jpg";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import "aos/dist/aos.css";

const projet = {
  etude: [
    {
      image: "",
      text: "Nous mettons à votre disposition des techniciens expérimentés, pendants toute la durée du projet, et de l'esquisse, jusqu'au plan d'exécution",
    },
    {
      image: "",
      text: "Nos techniciens méthodes et/ou qualité interviennent rapidement sur votre projet. Avec pour ojectif l'efficience du projet",
    },
  ],
};
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
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
const Project = () => {
  const { etude } = projet;
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className="w-full h-90 bg-amber-600"
      >
        <img
          src={imageprojet}
          alt=""
          className="w-full h-full  object-cover "
        />
      </div>

      <div className="bg-neutral-800 h-auto max-sm:h-auto  ">
        <h1 className="text-6xl font-bold uppercase text-white text-center p-10 max-sm:text-3xl">
          {" "}
          voici Nos projets
        </h1>
        <div className=" p-4 grid md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-2 justify-center xl:justify-center items-center gap-3 w-full h-auto">
          {etude.map((data, i) => (
            <p
              data-aos="flip-down"
              key={i}
              className="  bg-sky-800 text-white w-full h-auto text-2xl text-justify first-letter:text-5xl rounded-sm shadow-md shadow-neutral-600 p-2"
            >
              {data.text}
            </p>
          ))}
        </div>
      </div>
      <div className="w-full h-full ">
        <div className=" grid md:grid-cols-2 max-sm:grid-cols-1 xl:grid-cols-2 gap-2 wrap-anywhere p-3">
          <ProjectCard image={imageprojet} description={"salut"} />
          <ProjectCard image={imageprojet} description={"salut"} />
        </div>
      </div>

      <div className="grid grid-cols-2 max-sm:grid-cols-1 w-full bg-neutral-900">
        {/* video */}
        <div className="p-3 w-full">
          <video
            src={realisation_1}
            controls
            width="250"
            className="w-full h-full rounded-md"
          ></video>
        </div>
        {/* Description */}
        <div data-aos="fade-left" className="p-4 w-full">
          <img src={logoImage} alt="" className="h-30 w-30 m-auto" />
          <h1 className="text-white text-4xl text-center">
            réalisation de la base de congo-plast
          </h1>
          <p className="text-white text-justify w-full">
            la socété svhene global services apris en charge la construction de
            la base de la socété congo-plast à pointe-noire
          </p>
        </div>
      </div>
      {/* Présentation de l'équipe */}
      <div className="w-full h-min relative">
        <h2 className=" text-center text-6xl font-bold p-5 max-sm:text-4xl text-pink-800 h-auto bg-gradient-to-r from-pink-400  to-sky-500 ">
          Notre équipe
        </h2>
        <img
          src={equipe_1}
          alt="presentation de l'équipe"
          className="w-full object-cover h-[400px] max-sm:h-[300px]"
        />
        <h2
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          className="absolute flex flex-col text-4xl font-medium text-neutral-800 max-sm:top-70 top-95  h-auto max-sm:p-2 max-sm:text-2xl p-3 text-center bg-white w-full"
        >
          Toujours disposé à vous satisfaire
          <span className="uppercase text-pink-800 font-bold">
            svhene-global-services
          </span>
          <span className="text-neutral-800 text-sm font-bold">
            {" "}
            Nous vous portons à coeur
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 w-full bg-neutral-900">
        {/* Description */}
        <div data-aos="fade-right" className="p-4 w-full">
          <img src={logoImage} alt="" className="h-30 w-30 m-auto" />
          <h1 className="text-white text-4xl text-center">
            réalisation de la charpente metalique de la socété regal-groupe
            congo
          </h1>
          <p className="text-white text-justify w-full">
            la société svhene global services apris encharge la réalisation de
            la charpente metalique pour le conte de la société régal-groupe
            congo
          </p>
        </div>
        <div className="p-3 w-full">
          <video controls width="300px" className="w-full h-full rounded-md">
            <source src={realisation_2} type="video/mp4" />
          </video>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
