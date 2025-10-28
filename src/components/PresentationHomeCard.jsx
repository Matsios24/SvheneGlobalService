import React from "react";
import "aos/dist/aos.css";

const presentationHomeCard = ({ image, description, title }) => {
  return (
    <div
      className=" flex flex-col items-center justify-center"
      data-aos="zoom-in"
      data-aos-duration="3000"
    >
      <img src={image} alt={title} className="w-full h-60" />
      <h2 className="text-pink-400 text-2xl xl:text-5xl max-sm:text-3xl font-semibold p-3">
        {title}
      </h2>
      <p className=" text-2xl text-justify text-neutral-500 max-sm:text-xl">
        {description}
      </p>
    </div>
  );
};

export default presentationHomeCard;
