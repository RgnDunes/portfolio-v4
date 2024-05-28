import React from "react";

import { Navbar } from "./components";
import {
  About,
  Articles,
  Certifications,
  Contact,
  Education,
  Header,
  Hobbies,
  Projects,
  Recommendations,
  SkillsExperiences,
} from "./container";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <SkillsExperiences />
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
