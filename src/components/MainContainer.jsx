import React from "react";
import Home from "./Home";
import Blue from "./Blue";
import Red from "./Red";
import About from "./About";
import { Routes, Route } from "react-router-dom";

export function MainContainer() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
