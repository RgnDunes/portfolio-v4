import React, { useState, useEffect } from "react";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Articles.scss";

const Articles = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [renderArticles, setRenderArticles] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const query = '*[_type == "articles"]';

    client.fetch(query).then((data) => {
      setAllArticles(data);
    });
  }, []);

  useEffect(() => {
    setRenderArticles(
      showAll
        ? allArticles
        : allArticles.length > 4
        ? allArticles.slice(0, 4)
        : allArticles
    );
  }, [showAll, allArticles]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2 className="head-text" style={{ marginBottom: "60px" }}>
        Contributions <span>to the</span> Tech Community <br />
      </h2>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
        className="padding scroll-container"
      >
        {renderArticles.map((article) => (
          <>
            <div
              className="article-container padding"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${urlFor(
                  article.articleThumbnailImage
                )})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <a href={article.articleLink}>
                <div className="article-info-bar padding">
                  <div className="article-badge neon-border">
                    {article.platform}
                  </div>
                  <div className="article-badge neon-border">date</div>
                </div>
              </a>

              <div className="app__article-content">
                <h4 className="bold-text">{article.name}</h4>
                <div>
                  <h5 className="p-text">{article.description}</h5>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <div
        className="app__flex bold-text"
        onClick={() => {
          setShowAll(!showAll);
        }}
      >
        <div className="btn">View All Articles</div>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Articles, "app__articles"),
  "articles",
  "app__background"
);
