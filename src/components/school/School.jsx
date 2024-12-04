import React from "react";
import "./school.css";
import { Grid2 } from "@mui/material";
import BasicTable from "../common/BasicTable";
import { govbodydata } from "../../data/govbody.json";
import { primarydata } from "../../data/primarymgmt.json";
import { secondarydata } from "../../data/secondarymgmt.json";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function School() {
  //console.log(data);
  return (
    <div className='schoolfont'>
      <p></p>
      <p>
        <b></b>
      </p>
      <p>
        <b>Features of our school at a glance</b>
      </p>
      <ul>
        <li>Felicitation of Regular & Never late Students </li>
        <li>Teachers’ visit to students twice a year</li>
        <li>Chanting of ‘Omkar’ before commencement of every period for improving concentration</li>
        <li>Hemoglobin and health check-ups of all students twice a year</li>
        <li>Talks by doctors on health related issues like adolescence, nutrition etc.</li>
        <li>Residential camps for developing life skills of students</li>
        <li>Training for competitive examinations</li>
        <li>Special training in Vedic Mathematics</li>
        <li>Field trips, excursions, visits to various</li>
        <li>Celebration of different subject day like Languages, Mathematics, Science, Social-Sciences, Music, Art etc.</li>
        <li>Remedial classes for weaker section of students</li>
        <li>Students’ and staffs’Birthday celebration in the assembly</li>
        <li>Special attention towards girls education (Balika Shikshan)</li>
        <li>Special classes for spoken English, Sanskrit, Art and Craft etc.</li>
        <li>Examinations to test cultural knowledge(Sauskruti Dnyan Pariksha)</li>
        <li>Dedicated and energetic galaxy of staff, Parents - dedicated and ever ready to help </li>
        <li>Homely environment School is second home of students and teachers</li>
      </ul>
      <br></br>
      <br></br>
{/*
      <p>
        <b>SCHOOL MANAGING COMMITTEE</b>
      </p>
      <p>
        <b>GOVERNING BODY</b>
      </p>
      <p>
        <b>(2023 - 2026)</b>
      </p>

      <ol>
        <li>Dr. Rajesh Bhatkurse President </li>
        <li>Mr. Anil Samant Vice-President</li>
        <li>Mr. Dilip Mahale Vice-President</li>
        <li>Mr. Minesh Tar Secretary</li>
        <li>Mr. Jeevan Mishal Joint-Secretary</li>
        <li>Mr. Prashant Barve Treasurer</li>
        <li>Mrs. Rajeshwari Walavalkar Org. Secretary</li>
        <li>Mr. Vithal Prabhu Parrikar Member</li>
        <li>Mr. Subhash Velingkar Member</li>
        <li>Mr. Pandurang Nadkarni Member</li>
        <li>Mr. Dnyaneshwar Pednekar Member</li>
        <li>Mr. Venkatesh Deshpande Member</li>
        <li>Mr. Ashish Kavlekar Member</li>
        <li>Dr. Chandrashekhar Kelkar Member</li>
        <li>Mrs. Aparna Kamat Member</li>
      </ol>

      <br></br>
      <br></br>
      <p>
        <b>GOA VIDYA PRATISHTHAN</b>
      </p>
      <p>
        <b>SHREE GANESH VIDYA MANDIR SCHOOL MANAGING COMMITTEE (4.9.2021 TO 3.9.2024)</b>
      </p>
      <p>
        <b>Primary Section</b>
      </p>

      <ol>
        <li>Dr. Rajesh Bhatkurse Chairman </li>
        <li>Mr. Dilip Mahale Manager</li>
        <li>Mr. Rupesh Sawant Headmaster</li>
        <li>Mrs. Sunita Palni P.T.A Representative</li>
        <li>Mrs. Seema Kubal Teachers’ Representative</li>
        <li>Mr. Umesh Mahalkar Teacher from other school</li>
        <li>Mr. Salim Isani Member</li>
        <li>Mrs. Sai Sharma Member</li>
        <li>Mr. Purushottam Kamat Member</li>
        <li>A.D.E.I Rep. of Education Dept.</li>
      </ol>

      <br></br>
      <br></br>
      <p>
        <b>SCHOOL MANAGING COMMITTEE</b>
      </p>
      <p>
        <b>(4.9.2021 TO 3.9.2024)</b>
      </p>
      <p>
        <b>Secondary Section</b>
      </p>

      <ol>
        <li>Dr. Rajesh Bhatkurse <span className="level"><b>Chairman</b></span> </li>
        <li>Mr. Prashan Barve Manager</li>
        <li>Mr. Rupesh Sawant Headmaster</li>
        <li>Mrs. Janhavee Naik P.T.A. Representative</li>
        <li>Mrs. Kashi Shirodkar Teachers’ Representative</li>
        <li>Mr. Sameer Pawaskar Teacher from other school</li>
        <li>Mr. Jeevan Mishal Member</li>
        <li>Mr. Anil Samant Member</li>
        <li>Mr. Shripad Patnekar Member</li>
        <li>A.D.E.I Rep. of Education Dept.</li>
  </ol> */}
      <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          GOVERNING BODY (2023 - 2026)
        </AccordionSummary>
        <AccordionDetails>
          <BasicTable data={govbodydata}></BasicTable>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          SCHOOL MANAGING COMMITTEE - Primary Section - (4.9.2021 TO 3.9.2024)
        </AccordionSummary>
        <AccordionDetails>
          <BasicTable data={primarydata}></BasicTable>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          SCHOOL MANAGING COMMITTEE - Secondary Section - (4.9.2021 TO 3.9.2024)
        </AccordionSummary>
        <AccordionDetails>
          <BasicTable data={secondarydata}></BasicTable>
        </AccordionDetails>
      </Accordion>
      </div>
    </div>
  );
}

export default School;
