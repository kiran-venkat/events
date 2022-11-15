import React from 'react';
import { Footer1, Footer, Blog, Blog1, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';


const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Blog1 />
    <Brand />
    <Footer />
    <Footer1 />
  </div>
);

export default App;
