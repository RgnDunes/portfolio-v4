import React from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import { AppWrap } from "../../wrapper";

import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div id="home" className="app__header app__flex home-light-bg">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Voilà! I am</p>
              <h1 className="head-text">Divyansh Singh</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Software Engineer</p>
            <p className="p-text">Technical Content Writer</p>
            <p className="p-text">Instructor</p>
            <p className="p-text">Mentor</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[
          images.javascript,
          images.python,
          images.react,
          images.redux,
          images.typescript,
        ].map((circle, idx) => (
          <div className="circle-cmp app__flex" key={`circle-${idx}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
