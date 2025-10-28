import React from "react";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import logo from "../assets/Logo_SGS.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
//
const content = {
  logoImage: logo,
  nav: [
    {
      link: "/",
      title: "Home",
    },
    {
      link: "/services",
      title: "Service",
    },
    {
      link: "/projet",
      title: "Projet",
    },
    {
      link: "/about",
      title: "About",
    },
  ],
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { nav, logoImage } = content;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking on a link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <div
      className={` ${
        scrolled
          ? "fixed opacity-75  flex justify-between items-center w-full bg-gradient-to-r from-pink-500  to-sky-500 shadow-2xl shadow-neutral-700 z-10"
          : "w-auto p-2 flex justify-between  shadow-2xl shadow-neutral-300 "
      }`}
    >
      <NavLink to={"/"} className="flex items-center gap-3">
        <img src={logoImage} alt="" className="w-24 h-17 max-sm:m-2.5 xl:m-2" />{" "}
        <p
          className={`${
            scrolled
              ? " text-white text-4xl font-bold max-sm:text-3xl"
              : "  text-4xl font-bold text-pink-500 max-sm:text-2xl"
          }`}
        >
          {" "}
          Svhene Global Service
        </p>
      </NavLink>
      {/* mobile icone view bar */}

      <button
        onClick={toggleMenu}
        className="text-2xl xl:hidden z-101 mt-5 mr-5 "
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div
        data-aos="fade-left"
        className={`${
          isMenuOpen
            ? "bg-white text-black top-0 z-[80] max-sm:fixed md:fixed to-0%  min-sm:h-[300px] max-sm:h-[300px] w-full flex flex-col justify-start items-center gap-8 transition-all shadow-2xl shadow-neutral-600"
            : "md:hidden xl:flex items-center justify-between w-[50%] max-sm:hidden "
        }`}
      >
        {nav.map((data, i) => (
          <NavLink to={data.link} key={i} onClick={closeMenu}>
            <motion.p
              whileHover={{ scale: 0.8, transition: 0.9 }}
              className="  text-center font-bold p-3 w-40  rounded-4xl transition-all hover:bg-gradient-to-r from-pink-500  to-sky-500 hover:text-white "
            >
              {data.title}{" "}
            </motion.p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Header;
