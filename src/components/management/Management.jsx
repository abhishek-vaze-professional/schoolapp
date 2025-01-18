import React from "react";
import BasicTable from "../common/BasicTable";
import { govbodydata } from "../../data/govbody.json";
import { primarydata } from "../../data/primarymgmt.json";
import { secondarydata } from "../../data/secondarymgmt.json";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Grid2 } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import "../common/common.css";
import { Box } from "@mui/material";
import { whiteBoxStyle } from "../common/commonUtil";
import { mgmtData } from "../../data/managementPicData.json";
import ProfileCard from "../staff/ProfileCard";

function Management() {
  const HIGH_SCHOOL = "highSchool";
  return (
    <>
      <p className='sHeader capriolafont textColorGray' id='head'>
        School Management
      </p>
      <Box className='content textColorGray' sx={whiteBoxStyle}>
        <Grid2 container spacing={2}>
          {mgmtData.map((object, i) => {
              return (
                <Grid2 item>
                  <ProfileCard user={object} className='card' folder="management"></ProfileCard>
                </Grid2>
              );
          })}
        </Grid2>
        <br></br>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1-content' id='panel1-header' className='accordion-odd'>
            <Diversity3Icon /> <span className='paddingLeft30 subHeaders'>GOVERNING BODY (2023 - 2026)</span>
          </AccordionSummary>
          <AccordionDetails>
            <BasicTable data={govbodydata}></BasicTable>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1-content' id='panel1-header' className='accordion-odd'>
            <Diversity3Icon /> <span className='paddingLeft30 subHeaders'>SCHOOL MANAGING COMMITTEE - Primary Section - (4.9.2021 TO 3.9.2024)</span>
          </AccordionSummary>
          <AccordionDetails>
            <BasicTable data={primarydata}></BasicTable>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1-content' id='panel1-header' className='accordion-odd'>
            <Diversity3Icon /> <span className='paddingLeft30 subHeaders'>SCHOOL MANAGING COMMITTEE - Secondary Section - (4.9.2021 TO 3.9.2024)</span>
          </AccordionSummary>
          <AccordionDetails>
            <BasicTable data={secondarydata}></BasicTable>
          </AccordionDetails>
        </Accordion>
      </Box>
      <br></br>
    </>
  );
}

export default Management;
