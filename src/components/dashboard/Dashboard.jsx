import React from "react";
import { Grid2, Stack } from "@mui/material";
import "./dashboard.css";
import "../common/common.css";
import { Box } from "@mui/material";
import { whiteBoxStyle } from "../common/commonUtil";
import DashboardCarousel from "./DashboardCarousel";
import ChairmanCard from "./ChairmanCard";
import TestimonialCarousel from "./TestimonialCarousel";

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
      <DashboardCarousel></DashboardCarousel>
      <p className='sHeader capriolafont textColorGray' id='head'>
        About Us
      </p>
      <br></br>
      <Box className='content whiteText' sx={whiteBoxStyle}>
        <Stack direction={"row"} spacing={2}>
          <Box>
            {/*<img src={chairmanPic} className=''/>*/}
            <ChairmanCard></ChairmanCard>
          </Box>
          <Box sx={{ alignSelf: "center", fontSize: { xs: "small", sm: "medium", md: "large", lg: "larger", xl: "x-large" } }}>
            " Dear Students, Parents, Faculty, and Friends, I am thrilled to announce the launch of our school website, a significant milestone in our journey towards fostering an inclusive and
            engaging learning environment. In today’s digital age, effective communication and connectivity are vital to the success of any educational institution. With our new website, we aim to
            enhance our community's experience by providing valuable resources, timely updates, and a platform for shared knowledge. Our website serves not only as a hub of information but also as a
            reflection of our school’s values and vision. It is designed to showcase the incredible achievements of our students, highlight the dedication of our staff, and inspire meaningful
            collaboration among parents and educators. We believe that an informed community is an empowered one, and our website will ensure that everyone stays connected and engaged. As we move
            forward, we encourage you to explore the various features of the site, from academic resources to extracurricular activities. Your feedback is invaluable, so please do not hesitate to
            share your thoughts with us as we strive to make this platform even more user-friendly and beneficial. Together, let us embrace this new chapter in our school’s history. I am excited about
            the opportunities that our website will provide for growth, communication, and connection. Thank you for your continued support and commitment to our school community. "
          </Box>
        </Stack>
      </Box>
      <br></br>
      <Box className='content whiteText' sx={whiteBoxStyle}>
        <p className=' textFont '>
          Goa VidyaPratishthan’s SHREE GANESH VIDYAMANDIR was founded in 2003. It is recognized by the Directorate of Education and the Goa S.S.C. Board. The School is managed by Goa Vidya
          Pratishthan. The School is situated at the top of a hill in a healthy locality.
        </p>
      </Box>
      <br></br>
      <Box className='content whiteText' sx={whiteBoxStyle}>
        <p className=' textFontLarge '>“SGVM MISSION”</p>

        <p className=' textFont '>
          We are committed to nurturing holistic development and a profound sense of nationalism in every student. By cultivating excellence in every aspect of life and fostering a spirit of
          innovation, we aim to unlock their unique potential with fairness and inclusivity. Our vision extends to connecting students with social agencies to champion humanity, preserve cultural
          heritage, and drive meaningful change. We aspire to create empowered global citizens, equipped with ethics, resilience, and the skills to excel in life while contributing selflessly to the
          betterment of society.
        </p>
      </Box>
      <br></br>
      <Box className='content whiteText' sx={whiteBoxStyle}>
        <Box className="centerit" sx={{fontSize: {xl:"xx-Large", lg:"xx-large", md:"x-large", sm:"large",xs: "large"}, fontWeight:"Bold", fontFamily:"Montserrat-B"}}>Testimonials</Box>
        <TestimonialCarousel></TestimonialCarousel>
      </Box>
      <br></br>
    </>
  );
}

export default dashboard;
