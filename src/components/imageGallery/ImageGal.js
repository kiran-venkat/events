import React from "react";
import Gallery from "react-photo-gallery";
import { blog01, blog02, blog03, blog04, blog05, lb1, lb2, lb3 } from "./imports";
import a from "./1.png";
import b from "./2.png";
import c from "./3.png";
import d from "./4.png";
// import ResponsiveGallery from "react-responsive-gallery";
// const photos = [
//   { src: blog01, width: 4, height: 3 },
//   { src: blog02, width: 1, height: 1 },
//   { src: blog03 },
//   { src: blog04 },
//   { src: blog05 },
// ];
export const photos = [
  {
    src: d,
    width: 9,
    height: 10,
  },
  {
    src: lb1,
    width: 4,
    height: 3,
  },
  {
    src: lb2,
    width: 10,
    height: 9,
  },
  {
    src: lb3,
    width: 400,
    height: 200,
  },
  {
    src: a,
    width: 50,
    height: 50,
  },
  {
    src: b,
    width: 1,
    height: 1,
  },
  {
    src: c,
    width: 1,
    height: 1,
  },
  {
    src: blog02,
    width: 10,
    height: 9,
  },

  {
    src: blog03,
    width: 10,
    height: 9,
  },

  {
    src: blog04,
    width: 10,
    height: 9,
  },

  {
    src: blog05,
    width: 10,
    height: 7,
  },

  // {
  //   src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
  //   width: 4,
  //   height: 3,
  // },
  // {
  //   src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
  //   width: 4,
  //   height: 3,
  // },
  // {
  //   src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
  //   width: 4,
  //   height: 3,
  // },
  // {
  //   src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
  //   width: 4,
  //   height: 3,
  // },
  // {
  //   src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
  //   width: 4,
  //   height: 3,
  // },
];
const ImageGal = () => {
  return <Gallery photos={photos} />;
  // <ResponsiveGallery images={photos} />;
};

export default ImageGal;
