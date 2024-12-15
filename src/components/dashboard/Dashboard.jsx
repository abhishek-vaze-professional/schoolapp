import React from "react";
import { Grid2 } from "@mui/material";
import schoolImg1 from "../../assets/images/Picture1.jpg";
import schoolImg2 from "../../assets/images/Picture2.jpg";
import schoolImg3 from "../../assets/images/Picture3.jpg";
import "./dashboard.css";
import "../common/common.css";
import { Box } from "@mui/material"; 
import { whiteBoxStyle } from "../common/commonUtil";

function dashboard() {
  /*let index = 1;
  const changeImg = () => {
    index++;
    img.setAttribute('src', `../../assets/images/pic${index}.jpg`);

  if (index === 3) {
    index = 0;
  }
};*/
//setInterval(changeImg, 3000);
  return (
    <>
      {/*<Grid2 container spacing={2} className=''>
        <Grid2 item xs={12} sm={12} md={4} className=''>
          <img src={schoolImg1} className='schoolimg' />
        </Grid2>
        <Grid2 item xs={12} sm={12} md={4} className=''>
          <img src={schoolImg2} className='schoolimg' />
        </Grid2>
        <Grid2 item xs={12} sm={12} md={4} className=''>
          <img src={schoolImg3} className='schoolimg' />
        </Grid2>
  </Grid2>*/}
  <p className='sHeader textFont textColorGray'>About Us</p>
      <br></br>
      <Box className="content whiteText" sx={whiteBoxStyle}>
        <p className=' textFont '>
          Goa VidyaPratishthan’s SHREE GANESH VIDYAMANDIR was founded in 19____ by ______ . It is recognized by the Directorate of Education and the Goa S.S.C. Board. The School is managed
          by___________. The School is situated at the top of a hill in a healthy locality.
        </p>
        </Box>
        <br></br>
        <Box className="content whiteText" sx={whiteBoxStyle}>
        <p className=' textFontLarge '>“SGVM MISSION”</p>

        <p className=' textFont '>
        We are committed to nurturing holistic development and a profound sense of nationalism in every student. By cultivating excellence in every aspect of life and fostering a spirit of innovation, we aim to unlock their unique potential with fairness and inclusivity. Our vision extends to connecting students with social agencies to champion humanity, preserve cultural heritage, and drive meaningful change. We aspire to create empowered global citizens, equipped with ethics, resilience, and the skills to excel in life while contributing selflessly to the betterment of society.
        </p>
      </Box>
      <br></br>
    </>
  );
}

export default dashboard;
