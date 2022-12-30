import React from "react";
import { Footer1, Footer, Blog, Possibility, Features, WhatGPT3, Header } from "./containers";
import { CTA, Brand, Navbar } from "./components";
import "./App.css";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Twitter from "./containers/twitter/Twitter";

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Header />
    </div>
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    {/* <Blog /> */}
    <Brand />
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <h1 style={{ color: "rgb(1,41,112)", fontSize: "50px", fontFamily: "monospace" }}>Twitter Space</h1>

      <Twitter />
    </div>

    {/* <Footer /> */}
  </div>
);

export default App;
