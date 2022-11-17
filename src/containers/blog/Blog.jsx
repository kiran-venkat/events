import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blogg-heading">
      <h1 className="gradient__text">A lot is happening, <br /> Check out our events.</h1>
      <br></br>
      <br></br>
      {/* <h1>Past Events</h1> */}
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01}  text="Our 3rd offline event with GDSC club. The event was very interactive among the students. Response from the students was on the top." />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02}  text="Our 2nd offline event in the prestigious college of India IIIT Delhi. Our speaker Adithya Arora nurtures the students with his knowledge and experience." />
        <Article imgUrl={blog03}  text="Our first offline event at NIET greater Noida. The event was very interactive and insightful with our speaker Mr. Paritosh Vatsal Tirupathi" />
        <Article imgUrl={blog04}  text="Wonderful session with Prasad Jivane interacting with students and solving their doubts."/>
        <Article imgUrl={blog05}  text="Wonderful session with Anirudh Palashkar about the Roadmap to UI/UX Designing" />
      </div>
    </div>
  </div>
);

export default Blog;
