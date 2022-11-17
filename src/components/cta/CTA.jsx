import React from "react";
import "./cta.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const CTA = () => (
  <div className="gpt3__cta" data-aos="fade-up">
    <div className="gpt3__cta-content">
      <h3>Register Today & start exploring the endless possibilities.</h3>
    </div>
    <div className="gpt3__cta-btn">
      <a href="#form">
        <button type="button">Get Started</button>
      </a>
    </div>
  </div>
);

export default CTA;
