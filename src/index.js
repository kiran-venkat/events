import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import ImageGal from "./components/imageGallery/ImageGal";
import "./index.css";
import { CTA, Brand, Navbar } from "./components";
import { Footer1, Footer, Blog, Possibility, Features, WhatGPT3, Header } from "./containers";
ReactDOM.render(
  <BrowserRouter>
    <div className="gradient__bg">
      <Navbar />
    </div>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/gallery" element={<ImageGal />} />
      <Route path="/feedback" element={<Footer />} />
    </Routes>
    <Footer1 />
  </BrowserRouter>,

  document.getElementById("root")
);
