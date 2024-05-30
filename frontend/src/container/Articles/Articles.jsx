import React, { useState, useEffect } from "react";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Articles.scss";

const Articles = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const query = '*[_type == "articles"]';

    client.fetch(query).then((data) => {
      setAllArticles(data);
    });
  }, []);

  const handleFilteredArticles = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <h2 className="head-text">
        <span>Contributions</span> to the <span>Tech Community</span> <br />
      </h2>
      <div
        className="app__work-filter app__flex"
        onClick={handleFilteredArticles}
      >
        <div className="app__work-filter-item app__flex p-text item-active">
          {showAll ? "See less" : `See all ${allArticles.length} articles.`}
        </div>
      </div>
      <div className="app__flex" style={{ flexWrap: "wrap" }}>
        {(showAll
          ? allArticles
          : allArticles.length > 6
          ? allArticles.slice(0, 6)
          : allArticles
        ).map((article) => (
          <div
            className="app__article-item app__flex"
            style={{ margin: "2rem", maxWidth: "500px" }}
          >
            <img src={urlFor(article.articleThumbnailImage)} />

            <div className="app__article-content">
              <h4 className="bold-text">{article.name}</h4>
              <div>
                <h5 className="p-text">{article.designation}</h5>
              </div>
              <div
                className="app__flex"
                style={{
                  alignItems: "end",
                }}
              >
                <img
                  src={urlFor(article.platformImage)}
                  style={{
                    marginRight: "1rem",
                  }}
                />
                <a
                  href={article.articleLink}
                  target="_blank"
                  className="p-text"
                >
                  <h4 className="p-text">Read.</h4>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Articles, "app__articles"),
  "articles",
  "app__lightbluebg"
);
