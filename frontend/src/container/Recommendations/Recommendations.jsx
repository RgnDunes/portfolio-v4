import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Recommendations.scss";

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [currentRecommendationIdx, setCurrentRecommendationIdx] = useState(0);

  useEffect(() => {
    const query = '*[_type == "recommendations"]';

    client.fetch(query).then((data) => {
      setRecommendations(data);
    });
  }, []);

  const currentTestimonial = recommendations[currentRecommendationIdx];

  const handleClick = (idx) => {
    setCurrentRecommendationIdx(idx);
  };

  return (
    <>
      {recommendations.length && (
        <>
          <motion.div
            key={`${currentTestimonial.name}-${currentTestimonial.designation}`}
            whileInView={{ opacity: [0, 1], scale: [0, 1] }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            exit={{ opacity: [1, 0], scale: [1, 0] }}
            className="app__testimonial-item app__flex"
            style={{ flexDirection: "column" }}
          >
            <img
              src={urlFor(currentTestimonial.imageUrl)}
              style={{ marginBottom: "20px" }}
              alt="testimonial"
            />

            <div className="app__testimonial-content">
              <p className="p-text">{`${currentTestimonial.message.substr(
                0,
                400
              )}${currentTestimonial.message.length > 400 ? "..." : ""}`}</p>
              <div>
                <h4 className="bold-text">{currentTestimonial.name}</h4>
                <h5 className="p-text">{currentTestimonial.designation}</h5>
              </div>
            </div>
          </motion.div>
          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentRecommendationIdx === 0
                    ? recommendations.length - 1
                    : currentRecommendationIdx - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentRecommendationIdx === recommendations.length - 1
                    ? 0
                    : currentRecommendationIdx + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Recommendations, "app__testimonial"),
  "recommendations",
  "app__whitebg"
);
