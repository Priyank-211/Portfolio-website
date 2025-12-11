import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
const App = () => {
  return (
    <div className="container mx-auto max-w-7xl ">
      <Navbar />
      <Hero />
      <About />
      <Projects />

      <div className="h-[100vh]"></div>
    </div>
  );
};

export default App;
