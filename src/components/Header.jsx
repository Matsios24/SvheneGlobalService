import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Logo_SGS.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const content = {
  logoImage: logo,
  nav: [
    { link: "/", title: "Home" },
    { link: "/services", title: "Services" },
    { link: "/projet", title: "Projet" },
    { link: "/about", title: "About" },
  ],
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { nav, logoImage } = content;

  // Effet de défilement
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle menu mobile
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed w-full flex justify-between items-center px-4 py-3 z-20 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-pink-500 to-sky-500 shadow-2xl"
          : "bg-white"
      }`}
    >
      {/* Logo */}
      <NavLink to="/" className="flex items-center gap-2 z-30">
        <img
          src={logoImage}
          alt="Logo SGS"
          className="w-16 h-[60px] object-contain"
        />
        <p
          className={`font-bold text-xl md:text-2xl ${
            scrolled ? "text-white" : "text-pink-500"
          }`}
        >
          Svehene Global Service
        </p>
      </NavLink>

      {/* Bouton menu mobile */}
      <button
        onClick={toggleMenu}
        className="text-3xl xl:hidden z-30 text-pink-500 hover:text-sky-500 transition"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Menu Desktop */}
      <nav className="hidden md:flex items-center justify-between w-[50%]">
        {nav.map((data, i) => (
          <NavLink to={data.link} key={i} onClick={closeMenu}>
            <motion.p
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="font-bold p-2 w-32 text-center rounded-3xl transition-all hover:bg-gradient-to-r from-pink-500 to-sky-500 hover:text-white"
            >
              {data.title}
            </motion.p>
          </NavLink>
        ))}
      </nav>

      {/* Menu Mobile plein écran */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-gradient-to-b from-pink-500 to-sky-500 flex flex-col items-center justify-center gap-10 text-white z-20"
          >
            {nav.map((data, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <NavLink
                  to={data.link}
                  onClick={closeMenu}
                  className="text-2xl font-semibold hover:underline"
                >
                  {data.title}
                </NavLink>
              </motion.div>
            ))}
            <motion.button
              onClick={closeMenu}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="mt-6 text-sm font-semibold bg-white text-pink-500 px-6 py-2 rounded-full shadow-lg hover:bg-sky-100"
            >
              Fermer
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
