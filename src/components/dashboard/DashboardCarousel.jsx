import React from "react";
import Carousel from "better-react-carousel";
import photoData from "../../data/dashboardPics.json";
import useImage from "../common/useImage";
import { useMediaQuery, useTheme } from "@mui/material";
function DashboardCarousel() {
  const photos = photoData.dashPics;
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {isMatch ? (
        <Carousel cols={1} rows={1} gap={10} showDots={true} autoplay={3000} loop>
          {photos.map((object, i) => {
            const { loading, error, image } = useImage(object.img, "photoes");
            return (
              <Carousel.Item>
                <img src={image} className='dashimg-mob' />
              </Carousel.Item>
            );
          })}
        </Carousel>
      ) : (
        <Carousel cols={3} rows={1} gap={1} showDots={true} autoplay={4000} loop>
          {photos.map((object, i) => {
            const { loading, error, image } = useImage(object.img, "photoes");
            return (
              <Carousel.Item>
                <img src={image} className='dashimg' />
              </Carousel.Item>
            );
          })}
        </Carousel>
      )}
    </>
  );
}

export default DashboardCarousel;
