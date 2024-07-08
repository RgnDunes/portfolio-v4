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
      <h2 className="head-text" style={{ marginBottom: "60px" }}>
        <span>Contributions</span> to the <span>Tech Community</span> <br />
      </h2>

      <div style={{ width: "100%" }} className="box-style padding">
        {(allArticles.length > 4 ? allArticles.slice(0, 4) : allArticles).map(
          (article) => (
            <div
              className="app__article-item app__flex "
              style={{ margin: "2rem" }}
            >
              <img
                src={urlFor(article.articleThumbnailImage)}
                alt="article-thumbnail"
              />

              <div className="app__article-content">
                <h4 className="bold-text">{article.name}</h4>
                <div>
                  <h5 className="p-text">{article.description}</h5>
                </div>
              </div>
              <div className="app__flex">
                <img
                  src={urlFor(article.platformImage)}
                  style={{
                    marginRight: "1rem",
                  }}
                  alt="article-platform"
                />
                <a
                  href={article.articleLink}
                  target="_blank"
                  rel="noreferrer"
                  className="p-text"
                >
                  <h4 className="p-text">Read.</h4>
                </a>
              </div>
            </div>
          )
        )}
        {allArticles.length > 4 ? (
          <details>
            <summary>View remaining {allArticles.length - 4} articles</summary>
            {(allArticles.length > 4 ? allArticles.slice(4) : []).map(
              (article) => (
                <div
                  className="app__article-item app__flex "
                  style={{ margin: "2rem" }}
                >
                  <img
                    src={urlFor(article.articleThumbnailImage)}
                    alt="article-thumbnail"
                  />

                  <div className="app__article-content">
                    <h4 className="bold-text">{article.name}</h4>
                    <div>
                      <h5 className="p-text">{article.description}</h5>
                    </div>
                  </div>
                  <div className="app__flex">
                    <img
                      src={urlFor(article.platformImage)}
                      style={{
                        marginRight: "1rem",
                      }}
                      alt="article-platform"
                    />
                    <a
                      href={article.articleLink}
                      target="_blank"
                      rel="noreferrer"
                      className="p-text"
                    >
                      <h4 className="p-text">Read.</h4>
                    </a>
                  </div>
                </div>
              )
            )}
          </details>
        ) : null}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Articles, "app__articles"),
  "articles",
  "app__lighttheme"
);
