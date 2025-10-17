import React from "react";
import { services } from "../contents/ContentServices.js";
import ServicesCard from "../components/ServicesCard";
import { motion } from "framer-motion";

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
const ServicePage = () => {
  const { batiment, industrie } = services;
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2 className="text-center text-6xl font-bold p-5 max-sm:text-4xl text-pink-800 h-auto bg-gradient-to-r from-pink-400  to-sky-500 ">
        Un service de qualité pour tous vos travaux
      </h2>
      <h1 className="text-center text-sky-600 font-bold text-5xl p-5">
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
      <h2 className="text-center text-6xl font-bold p-5 max-sm:text-4xl text-pink-800 h-auto bg-gradient-to-r from-pink-400  to-sky-500 ">
        Un service de qualité pour tous vos travaux
      </h2>
      <h1 className="text-center text-sky-600 font-bold text-5xl p-5">
        Industrie
      </h1>
      <div className="flex flex-wrap gap-2 justify-around w-full h-full items-center">
        {industrie.map((items, i) => (
          <ServicesCard
            key={i}
            transition={{ duration: 0.5, delay: 1 + i * 0.5 }}
            description={items.description}
            image={items.image}
            title={items.title}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ServicePage;
