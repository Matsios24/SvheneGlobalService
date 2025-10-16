import React from "react";
import { services } from "../contents/ContentServices.js";
import ServicesCard from "../components/ServicesCard";
const ServicePage = () => {
  const { batiment, industrie } = services;
  return (
    <>
      <h1 className="text-center font-bold text-5xl underline underline-offset-8 p-5">
        BÂTIMENT
      </h1>
      <div className="flex flex-wrap justify-around w-full h-full items-center mb-3">
        {batiment.map((items, i) => (
          <ServicesCard
            key={i}
            description={items.description}
            image={items.image}
            title={items.title}
          />
        ))}
      </div>
      <h1 className="text-center font-bold text-5xl underline underline-offset-8 p-5">
        Industrie
      </h1>
      <div className="flex flex-wrap justify-around w-full h-full items-center">
        {industrie.map((items, i) => (
          <ServicesCard
            key={i}
            description={items.description}
            image={items.image}
            title={items.title}
          />
        ))}
      </div>
    </>
  );
};

export default ServicePage;
