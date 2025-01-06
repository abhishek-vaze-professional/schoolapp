import React from "react";
import photoData from "../../data/dashboardPics.json";
import useImage from "../common/useImage";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useMediaQuery, useTheme, Stack, Box } from "@mui/material";
function DashboardCarousel() {
  const photos = photoData.dashPics;
  const folder = "dash";
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
          console.log(i);
          if (i === 0 || i%3 === 0) {
          const image1 = useImage(photos[i].img, folder);
          const image2 = useImage(photos[i + 1].img, folder);
          const image3 = useImage(photos[i + 2].img, folder);
          return (
            <Stack direction="row" spacing={3} >
              <Box><img src={image1.image} className="dashimg" /></Box>
              <Box><img src={image2.image} className="dashimg" /></Box>
              <Box><img src={image3.image} className="dashimg" /></Box>
            </Stack>
          );
        }
        }).filter((object, i) => i=== 0 || i%3 === 0)}
      </Carousel>
    </>
  );
}

export default DashboardCarousel;
