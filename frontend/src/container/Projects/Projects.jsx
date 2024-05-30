import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import { sortSanityDataByKey } from "../../utils";

import "./Projects.scss";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWorks, setFilterWorks] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    const query = '*[_type == "projects"]';

    client.fetch(query).then((data) => {
      const sortedData = sortSanityDataByKey(data, "id", true);
      setWorks(sortedData);
      setFilterWorks(sortedData);
      setFilters(setFiltersFromTags(sortedData));
    });
  }, []);

  const setFiltersFromTags = (projects) => {
    const tags = new Set();

    projects.forEach((project) => {
      if (project.tags && Array.isArray(project.tags)) {
        project.tags.forEach((tagObj) => {
          if (tagObj.tag) {
            tags.add(tagObj.tag);
          }
        });
      }
    });

    tags.add("All");

    return Array.from(tags);
  };

  const handleWorkFilter = (tag) => {
    setActiveFilter(tag);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (tag === "All") {
        setFilterWorks(works);
        return;
      }

      const lowerCaseTag = tag.toLowerCase();
      const postFilterWorks = works.filter((project) =>
        project.tags.some((t) => t.tag.toLowerCase() === lowerCaseTag)
      );

      setFilterWorks(postFilterWorks);
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My <span>Side Projects</span> <br />
        <div className="app__work-filter app__flex">
          {filters.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          ))}
        </div>
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio"
        >
          {filterWorks.map((project, idx) => (
            <div className="app__work-item app__flex" key={idx}>
              <div className="app__work-img app__flex">
                <img src={urlFor(project.image)} alt={project.name} />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    staggerChildren: 0.5,
                    ease: "easeInOut",
                  }}
                  className="app__work-hover app__flex"
                >
                  <a
                    href={project.projectLinks.githubUrl}
                    target="_blank"
                    rel="noreferr"
                  >
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>

                  {project.projectLinks.liveUrl ? (
                    <a
                      href={project.projectLinks.liveUrl}
                      target="_blank"
                      rel="noreferr"
                    >
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{
                          duration: 0.25,
                        }}
                        className="app__flex"
                      >
                        <AiFillEye />
                      </motion.div>
                    </a>
                  ) : null}
                </motion.div>
              </div>
              <div className="app__work-content app__flex">
                <h4 className="bold-text">{project.name}</h4>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {project.description}
                </p>
                <div
                  className="app__work-tag app__flex"
                  style={{ flexWrap: "wrap" }}
                >
                  {project.tags.map((tag, idx) => (
                    <p className="p-text" key={idx}>
                      {tag.tag} &nbsp;
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </h2>
    </>
  );
};

export default AppWrap(
  MotionWrap(Projects, "app__works"),
  "projects",
  "app__primarybg"
);
