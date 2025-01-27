import React from "react";

import "../common/common.css";
import Box from "@mui/material/Box";
import PhotoContainer from "./PhotoContainer";
import { whiteBoxStyle } from "../common/commonUtil";
import schoolData from "../../data/gallary/ourSchool.json";
import spData from "../../data/gallary/specialProg.json";
import maData from "../../data/gallary/morningAssembly.json";
import evData from "../../data/gallary/event.json";
import acData from "../../data/gallary/achievementCultural.json";
import asData from "../../data/gallary/achievementSports.json";
import lsData from "../../data/gallary/lessons.json";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Diversity3Icon from "@mui/icons-material/Diversity3";

function LifeAtSGVM() {
  const schoolPics = schoolData.photoData;
  const spPics = spData.photoData;
  const maPics = maData.photoData;
  const evPics = evData.photoData;
  const acPics = acData.photoData;
  const asPics = asData.photoData;
  const lsPics = lsData.photoData;
  return (
    <div className='textColorGray'>
      <p className='sHeader capriolafont' id='head'>
        Photo Gallery{" "}
      </p>
      <br></br>
      <Box className='content textColorGray' sx={whiteBoxStyle}>
        {schoolPics.map((photo, i) => (
          <PhotoContainer folder={photo.folder} title={photo.heading} photoes={photo.photoes} />
        ))}
        {maPics.map((photo, i) => (
          <PhotoContainer folder={photo.folder} title={photo.heading} photoes={photo.photoes} />
        ))}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1-content' id='panel1-header' className='accordion-odd'>
            <Diversity3Icon /> <span className='paddingLeft30 subHeaders'>Special Programs</span>
          </AccordionSummary>
          <AccordionDetails>
            {spPics.map((photo, i) => (
              <PhotoContainer folder={photo.folder} title={photo.heading} photoes={photo.photoes} />
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1-content' id='panel1-header' className='accordion-odd'>
            <Diversity3Icon /> <span className='paddingLeft30 subHeaders'>Event & Activites</span>
          </AccordionSummary>
          <AccordionDetails>
            {evPics.map((photo, i) => (
              <PhotoContainer folder={photo.folder} title={photo.heading} photoes={photo.photoes} />
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1-content' id='panel1-header' className='accordion-odd'>
            <Diversity3Icon /> <span className='paddingLeft30 subHeaders'>Achievments</span>
          </AccordionSummary>
          <AccordionDetails>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1-content' id='panel1-header' className='accordion-odd'>
                <Diversity3Icon /> <span className='paddingLeft30 subHeaders'>Cultural</span>
              </AccordionSummary>
              <AccordionDetails>
                {acPics.map((photo, i) => (
                  <PhotoContainer folder={photo.folder} title={photo.heading} photoes={photo.photoes} />
                ))}
              </AccordionDetails>
            </Accordion>
                {asPics.map((photo, i) => (
                  <PhotoContainer folder={photo.folder} title={photo.heading} photoes={photo.photoes} />
                ))}
          </AccordionDetails>
        </Accordion>
        {lsPics.map((photo, i) => (
          <PhotoContainer folder={photo.folder} title={photo.heading} photoes={photo.photoes} />
        ))}
      </Box>
    </div>
  );
}

export default LifeAtSGVM;
