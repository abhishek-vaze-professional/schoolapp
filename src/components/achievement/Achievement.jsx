import React from "react";
import AchievementTab from "./AchievementTab";
import { Box } from "@mui/material";
import { whiteBoxStyle } from "../common/commonUtil";
import staffpic from "../../assets/images/achievementpic.jpg";
function Achievement() {
  return (
    <div className="capriolafont textColorGray">
      <p className="sHeader" id="head">Achievements</p>
      <br></br>
      <Box className='content whiteText' sx={whiteBoxStyle}>
          <img src={staffpic} className="staffimg" />
        </Box>
      <Box className="content textColorGray" sx={whiteBoxStyle}>
        <AchievementTab></AchievementTab>
      </Box>
      <br></br>
    </div>
  );
}

export default Achievement;
