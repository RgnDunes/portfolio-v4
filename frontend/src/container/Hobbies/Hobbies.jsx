import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Hobbies.scss";

const Hobbies = () => {
  const [hobbies, setHobbies] = useState([]);
  const [hobbyList, setHobbyList] = useState([]);
  const [activeHobby, setActiveHobby] = useState("");
  const [activeHobbyDetails, setActiveHobbyDetails] = useState([]);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
    setIsLoading(true);
    const query = '*[_type == "hobbies"]';
    client.fetch(query).then((data) => {
      setHobbies(data);
      const _hobbyList = [];
      data.forEach((hobbiesDocument) => {
        if (Array.isArray(hobbiesDocument.hobbiesList)) {
          hobbiesDocument.hobbiesList.forEach((hobby) =>
            _hobbyList.push(hobby.name)
          );
        }
      });
      setHobbyList(_hobbyList);
      setActiveHobby(_hobbyList[0]);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    handleHobbyFilter(activeHobby);
  }, [activeHobby]);

  const handleHobbyFilter = (selectedHobby) => {
    setActiveHobby(selectedHobby);
    setTimeout(() => {
      const postFilterHobbyList = [];
      hobbies.forEach((hobbiesDocument) => {
        if (Array.isArray(hobbiesDocument.hobbiesList)) {
          hobbiesDocument.hobbiesList.forEach((hobby) => {
            if (hobby.name.toLowerCase() === selectedHobby.toLowerCase()) {
              postFilterHobbyList.push(...hobby.details);
            }
          });
        }
      });
      setActiveHobbyDetails(postFilterHobbyList);
    }, 200);
  };

  return (
    <>
      <div className="app__flex" style={{ flexDirection: "column" }}>
        <h2 className="head-text">
          When I'm <span>Not Working</span> <br />
          <div className="app__work-filter app__flex">
            {hobbyList.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleHobbyFilter(item)}
                className={`app__work-filter-item app__flex p-text ${
                  activeHobby === item ? "item-active" : ""
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </h2>
        {!isLoading ? (
          <motion.div
            whileInView={{ opacity: [0, 1], scale: [0.6, 1] }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            exit={{ opacity: [1, 0], scale: [1, 0.6] }}
            className="masonry-layout-content"
            style={{
              backgroundColor: "var(--white-color)",
              borderRadius: "7px",
            }}
          >
            {(activeHobbyDetails.length > 20
              ? activeHobbyDetails.slice(0, 20)
              : activeHobbyDetails
            )?.map((hobbyDetails, idx) => {
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: isLargeScreen ? 0.6 : 1 }}
                  whileHover={isLargeScreen ? { opacity: 1 } : {}}
                  animate={{ opacity: isLargeScreen ? 0.6 : 1 }}
                  transition={{ duration: 0.25, ease: "easeIn" }}
                  className="masonry-layout-image"
                >
                  <img
                    src={urlFor(hobbyDetails.image)}
                    alt={hobbyDetails.imageLabel}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          "Loading..."
        )}
        <div className="app__work-filter app__flex">
          <div className="app__work-filter-item app__flex p-text item-active">
            and many more...
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Hobbies, "app__hobbies"),
  "hobbies",
  "app__whitebg"
);
