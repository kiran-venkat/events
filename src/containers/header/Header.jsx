import React from "react";
import ai from "../../assets/ai.png";
import "./header.css";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

// ..
AOS.init();
const Header = () => (
  <div className="gpt3__header section__padding header" id="home">
    <div data-aos="fade-right">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Join India&apos;s Largest Competetive Student Community
        </h1>
        <p>
          Learn from top industry experts, build connections, join different
          clubs, learn real time skills through our community.
        </p>

        <div className="gpt3__header-content__input">
          <button type="button">Get Started</button>
        </div>

        {/* <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div> */}
      </div>
    </div>

    <div data-aos="fade-left">
      <div className="gpt3__header-image">
        <img src={ai} />
      </div>
    </div>
  </div>
);

export default Header;
