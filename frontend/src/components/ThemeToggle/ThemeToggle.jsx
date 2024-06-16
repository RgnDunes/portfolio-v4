import React, { useState, useEffect } from "react";
import classNames from "classnames";

import "./ThemeToggle.scss";

const UnChecked = () => <>🌞</>;
const Checked = () => <>🌜</>;

const ThemeToggle = (props) => {
  const [toggle, setToggle] = useState(true);
  const { defaultChecked, onChange, disabled, className } = props;

  useEffect(() => {
    if (defaultChecked) {
      setToggle(defaultChecked);
    }
  }, [defaultChecked]);

  const triggerToggle = () => {
    if (disabled) {
      return;
    }
    setToggle(!toggle);
  };

  useEffect(() => {
    localStorage.setItem("isLightThemeActive", toggle);
    window.dispatchEvent(new Event("storage"));
  }, [toggle]);

  const toggleClasses = classNames(
    "wrg-toggle",
    {
      "wrg-toggle--checked": toggle,
      "wrg-toggle--disabled": disabled,
    },
    className
  );

  return (
    <div
      onClick={triggerToggle}
      className={`${toggleClasses} app__theme-toggle-container`}
    >
      <div className="wrg-toggle-container">
        <div className="wrg-toggle-check">
          <span>{Checked()}</span>
        </div>
        <div className="wrg-toggle-uncheck">
          <span>{UnChecked()}</span>
        </div>
      </div>
      <div className="wrg-toggle-circle"></div>
      <input
        type="checkbox"
        aria-label="Toggle Button"
        className="wrg-toggle-input"
      />
    </div>
  );
};

export default ThemeToggle;
