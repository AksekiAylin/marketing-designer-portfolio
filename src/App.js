import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Intro from "./components/intro";
import About from "./components/about";
import Education from "./components/education";
import Experience from "./components/experience";
import Projects from "./components/projects";
import WhatIDo from "./components/what-i-do";
import Contact from "./components/contact";
import BackToTop from "./components/back-top";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Intro />
          <About />
          <Education />
          <Experience />
          <Projects />
          <WhatIDo />
          <Contact />
          <BackToTop />
        </div>
      </Router>
    );
  }
}

export default App;