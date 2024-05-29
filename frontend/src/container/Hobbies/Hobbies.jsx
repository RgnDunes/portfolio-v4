import React from "react";
import { AppWrap } from "../../wrapper";

import "./Hobbies.scss";

const Hobbies = () => {
  return (
    <>
      <h2 className="head-text">
        My <span>Hobbies</span> <br />
      </h2>
    </>
  );
};

export default AppWrap(Hobbies, "hobbies");
