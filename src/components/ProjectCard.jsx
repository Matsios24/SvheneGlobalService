import React from "react";

const ProjectCard = ({ image, description }) => {
  return (
    <div>
      <div className=" relative  h-70 bg-amber-300 overflow-hidden shadow-sm shadow-neutral-600">
        <img src={image} alt="" className="w-full h-full" />
        <p className="absolute top-45 bg-white w-full text-justify h-full p-2 z-10 opacity-60 font-semibold text-md">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
