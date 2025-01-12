import React from "react";
import photoData from "../../data/dashboardPics.json";
import useImage from "../common/useImage";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useMediaQuery, useTheme } from "@mui/material";
import Testimonial from "./Testimonial";
import testimonialData from "../../data/testimonials.json";
function TestimonialCarousel() {
  const testiData = testimonialData.data;
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Carousel autoPlay={true} interval={5000} infiniteLoop={true} showThumbs={false}>
        {testiData.map((obj, i) => (
          <Testimonial user={obj}></Testimonial>
        ))}
      </Carousel>
    </>
  );
}

export default TestimonialCarousel;
