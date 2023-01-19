import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { EffectCards, Autoplay } from "swiper";
// import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/effect-cards/effect-cards.min.css";
import { TwitterTweetEmbed } from "react-twitter-embed";
import "./styles.css";
import { FacebookEmbed } from "react-social-media-embed";

const Twitter = () => {
  return (
    <div
      className="socialContainer"
      style={{
        display: "flex",
        // height: "90vh",
        width: "100%",
        overflow: "hidden",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      <div className="tswiperContainer">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide className="tswipe-slide">
            <FacebookEmbed url="https://www.facebook.com/Evntorg.in/posts/549662500511204" width={400} />
          </SwiperSlide>
          <SwiperSlide className="tswipe-slide">
            <FacebookEmbed url="https://www.facebook.com/Evntorg.in/posts/498410922392687" width={400} />
          </SwiperSlide>
          <SwiperSlide className="tswipe-slide">
            <FacebookEmbed url="https://www.facebook.com/Evntorg.in/posts/610050817345031" width={400} />
          </SwiperSlide>
          <SwiperSlide className="tswipe-slide">
            <FacebookEmbed url="https://www.facebook.com/Evntorg.in/posts/515816060562515" width={400} />
          </SwiperSlide>
          <SwiperSlide className="tswipe-slide">
            <FacebookEmbed url="https://www.facebook.com/Evntorg.in/posts/515074393970015" width={400} />
          </SwiperSlide>

          {/* <SwiperSlide className="tswipe-slide">
            <TwitterTweetEmbed tweetId="1603327006866755584" />
          </SwiperSlide> */}
          {/* <SwiperSlide className="tswipe-slide">
            <TwitterTweetEmbed tweetId="1606667939411005441" />
          </SwiperSlide> */}
        </Swiper>
      </div>

      <div className="tswiperContainer">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide className="tswipe-slide">
            <TwitterTweetEmbed style={{ width: "200px", backgroundColor: "black" }} tweetId="1510251764754546688" />
          </SwiperSlide>
          <SwiperSlide className="tswipe-slide">
            <TwitterTweetEmbed tweetId="1605984179963002880" />
          </SwiperSlide>
          <SwiperSlide className="tswipe-slide">
            <TwitterTweetEmbed tweetId="1595582850128293888" />
          </SwiperSlide>
          <SwiperSlide className="tswipe-slide">
            <TwitterTweetEmbed tweetId="1604813486324092930" />
          </SwiperSlide>
          <SwiperSlide className="tswipe-slide">
            <TwitterTweetEmbed tweetId="1608833217678946310" />
          </SwiperSlide>
          <SwiperSlide className="tswipe-slide">
            <TwitterTweetEmbed tweetId="1603327006866755584" />
          </SwiperSlide>
          <SwiperSlide className="tswipe-slide">
            <TwitterTweetEmbed tweetId="1605679408353796130" />
          </SwiperSlide>
          <SwiperSlide className="tswipe-slide">
            <TwitterTweetEmbed tweetId="1599066241054175233" />
          </SwiperSlide>
          {/* <SwiperSlide className="tswipe-slide">
            <TwitterTweetEmbed tweetId="1603327006866755584" />
          </SwiperSlide> */}
          {/* <SwiperSlide className="tswipe-slide">
            <TwitterTweetEmbed tweetId="1606667939411005441" />
          </SwiperSlide> */}
        </Swiper>
      </div>
      {/* <div style={{ width: "400px" }}>
        <TwitterTweetEmbed tweetId="1510251764754546688" />
        <TwitterTweetEmbed tweetId="1605984179963002880" />
        <TwitterTweetEmbed tweetId="1595582850128293888" />
      </div> */}
      {/* <div style={{ width: "450px" }}>
        {/* <TwitterTweetEmbed tweetId="1595582850128293888" /> */}
      {/* <TwitterTweetEmbed tweetId="1604813486324092930" />
        <TwitterTweetEmbed tweetId="1608833217678946310" />
        <TwitterTweetEmbed tweetId="1603327006866755584" />
      </div> */}
      {/* // <div style={{ width: "400px" }}>
      //   <TwitterTweetEmbed tweetId="1605679408353796130" />
      //   <TwitterTweetEmbed tweetId="1599066241054175233" />
      //   {/* <TwitterTweetEmbed tweetId="1603327006866755584" /> */}
      {/* // </div>  */}

      {/* <div style={{ width: "400px" }}>
        <TwitterTweetEmbed tweetId="1606667939411005441" />
      </div> */}
    </div>
  );
};

export default Twitter;
