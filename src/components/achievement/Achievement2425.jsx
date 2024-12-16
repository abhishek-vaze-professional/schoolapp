import React from 'react';
import achievementData from '../../data/achievement-24-25.json';
import '../common/common.css';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AchievementList from './AchievementList';

function Achievement2425() {
    console.log(achievementData);
    return (<div className='leftit'>
        <br></br>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header" className='accordion-odd subHeaders'
        >
          Sports
        </AccordionSummary>
        <AccordionDetails>
          <AchievementList data={achievementData.achievementData.sports}/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header" className='accordion-odd subHeaders'
        >
          Non Sports
        </AccordionSummary>
        <AccordionDetails>
        <AchievementList data={achievementData.achievementData.others}/>
        </AccordionDetails>
      </Accordion>
          
          </div>
      );
}

export default Achievement2425;