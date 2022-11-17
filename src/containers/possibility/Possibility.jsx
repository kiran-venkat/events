import React from "react";
import club from "../../assets/club.svg";
import "./possibility.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init();

const Possibility = () => (
    <div >
        <div className="gpt3__possibility section__padding" id="possibility">

            <div className="gpt3__possibility-image" data-aos="fade-right">
                <img src={club}
                    alt="possibility"/>
            </div>
            <div className="gpt3__possibility-content" data-aos="fade-left">
                <h1 className="gradient__text">
                    Direct Collaboration with
                    <br/>
                    Colleges clubs.
                </h1>
                {/* <p>
        <li>Focus on both Online & Offline Events.</li>
        <li>We Invite Speakers without any monetary benefit.</li>
        <li>Focus on both Online & Offline Events</li>
        <li>covered dynamic topics.</li>
      </p> */} </div>
        </div>
    </div>
);

export default Possibility;
