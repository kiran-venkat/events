import React from "react";

import { TwitterTweetEmbed } from "react-twitter-embed";
const Twitter = () => {
  return (
    <div style={{ display: "flex", width: "100%", justifyContent: "space-evenly", flexWrap: "wrap" }}>
      <div style={{ width: "450px" }}>
        <TwitterTweetEmbed tweetId="1595582850128293888" />
      </div>
      <div style={{ width: "400px" }}>
        <TwitterTweetEmbed tweetId="1605679408353796130" />
        <TwitterTweetEmbed tweetId="1599066241054175233" />
      </div>
      <div style={{ width: "300px" }}>
        <TwitterTweetEmbed tweetId="1510251764754546688" />
        <TwitterTweetEmbed tweetId="1605984179963002880" />
      </div>
      <div style={{ width: "400px" }}>
        <TwitterTweetEmbed tweetId="1606667939411005441" />
      </div>
    </div>
  );
};

export default Twitter;
