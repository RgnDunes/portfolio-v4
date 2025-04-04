import React from "react";
import { motion } from "framer-motion";
import { NAV_ITEMS } from "./constants";

const NavigationDots = ({ activeSection }) => {
  return (
    <motion.div
      className="navigation-dots"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {NAV_ITEMS.map((item, idx) => (
        <motion.a
          href={`#${item}`}
          key={item + idx}
          className={`navigation-dots__dot ${
            activeSection === item ? "active" : ""
          }`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          aria-label={`Go to ${item} section`}
        />
      ))}
    </motion.div>
  );
};

export default NavigationDots;
