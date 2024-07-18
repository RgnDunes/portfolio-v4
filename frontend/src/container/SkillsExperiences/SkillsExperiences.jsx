import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import { sortSanityDataByKey } from "../../utils";

import "./SkillsExperiences.scss";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skillsets"]';
    const experiencesQuery = '*[_type == "experience"]';

    client.fetch(experiencesQuery).then((data) => {
      setExperiences(sortSanityDataByKey(data, "id", true));
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        <span>What I</span> Offer <span>and What I've</span> Done
      </h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill, idx) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.image)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp comments-list">
          <div class="comment-chain-container">
            {experiences?.map((experience) => (
              <div
                className="app__flex chain-container"
                style={{ justifyContent: "flex-start" }}
              >
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 1 }}
                  className="app__experience-item-image app__flex chain-icon"
                  key={experience.org}
                >
                  <div className="app__flex">
                    <img src={urlFor(experience.image)} alt={experience.name} />
                  </div>
                </motion.div>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__skills-exp-work chain-content box-style"
                  data-tip
                  data-fo={experience.org}
                  key={experience.org}
                >
                  <h4 className="bold-text">{experience.org}</h4>
                  <p className="p-text">
                    {experience.currentRole} |{" "}
                    <span style={{ color: "dodgerblue" }}>
                      {experience.totalTenure}
                    </span>
                  </p>
                  <br />
                  {experience.description ? (
                    <details>
                      <summary>About</summary>
                      <p className="p-text">
                        <pre
                          style={{
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            overflowX: "auto",
                          }}
                        >
                          {experience.description || ""}
                        </pre>
                      </p>
                    </details>
                  ) : null}
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
  MotionWrap(Skills, "app__skills"),
  "experiences",
  "app__background"
);
