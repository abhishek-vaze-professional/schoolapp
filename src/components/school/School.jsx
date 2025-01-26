import React from "react";
import "./school.css";
import "../common/common.css";
import { Box } from "@mui/material"; 
import { whiteBoxStyle } from "../common/commonUtil";

function School() {
  return (
    <>
      <p className="sHeader capriolafont textColorGray" id="head">Our School</p>
      <Box className="content textColorGray justifyme" sx={whiteBoxStyle}>
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
      <Box className="content textColorGray justifyme" sx={whiteBoxStyle}>
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
        <li>CCTV - Equipped with CCTV facilities to enhance the safety and security of our students and staff.</li>
      </ul>
      </Box>
      <br></br>
    </>
  );
}

export default School;
