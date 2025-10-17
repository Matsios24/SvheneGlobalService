import React from "react";
import { NavLink } from "react-router-dom";

const ServicesCard = ({ title, image, description }) => {
  return (
    <div className=" max-sm:min-w-[350px] xl:w-[500px] h-[400px] bg-white m-3 rounded-2xl overflow-hidden shadow-2xl shadow-neutral-400">
      <div className="grid grid-cols-1 xl:grid-cols-2">
        {/* ------------------------------------------------ */}
        {/* ######### Image */}
        {/* ------------------------------------------------ */}
        <div className=" h-full w-full">
          <img
            src={image}
            alt={title}
            className="w-[40rem] h-[20rem] max-sm:h-full xl:h-[500px] object-cover object-center"
          />
        </div>

        {/* ------------------------------------------------ */}
        {/* ######### Part title & Description */}
        {/* ------------------------------------------------ */}

        <div className="p-3 flex-1 flex-col max-sm:relative transparent">
          <p className="text-sky-600 text-3xl font-bold text-start max-sm:bg-transparent">
            {title}
          </p>
          <p className=" overflow-hidden text-gray-800 text-justify text-md w-full">
            {description}
          </p>
          <p className=" text-end flex justify-center text-xl  font-bold">
            {" "}
            <NavLink to="/projet"> Voir Plus</NavLink>{" "}
          </p>
        </div>
      </div>
      <p></p>
    </div>
  );
};

export default ServicesCard;
