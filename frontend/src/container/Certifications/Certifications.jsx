import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Certifications.scss";

const Certifications = () => {
  const [certificates, setCertificates] = useState([]);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 600px)");
    const handleMediaQueryChange = (event) => {
      setIsLargeScreen(event.matches);
    };

    setIsLargeScreen(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const query = '*[_type == "certifications"]';

    client.fetch(query).then((data) => {
      setCertificates(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        My <span>Certifications</span> <br />
      </h2>
      <div className="masonry-layout-content">
        {certificates?.map((certificate) => {
          return (
            <motion.div
              initial={{ opacity: isLargeScreen ? 0.6 : 1 }}
              whileHover={isLargeScreen ? { opacity: 1 } : {}}
              animate={{ opacity: isLargeScreen ? 0.6 : 1 }}
              transition={{ duration: 0.25, ease: "easeIn" }}
              class="masonry-layout-image"
            >
              <img key={certificate.image} src={urlFor(certificate.image)} />
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Certifications, "app__testimonial"),
  "certifications",
  "app__whitebg"
);
