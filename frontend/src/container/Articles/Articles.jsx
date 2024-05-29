import React, { useState, useEffect } from "react";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Articles.scss";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const query = '*[_type == "articles"]';

    client.fetch(query).then((data) => {
      setArticles(data);
    });
  }, []);
  return (
    <>
      <h2 className="head-text">
        My <span>Articles</span> <br />
      </h2>
      <div className="app__flex" style={{ flexWrap: "wrap" }}>
        {articles.map((article) => (
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
  "app__primarybg"
);
