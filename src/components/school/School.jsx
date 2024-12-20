import React from "react";
import "./school.css";
import BasicTable from "../common/BasicTable";
import { govbodydata } from "../../data/govbody.json";
import { primarydata } from "../../data/primarymgmt.json";
import { secondarydata } from "../../data/secondarymgmt.json";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import "../common/common.css";
import { Box } from "@mui/material"; 
import { whiteBoxStyle } from "../common/commonUtil";

function School() {
  return (
    <>
      <p className="sHeader capriolafont textColorGray" id="head">Our School</p>
      <Box className="content textColorGray" sx={whiteBoxStyle}>
      <p className="subHeaders">
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
      </Box>
      <br></br>
      <br></br>
      <Box className="content textColorGray" sx={whiteBoxStyle}>
      <p className="subHeaders">
        <b>Facilities</b>
      </p>
      <ul>
        <li>Science Lab: Equipped with advanced equipment for students to conduct experiments and explore scientific concepts.</li>
        <li>Mathematics Lab: Students can learn and explore mathematical concepts and verify mathematical facts and theorems through a variety of activities using different techniques.</li>
        <li>Computer Lab: Modern labs with high-speed internet access for students to develop digital literacy.</li>
        <li>Physical Education Cricket, Volleyball, Football, Table Tennis, Badminton, Kabaddi, Chess, Yoga, Sepaktakraw etc.</li>
        <li>Music room: A place for students to learn to play a variety of musical instruments.</li>
        <li>Library: A variety of materials, such as books, periodicals, newspapers etc.</li>
        <li>Art Education: Drawing, Painting, Sculpture.</li>
        <li>Theatre Art Education</li>
        <li>Auditorium</li>
        <li>Smart classroom</li>
        <li>Open ground</li>
        <li>Counselling</li>
        <li>Fire safety equipment & Security</li>
      </ul>
      </Box>
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
      <Box className="content textColorGray" sx={whiteBoxStyle}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="accordion-odd"
        >
         <Diversity3Icon/> <span className="paddingLeft30 subHeaders">GOVERNING BODY (2023 - 2026)</span>
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
          className="accordion-odd"
        >
          <Diversity3Icon/> <span className="paddingLeft30 subHeaders">SCHOOL MANAGING COMMITTEE - Primary Section - (4.9.2021 TO 3.9.2024)</span>
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
          className="accordion-odd"
        >
          <Diversity3Icon/> <span className="paddingLeft30 subHeaders">SCHOOL MANAGING COMMITTEE - Secondary Section - (4.9.2021 TO 3.9.2024)</span>
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

export default School;
