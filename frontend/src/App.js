import React from "react";

import { Navbar } from "./components";
import {
  About,
  Articles,
  Certifications,
  Contact,
  Education,
  Experience,
  Header,
  Hobbies,
  Projects,
  Recommendations,
  Skills,
} from "./container";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Recommendations />
      <Articles />
      <Certifications />
      <Hobbies />
      <Contact />
    </div>
  );
};

export default App;
