import React from 'react';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import PhotoGroup from './PhotoGroup';
function PhotoContainer(props) {
  return (
    <>
    <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1-content' id='panel1-header' className='accordion-odd'>
            <Diversity3Icon /> <span className='paddingLeft30 subHeaders'>{props.title}</span>
          </AccordionSummary>
          <AccordionDetails>
          {props.photoes && <PhotoGroup photoes={props.photoes} folder={props.folder}/>}
          </AccordionDetails>
        </Accordion>
    </>
  )
}

export default PhotoContainer;