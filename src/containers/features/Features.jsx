import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const featuresData = [
  {
    title: 'Experienced industry experts',
    text: 'We onboard some sponsors and speakers to colleges for free.',
  },
  {
    title: 'Interactive learning',
    text: 'We provide students with an interactive learning environment which will enhance their industry experience',
  },
  {
    title: 'Personalized exclusive events',
    text: 'We deliver dynamic events, both online as well as offline straight to the students community',
  },
  {
    title: 'Social Networking & Connections',
    text: 'Meet up with other students and industry experts, build and expand your connections',
  },
  {
    title: 'Explore Your Interests',
    text: 'Find your area of interest, discover and explore your domain ',
  },
  {
    title: 'Good event pitches',
    text: 'Got an idea ?, we\'ll hear you out. So far we have conducted over 20 events online',
  },
];

const Features = () => (
  <div className="gpt3__features" id="features" data-aos="fade-right">
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
