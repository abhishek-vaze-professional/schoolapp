import React, { useState } from "react";
import useImage from '../common/useImage';
import "./Carousel.css";
import { Carousel } from "react-responsive-carousel";
import { Box } from "@mui/material";

export default function PicCarousel(props)  {
  const data = props.photoes;
  const selectedPic = props.selectedPhoto;
  const folder = "photoes";

  return (
    <div className="carousel">
      <Carousel
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
      >
        {data.map((object, i) => {
          const image1 = useImage(object.img, folder);
          return (
              <Box><img src={image1.image} className="picImage" /></Box>
          );
        })}
      </Carousel>
    </div>
  );
};
