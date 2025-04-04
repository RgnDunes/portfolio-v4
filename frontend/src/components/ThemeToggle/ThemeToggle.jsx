import React from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

import "./ThemeToggle.scss";

const ThemeToggle = ({ isLightMode, toggleTheme }) => {
  return (
    <motion.button
      className={`theme-toggle ${isLightMode ? "light" : "dark"}`}
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <motion.div
        className="theme-toggle__icon"
        animate={{ rotate: isLightMode ? 0 : 360 }}
        transition={{ duration: 0.5 }}
      >
        {isLightMode ? <FiSun /> : <FiMoon />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
