import React from "react";

import { TwitterTweetEmbed } from "react-twitter-embed";
const Twitter = () => {
  return (
    <div style={{ display: "flex", width: "100%", justifyContent: "space-evenly", flexWrap: "wrap" }}>
      <div style={{ width: "400px" }}>
        <TwitterTweetEmbed tweetId="1510251764754546688" />
        {/* <TwitterTweetEmbed tweetId="1605984179963002880" /> */}
        <TwitterTweetEmbed tweetId="1595582850128293888" />
      </div>
      <div style={{ width: "450px" }}>
        {/* <TwitterTweetEmbed tweetId="1595582850128293888" /> */}
        <TwitterTweetEmbed tweetId="1604813486324092930" />
        <TwitterTweetEmbed tweetId="1608833217678946310" />
        <TwitterTweetEmbed tweetId="1603327006866755584" />
      </div>
      <div style={{ width: "400px" }}>
        <TwitterTweetEmbed tweetId="1605679408353796130" />
        <TwitterTweetEmbed tweetId="1599066241054175233" />
        {/* <TwitterTweetEmbed tweetId="1603327006866755584" /> */}
      </div>

      <div style={{ width: "400px" }}>
        <TwitterTweetEmbed tweetId="1606667939411005441" />
      </div>
    </div>
  );
};

export default Twitter;
