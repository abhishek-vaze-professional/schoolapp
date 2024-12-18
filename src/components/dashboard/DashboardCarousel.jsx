import React from "react";
import photoData from "../../data/dashboardPics.json";
import { useMediaQuery, useTheme } from "@mui/material";
function DashboardCarousel() {
  const photos = photoData.dashPics;
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
    </>
  );
}

export default DashboardCarousel;
