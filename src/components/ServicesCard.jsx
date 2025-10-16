import React from "react";
import { NavLink } from "react-router-dom";

const ServicesCard = ({ title, image, description }) => {
  return (
    <div className=" w-fit h-6/12 bg-white m-3 rounded-2xl overflow-hidden shadow-2xl shadow-neutral-400">
      <div className="flex flex-1 flex-col">
        {/* ------------------------------------------------ */}
        {/* ######### Image */}
        {/* ------------------------------------------------ */}

        <img src={image} alt={title} className="w-[40rem] h-[20rem]" />

        {/* ------------------------------------------------ */}
        {/* ######### Part title & Description */}
        {/* ------------------------------------------------ */}

        <div className="p-3 flex-1 flex-col">
          <p className="text-green-700 text-3xl font-bold text-start">
            {title}
          </p>
          <p className=" overflow-hidden text-gray-800 text-justify text-2xl w-[20rem]">
            {description}
          </p>
          <p className=" text-end text-xl font-bold">
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
