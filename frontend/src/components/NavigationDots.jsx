import React from "react";

import { NAV_ITEMS } from "./constants";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {NAV_ITEMS.map((item, idx) => (
        <a
          href={`#${item}`}
          key={item + idx}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
