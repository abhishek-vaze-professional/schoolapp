import React from "react";
import photoData from "../../data/dashboardPics.json";
import useImage from "../common/useImage";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useMediaQuery, useTheme } from "@mui/material";
function DashboardCarousel() {
  const photos = photoData.dashPics;
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Carousel
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showThumbs={false}
      >
        {photos.map((object, i) => {
          const { loading, error, image } = useImage(object.img, "photoes");
          return (
            <div>
              <img src={image} className="dashimg" />
            </div>
          );
        })}
      </Carousel>
    </>
  );
}

export default DashboardCarousel;
