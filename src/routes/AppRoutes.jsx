import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import About from "../pages/About";
import Home from "../pages/Home";
import ServicePage from "../pages/ServicePage";
import Project from "../pages/Project";
import { AnimatePresence } from "framer-motion";

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.key}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<ServicePage />} />
          <Route path="projet" element={<Project />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
