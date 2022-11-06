import React from 'react';
import { google, slack, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA"></div>
    <div>
      <img src={google} />
    </div>
    <div>
      <img src={slack} />
    </div>
    <div>
      <img src={dropbox} />
    </div>
    <div>
      <img src={shopify} />
    </div>
  <div className="gpt3__blog-heading">
  <h1 className="gradient__text">Key Note Speakers</h1> <br/> <br/>
  </div>
  </div>
  </div>
);

export default Brand;
