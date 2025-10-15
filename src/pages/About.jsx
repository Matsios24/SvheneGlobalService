import React from "react";
import mage from "../assets/projet_realisation.jpg";
const About = () => {
  return (
    <div className=" w-full flex-col gap-2 flex-wrap">
      <div className="w-full h-70 bg-amber-600 overflow-hidden">
        <img src={mage} alt="" className="w-full h-full  object-cover " />
      </div>
      <h1 className="text-5xl font-bold text-center mt-3">A Propos de Nous</h1>
      <div className=" text-justify p-3 text-[1.2rem] w-auto m-auto first-letter:text-7xl">
        {/* Espace pour le texe de About */}
      </div>
      <div className="bg-green-800 w-80 text-center shadow-2xl shadow-neutral-700 h-80 flex flex-col gap-2 p-2 justify-evenly items-center m-auto mb-3">
        <h1 className="text-green-500 font-bold text-4xl ">
          Envie d'en savoir Plus ?
        </h1>
        <p className="text-2xl text-white">
          Notre équipe se tient à votre disposition
        </p>
        <div className="border-2 border-green-400 p-3 w-50 cursor-pointer text-green-400 font-semibold hover:bg-green-500 transition-all hover:text-white">
          CONTACTEZ-NOUS
        </div>
      </div>
    </div>
  );
};

export default About;
