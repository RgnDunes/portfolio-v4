import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Education.scss";

const Education = () => {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    const query = '*[_type == "education"]';

    client.fetch(query).then((data) => {
      setEducations(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        My <span>Education</span> <br />
      </h2>
      <div className="app__flex">
        <motion.div className="app__education-exp comments-list">
          <div class="comment-chain-container">
            {educations?.map((education) => (
              <div
                className="app__flex chain-container"
                style={{ justifyContent: "flex-start" }}
              >
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 1 }}
                  className="app__education-item-image app__flex chain-icon"
                  key={education.name}
                >
                  <div className="app__flex">
                    <img src={urlFor(education.image)} alt={education.name} />
                  </div>
                </motion.div>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__education-exp-work chain-content"
                  data-tip
                  data-fo={education.name}
                  key={education.name}
                >
                  <h4 className="bold-text app__flex">{education.name}</h4>
                  <p className="p-text app__flex">
                    {" "}
                    <span style={{ color: "dodgerblue" }}>
                      {education.course}
                    </span>
                  </p>
                  <p className="p-text app__flex ">
                    {education.grade} &nbsp; | &nbsp; {education.tenure}
                  </p>
                </motion.div>
                <div class="chain chain-bottom"></div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Education, "app__education"),
  "education",
  "app__lightgreybg"
);
