import React from "react";

import { AppWrap } from "../../wrapper";
import "./Education.scss";

const Education = () => {
  return (
    <>
      <h2 className="head-text">
        My <span>Education</span> <br />
      </h2>
    </>
  );
};

export default AppWrap(Education, "education");
