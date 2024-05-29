import React from "react";

import { AppWrap } from "../../wrapper";
import "./Articles.scss";

const Articles = () => {
  return (
    <>
      <h2 className="head-text">
        My <span>Articles</span> <br />
      </h2>
    </>
  );
};

export default AppWrap(Articles, "articles");
