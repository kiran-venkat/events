import React from "react";
import { google, slack, dropbox, shopify } from "./imports";
import "./brand.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Brand = () => (
  <div className="gpt3__brand section__padding" data-aos="zoom-in-up">
    <div className="gpt3__blog-heading">
      <h1>Key Note Speakers</h1>
    </div>
    <div className="gpt3__blog-container" >
      {/* <div className="gpt3__blog-container_groupA"></div> */}
      <div data-aos="fade-up">
        <img src={google} />
      </div>
      <div data-aos="fade-up">
        <img src={slack} />
      </div>
      <div data-aos="fade-up">
        <img src={dropbox} />
      </div>
      <div data-aos="fade-up">
        <img src={shopify} />
      </div>
    </div>
  </div>
);

export default Brand;
