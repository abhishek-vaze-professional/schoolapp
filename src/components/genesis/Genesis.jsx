import { Grid2 } from "@mui/material";
import React from "react";
import genesis1 from "../../assets/images/genesis/genesis1.jpg";
import genesis2 from "../../assets/images/genesis/genesis2.jpg";
import "../common/common.css";
import { Box } from "@mui/material"; 
import { whiteBoxStyle } from "../common/commonUtil";

function genesis() {
  return (
    <div>
      <p className="sHeader capriolafont textColorGray">Genesis of School</p>

      <Box className="content textColorGray">
        <Grid2 container spacing={2}>
          <Grid2 item>
            <img src={genesis1} className="schoolimg phot" />
          </Grid2>
          <Grid2 item>
            <img src={genesis2} className="schoolimg phot" />
          </Grid2>
        </Grid2>
        <Grid2 container spacing={2}></Grid2>
      </Box>
      <br></br>
    </div>
  );
}

export default genesis;
