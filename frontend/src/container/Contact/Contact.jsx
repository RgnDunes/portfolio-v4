import React, { useState } from "react";

import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import { CgMail } from "react-icons/cg";
import { BsTelephoneOutbound } from "react-icons/bs";

import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    });
  };

  const { name, email, message } = formData;

  return (
    <>
      <h2 className="head-text">
        My <span>Contact</span> <br />
      </h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <CgMail />
          <a href="mailto:rgndunes@gmail.com" className="p-text">
            rgndunes@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <BsTelephoneOutbound />
          <a href="tel:+917394926646" className="p-text">
            +91 7394 926646
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              name="name"
              placeholder="What should I call you ?"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              name="email"
              placeholder="Your Mail ID"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              name="message"
              placeholder="Your Message"
              value={message}
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending" : "Send"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thanks</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Contact, "app__footer"),
  "contact",
  "app__lightbluebg"
);
