import React from "react";
import gpt3Logo from "../../logo.svg";
import "./footer1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../containers/socialfollow/SocialFollow"
import SocialFollow from "../../containers/socialfollow/SocialFollow";


const Footer1 = () => (
  <div className="gpt3__footer1 section__padding">
    {/* <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">  
      <p>Request Early Access</p>
    </div> */}

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <p className="logo-text">EVNTORG</p> <br />
        {/* <img src={gpt3Logo} alt="EventOrg" /> */}
        <p>
          evntorg@gmail.com, <br /> <br /> All Rights Reserved
        </p>
      </div>
      <div className="gpt3__footer-links_div">
        {/* <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p> */}
      </div>
      {/* <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div> */}
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>eventorg@gmail.com</p>
        {/* <p>626620514</p>
        <p>9315677209</p> */}
        <p>New Delhi</p>
      </div>
    </div>
    <SocialFollow />
    <div className="gpt3__footer-copyright">
      <p>@2022 EventOrg. All rights reserved.</p>
    </div>
  </div>
);

export default Footer1;
