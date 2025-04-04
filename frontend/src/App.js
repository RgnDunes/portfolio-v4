import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Navbar, ThemeToggle, NavigationDots } from "./components";
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
  const [activeSection, setActiveSection] = useState("home");
  const [headerRef, headerInView] = useInView({ threshold: 0.5 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.5 });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.5 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.5 });
  const [educationRef, educationInView] = useInView({ threshold: 0.5 });
  const [articlesRef, articlesInView] = useInView({ threshold: 0.5 });
  const [recommendationsRef, recommendationsInView] = useInView({
    threshold: 0.5,
  });
  const [contactRef, contactInView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    const storedTheme = localStorage.getItem("isLightThemeActive");
    if (storedTheme !== null) {
      setIsLightMode(storedTheme === "true");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: headerInView, name: "home" },
        { ref: aboutInView, name: "about" },
        { ref: skillsInView, name: "skills" },
        { ref: projectsInView, name: "projects" },
        { ref: educationInView, name: "education" },
        { ref: articlesInView, name: "articles" },
        { ref: recommendationsInView, name: "recommendations" },
        { ref: contactInView, name: "contact" },
      ];

      const active = sections.find((section) => section.ref)?.name || "home";
      setActiveSection(active);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [
    headerInView,
    aboutInView,
    skillsInView,
    projectsInView,
    educationInView,
    articlesInView,
    recommendationsInView,
    contactInView,
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isLightMode;
    setIsLightMode(newTheme);
    localStorage.setItem("isLightThemeActive", newTheme.toString());
  };

  return (
    <div className={`app ${isLightMode ? "light-theme" : "dark-theme"}`}>
      {isLoading ? (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="loading-gif"
          >
            <img src={images.loadingGif} alt="loading-gif" />
          </motion.div>
        </AnimatePresence>
      ) : (
        <>
          <ThemeToggle isLightMode={isLightMode} toggleTheme={toggleTheme} />
          <Navbar activeSection={activeSection} />
          <div ref={headerRef}>
            <Header />
          </div>
          <div ref={aboutRef}>
            <About />
          </div>
          <div ref={skillsRef}>
            <SkillsExperiences />
          </div>
          <div ref={projectsRef}>
            <Projects />
          </div>
          <div ref={educationRef}>
            <Education />
          </div>
          <div ref={articlesRef}>
            <Articles />
          </div>
          <div ref={recommendationsRef}>
            <Recommendations />
          </div>
          <div ref={contactRef}>
            <Contact />
          </div>
          <NavigationDots activeSection={activeSection} />
        </>
      )}
    </div>
  );
};

export default App;
