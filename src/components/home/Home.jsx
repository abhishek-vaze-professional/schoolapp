import React from "react";
import "./home.css";
import { Stack, Box } from "@mui/material";
import primaryBoy from "../../assets/images/uniform/primary-boy.jpg";
import primaryGirl from "../../assets/images/uniform/primary-girl.jpg";
import secondaryBoy from "../../assets/images/uniform/secondary-boy.jpg";
import secondaryGirl from "../../assets/images/uniform/secondary-girl.jpg";

import { whiteBoxStyle } from "../common/commonUtil";

function home() {
  return (
    <>
      <p className='sHeader capriolafont textColorGray'>Home</p>
      <div className='content textColorGray'>
        <Box className="whiteBox" sx={whiteBoxStyle}>
        <p className='homeTitle'>
          <b>ADMISSION AND WITHDRAWAL</b>
        </p>
        <ul>
          <li>Every student seeking admission must be introduced by his/her Parents/Guardians, who shall be responsible for his/her regular attendance, studies, good conduct and fees, if any.</li>
          <li>
            The following certificates/documents should be produced :<p>For Shishuvatika :</p>
            <ol>
              <li>Birth Certificate in original.</li>
              <li>Adhaar Card photocopies of a child and both parents.</li>
              <li>One passport sized photograph of a child.</li>
              <li>Address Proof.</li>
            </ol>
            <br></br>
            <p>For Class I:</p>
            <ol>
              <li>Birth Certificate in original.</li>
              <li>Adhaar Card photocopies of a child and both parents.</li>
              <li>Address Proof.</li>
            </ol>
            <br></br>
            <p>For Class 2 Onwards :</p>
            <ol>
              <li>Leaving Certificate of a previously attended school in original and final progress report photocopy.</li>
              <li>Adhaar Card photocopies of a child and both parents.</li>
              <li>Address Proof.</li>
            </ol>
            <br></br>
          </li>
          <li>Parents or Guardians wishing to withdraw his/her child from school must notify the headmaster in writing on or before the last day of the academic year.</li>
        </ul>
        </Box>
        <br></br>
        <Box className="whiteBox" sx={whiteBoxStyle}>
        <p>
          <b>ATTENDANCE</b>
        </p>
        <ol>
          <li>Student should attend the school regularly and punctually.</li>
          <li>
            No student should remain absent without the permission of the Class teacher/ Headmaster. In case, the pupil is sick he/she must bring a note from the parent/ guardian while returning
            clarifying the fact to the school and attach Doctor's leaflet if absent for more than 3 days.
          </li>
          <li>If a student is absent because of illness, information should be sent to the class teacher/headmaster within three days in writing or telephonically.</li>
          <li>Leave of absence will be granted for genuine reasons on a written note from the parent/guardian.</li>
          <li>Student is liable to be dismissed for irregular attendance, habitual idleness, disobedience or misbehavior.</li>
        </ol>
        </Box>
        <br></br>
        <Box className="whiteBox" sx={whiteBoxStyle}>
        <p>
          <b>GUIDELINES FOR PARENTS</b>
        </p>
        <ol>
          <li>Parents/Guardians should see that their ward attends classes regularly and does not remain absent from the school except for weighty reasons.</li>
          <li>Students will not be permitted to leave the school early, except in case of emergency</li>
          <li>Parents should see that their child comes to School in complete and neat uniform before 7:45 a.m.</li>
          <li>Parents should see that the boys have a proper haircut.</li>
        </ol>
        </Box>
        <br></br>
        <Box className="whiteBox" sx={whiteBoxStyle}>
        <p>
          <b>SCHOOL UNIFORMS</b>
        </p>
        <p> Primary </p>
        <Stack direction="row" spacing={4} className="menuFont marginTop15">
          

          <Box sx={{ width: "200 px", height:"354px"}}><img src = {primaryBoy} className="pboy uniform"/></Box>
          <Box sx={{ width: "200 px", height:"354px"}}><img src = {primaryGirl} className="pgirl pboy uniform"/></Box>
          </Stack>
          <p> Secondary </p>
          <Stack direction="row" spacing={4} className="menuFont marginTop15">
          <Box sx={{ width: "200 px", height:"354px"}}><img src = {secondaryBoy} className="sboy pboy uniform" /></Box>
          <Box sx={{ width: "200 px", height:"354px"}}><img src = {secondaryGirl} className="sgirl pboy uniform"/></Box>
        </Stack>
        </Box>
        <br></br>
        <br></br>
        <Box className="whiteBox" sx={whiteBoxStyle}>
        <p>
          <b>SCHOOL DAYS AND HOLIDAYS</b>
        </p>
        <p> The scholastic year begins in June and ends in April</p>
        <p>The School Hours are from 7:45 a.m. to 2.00 p.m with recess of twenty minutes from 10:40 a.m to 11:00 a.m.</p>
        <p>At the stroke of the first bell, pupils should go their classrooms.</p>
        <p>All concerned be in the School Premises on all days during the above hours unless specific permission is obtained from the Head of the School.</p>
        </Box>
        <br></br>
      </div>
    </>
  );
}

export default home;
