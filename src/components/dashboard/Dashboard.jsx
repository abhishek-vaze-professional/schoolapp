import React from "react";
import { Grid2 } from "@mui/material";
import "./dashboard.css";
import "../common/common.css";
import { Box } from "@mui/material";
import { whiteBoxStyle } from "../common/commonUtil";
import DashboardCarousel from "./DashboardCarousel";
import ChairmanCard from "./ChairmanCard";
import TestimonialCarousel from "./TestimonialCarousel";
import YouTubeVideo from "../youtube/YouTubeVideo";

function dashboard() {
  return (
    <>
      <DashboardCarousel></DashboardCarousel>
      <p className='sHeader capriolafont textColorGray' id='head'>
        About Us
      </p>
      <br></br>
      <Box className='content whiteText' sx={whiteBoxStyle}>
        <Grid2 container spacing={2}>
          <Grid2 item size={{xs:12, sm:12, md:12, lg:2, xl:2}} offset={{lg:3, xl:3}}>
            <Box>
              <ChairmanCard></ChairmanCard>
            </Box>
          </Grid2>
          <Grid2 item size={{xs:12, sm:12, md:12, lg:5, xl:5}} >
            <Box sx={{ alignSelf: "center", fontSize: { xs: "small", sm: "medium", md: "large", lg: "larger", xl: "larger" } }} className="justifyme">
              " Dear Students, Parents, Faculty, and Friends, I am thrilled to announce the launch of our school website, a significant milestone in our journey towards fostering an inclusive and
              engaging learning environment. In today’s digital age, effective communication and connectivity are vital to the success of any educational institution. With our new website, we aim to
              enhance our community's experience by providing valuable resources, timely updates, and a platform for shared knowledge. Our website serves not only as a hub of information but also as a
              reflection of our school’s values and vision. It is designed to showcase the incredible achievements of our students, highlight the dedication of our staff, and inspire meaningful
              collaboration among parents and educators. We believe that an informed community is an empowered one, and our website will ensure that everyone stays connected and engaged. As we move
              forward, we encourage you to explore the various features of the site, from academic resources to extracurricular activities. Your feedback is invaluable, so please do not hesitate to
              share your thoughts with us as we strive to make this platform even more user-friendly and beneficial. Together, let us embrace this new chapter in our school’s history. I am excited about
              the opportunities that our website will provide for growth, communication, and connection. Thank you for your continued support and commitment to our school community. "
            </Box>
          </Grid2>
        </Grid2>
      </Box>
      <br></br>
      <Box className='content whiteText' sx={{...whiteBoxStyle, alignSelf: "center", fontSize: { xs: "small", sm: "medium", md: "large", lg: "larger", xl: "larger" }}}>
      <p className=' textFontLarge '>“Brief History”</p>
        <p className="justifyme">
        Goa Vidya Pratishthan’s Shree Ganesh Vidyamandir, is situated at the top of a hill in a healthy locality of Ganeshpuri, Mapusa-Goa, and is an esteemed educational institution that has been instrumental in shaping the educational landscape of the region. Established in 2003 under the guidance of visionary educators and community leaders, the school was founded with the aim of providing quality education infused with moral values and a strong cultural foundation.<br></br><br></br>

From its inception, Shree Ganesh Vidyamandir aimed to cater to the educational needs of children in Mapusa and the surrounding areas. The school started with a modest number of students and faculty members but quickly gained recognition for its commitment to academic excellence and holistic development. Over the years, it expanded its infrastructure and curriculum, introducing a range of extracurricular activities that encouraged creativity and critical thinking among students.<br></br><br></br>

The institution is affiliated with the Goa State Board of Secondary and Higher Secondary Education, offering education from the primary level through to secondary education. The focus on both academics and character-building has ensured that students are well-prepared for their future endeavours, whether in higher education or vocational paths.<br></br><br></br>

With a young, dedicated and experienced faculty, Shree Ganesh Vidyamandir has continually adapted to the changing educational landscape, incorporating modern teaching methods and technology into the classroom. The school has emphasized the importance of community involvement, encouraging students to participate in various social and cultural initiatives that promote responsible citizenship.<br></br><br></br>

As it looks towards the future, Shree Ganesh Vidyamandir remains dedicated to its mission of nurturing holistic development and a profound sense of nationalism in every student & providing high-quality education while fostering an environment where students can thrive academically, socially, and personally.
        </p>
      </Box>
      <br></br>
      <Box className='content whiteText' sx={{...whiteBoxStyle, alignSelf: "center", fontSize: { xs: "small", sm: "medium", md: "large", lg: "larger", xl: "larger" }}}>
        <p className=' textFontLarge '>“SGVM MISSION” <span style={{paddingLeft:"20px"}}>ज्ञानार्थ आइए । सेवार्थ जाइए ।।</span></p>

        <p className="justifyme">
          We are committed to nurturing holistic development and a profound sense of nationalism in every student. By cultivating excellence in every aspect of life and fostering a spirit of
          innovation, we aim to unlock their unique potential with fairness and inclusivity. Our vision extends to connecting students with social agencies to champion humanity, preserve cultural
          heritage, and drive meaningful change. We aspire to create empowered global citizens, equipped with ethics, resilience, and the skills to excel in life while contributing selflessly to the
          betterment of society.
        </p>
      </Box>
      <br></br>
      <Box className='content whiteText' sx={{...whiteBoxStyle, alignSelf: "center", fontSize: { xs: "small", sm: "medium", md: "large", lg: "larger", xl: "larger" }}}>
        <YouTubeVideo></YouTubeVideo>
      </Box>
      <br></br>
      <Box className='content whiteText' sx={whiteBoxStyle}>
        <Box className="centerit" sx={{fontSize: {xl:"larger", lg:"larger", md:"larger", sm:"large",xs: "large"}, fontWeight:"Bold", fontFamily:"Montserrat-B"}}>Testimonials</Box>
        <TestimonialCarousel></TestimonialCarousel>
      </Box>
      <br></br>
    </>
  );
}

export default dashboard;
