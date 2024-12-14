import React from "react";
import "../common/common.css";
import ResultTab from "./ResultTab";
import { Box } from "@mui/material";
import { whiteBoxStyle } from "../common/commonUtil";
function Result() {
  return (
    <div className="capriolafont textColorGray">
      <p className="sHeader">SCHOOL RESULT S.S.C.</p>
      <Box className="content textColorGray" sx={whiteBoxStyle}>
        <ResultTab></ResultTab>
      </Box>
      <br></br>
    </div>
  );
}

export default Result;
