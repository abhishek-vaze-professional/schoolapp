import React from "react";
import AchievementTab from "./AchievementTab";
import { Box } from "@mui/material";
import { whiteBoxStyle } from "../common/commonUtil";
function Achievement() {
  return (
    <div className="capriolafont textColorGray">
      <p className="sHeader">Achievements</p>
      <br></br>
      <Box className="content textColorGray" sx={whiteBoxStyle}>
        <AchievementTab></AchievementTab>
      </Box>
      <br></br>
    </div>
  );
}

export default Achievement;
