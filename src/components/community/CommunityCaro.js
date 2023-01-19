import React from "react";
import Box from "@mui/material/Box";
import Slider, { Settings } from "react-slick";

import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme, styled } from "@mui/material/styles";
import IconArrowBack from "@mui/icons-material/ArrowBack";
import IconArrowForward from "@mui/icons-material/ArrowForward";
import "./CommunityCaro.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

import { data } from "./data";
import StyledButton from "../newhome/styled-button";

const SliderArrow = (props) => {
  const { onClick, type, className } = props;
  return (
    <IconButton
      sx={{
        backgroundColor: "background.paper",
        color: "primary.main",
        "&:hover": { backgroundColor: "primary.main", color: "primary.contrastText" },
        // bottom: "-28px !important",
        // left: "unset !important",
        // right: type === "prev" ? "60px !important" : "0 !important",
        zIndex: 10,
        boxShadow: 1,
      }}
      disableRipple
      color="inherit"
      onClick={onClick}
      className={className}
    >
      {type === "next" ? <IconArrowForward sx={{ fontSize: 22 }} /> : <IconArrowBack sx={{ fontSize: 22 }} />}
    </IconButton>
  );
};
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, marginTop: "180px" }} onClick={onClick}>
      <IconArrowForward sx={{ fontSize: 28, color: "black" }} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, marginTop: "180px" }} onClick={onClick}>
      <IconArrowBack sx={{ fontSize: 28, color: "black" }} />
    </div>
  );
}
const StyledDots = styled("ul")(({ theme }) => ({
  "&.slick-dots": {
    position: "absolute",
    left: 0,
    bottom: -20,
    paddingLeft: theme.spacing(1),
    textAlign: "left",
    "& li": {
      marginRight: theme.spacing(2),
      "&.slick-active>div": {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
}));

const CommunityCaro = () => {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("md"));
  const matchMediumView = useMediaQuery(breakpoints.down("sm"));

  //   const settings = {
  //     infinite: true,
  //     autoplay: true,
  //     speed: 5000,
  //
  //     slidesToScroll: 1,
  //     prevArrow: <SliderArrow type="prev" />,
  //     nextArrow: <SliderArrow type="next" />,
  //     dots: true,
  //     autoplaySpeed: 5000,
  //     appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
  //     customPaging: () => (
  //       <Box sx={{ height: 8, width: 30, backgroundColor: "divider", display: "inline-block", borderRadius: 4 }} />
  //     ),
  //   };

  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: matchMediumView ? 1 : matchMobileView ? 5 : 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrow: false,
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    // appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <StyledButton sx={{ p: 2, fontSize: "18px" }} color="primary" size="large" variant="contained">
        Our Community Members Come From
      </StyledButton>

      {/* <div style={{ width: "90%" }}>
        <Slider {...settings}>
          {data.map((d) => {
            console.log(d);
            return <img className="caroImg" src={d.logo} />;
          })}
        </Slider>
      </div> */}

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {data.map((d) => {
          return (
            <SwiperSlide>
              <img className="caroImg" src={d.logo} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default CommunityCaro;
