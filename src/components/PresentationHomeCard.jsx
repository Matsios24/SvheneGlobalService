import React from "react";

const presentationHomeCard = ({ image, description, title }) => {
  return (
    <div>
      <div className=" gap-5 w-96 h-auto m-auto grid grid-cols-1">
        <img src={image} alt="" className="" />
        <h2 className="text-pink-400 text-3xl xl:text-6xl max-sm:text-4xl font-semibold pl-3">
          {title}
        </h2>
        <p className=" text-2xl text-justify p-2">{description}</p>
      </div>
    </div>
  );
};

export default presentationHomeCard;
