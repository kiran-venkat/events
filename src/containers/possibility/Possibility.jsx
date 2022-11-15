import React from "react";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">
        Direct Collaboration with
        <br /> Colleges clubs.
      </h1>
      {/* <p>
        <li>Focus on both Online & Offline Events.</li>
        <li>We Invite Speakers without any monetary benefit.</li>
        <li>Focus on both Online & Offline Events</li>
        <li>covered dynamic topics.</li>
      </p> */}
    </div>
  </div>
);

export default Possibility;
