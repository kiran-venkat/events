import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const featuresData = [
  {
    title: 'Experienced industry experts',
    text: 'We have to onboard some big creators also who can manage our brand identity.',
  },
  {
    title: 'Interactive learning',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Personalized exclusive events',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Social Networking',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
  },
  {
    title: 'Exploring different intrests',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
  },
  {
    title: 'Good event pitches',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features" data-aos="fade-left">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">What we offer? Why choose us?</h1>
      {/* <p>Request Early Access to Get Started</p> */}
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
