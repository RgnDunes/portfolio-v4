import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Navbar, ThemeToggle } from "./components";
import {
  About,
  Articles,
  Certifications,
  Contact,
  Education,
  Header,
  Hobbies,
  Projects,
  Recommendations,
  SkillsExperiences,
} from "./container";

import images from "./constants/images";

import "./App.scss";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLightMode, setIsLightMode] = useState(true);

  window.addEventListener("storage", () => {
    setIsLightMode(localStorage.getItem("isLightThemeActive") === "true");
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 900);
  }, []);

  return (
    <div className={`app ${isLightMode ? "light-theme" : "dark-theme"}`}>
      {isLoading ? (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1,
            }}
            className="loading-gif"
            style={{ width: "100vw", height: "100vh" }}
          >
            <img src={images.loadingGif} alt="loading-gif" />
          </motion.div>
        </AnimatePresence>
      ) : (
        <>
          {/* <ThemeToggle /> */}
          <Navbar />
          <Header />
          <About />
          <SkillsExperiences />
          <Projects />
          <Education />
          <Articles />
          <Recommendations />
          {/* <Certifications /> */}
          {/* <Hobbies /> */}
          <Contact />
        </>
      )}
    </div>
  );
};

export default App;
