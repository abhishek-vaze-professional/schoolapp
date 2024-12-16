import React from "react";
import { Container, Box, Stack, Divider, Tooltip } from "@mui/material";
import "./common.css";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  function copyToClipBoard(text) {
    navigator.clipboard.writeText(text);
  }
  return (
    <>
      <Container
        className=''
        maxWidth='xxl'
        sx={{
          height: "450px",
          width: "100vw",
          backgroundColor: "slategrey",
          position: "relative",
          left: "-8px",
          zIndex: 1100,
          color: "white",
          bottom: "0px",
          marginBottom:"-8px"
        }}
      >
        <Stack direction='column' divider={<Divider orientation='vertical' flexItem />} spacing={2}>
          <Box
            sx={{
              background: "transparent",
              top: { xl: 20, lg: 20, md: 15, sm: 15, xs: 10 },
              left: { xl: 50, lg: 10, md: 10, sm: 10, xs: 10 },
              zIndex: 1100,
              paddingTop: "15px",
            }}
          >
            <Box
              sx={{
                textAlign: "start",
                fontSize: {
                  xs: "x-Small",
                  sm: "small",
                  md: "medium",
                  lg: "medium",
                  xl: "medium",
                },
              }}
              className='capriolafont marginLeft15'
            >
              Goa Vidya Pratishthan’s
            </Box>
            <Box
              sx={{
                paddingTop: "10px",
                fontSize: {
                  xs: "medium",
                  sm: "medium",
                  md: "large",
                  lg: "large",
                  xl: "x-large",
                },
              }}
              className='capriolafont marginLeft15'
            >
              SHREE GANESH VIDYA MANDIR
            </Box>
            <Box
              sx={{
                paddingTop: "10px",
                fontSize: {
                  xs: "x-Small",
                  sm: "Small",
                  md: "small",
                  lg: "small",
                  xl: "small",
                },
              }}
              className='content marginzero'
            >
              (Recognised by the Goa Board of Secondary and Higher Secondary Education, Porvorim)
            </Box>
            <Box
              sx={{
                paddingTop: "10px",
                fontSize: {
                  xs: "x-Small",
                  sm: "Small",
                  md: "small",
                  lg: "small",
                  xl: "small",
                },
              }}
              className='content marginzero'
            >
              <span className=''>Index No. : </span>{" "}
              <span className='valueFoot' style={{letterSpacing: "2px"}}>
                <b>01.58</b>{" "}
              </span>
              <span className='lableFoot'>UDISE CODE : </span>{" "}
              <span className='valueFoot' style={{letterSpacing: "2px"}}>
                <b> 30010200223 </b>
              </span>
            </Box>
            <Box
              sx={{
                paddingTop: "10px",
                fontSize: {
                  xs: "x-Small",
                  sm: "Small",
                  md: "small",
                  lg: "small",
                  xl: "small",
                },
              }}
              className='content marginzero'
            >
              Ganeshpuri, Mhapsa, Bardez, Goa - 403 507. (Affiliated to Vidya Bharati, Goa)
            </Box>
            <Box
              sx={{
                paddingTop: "10px",
                fontSize: {
                  xs: "x-Small",
                  sm: "Small",
                  md: "small",
                  lg: "small",
                  xl: "small",
                },
              }}
              className='content marginzero'
            >
              <span className=''>
                <span className='iconFoot crimsonColor'>
                  <MailIcon />
                </span>
                Email :{" "}
              </span>
              <Tooltip title='Click to copy email to clipboard'>
                <span className='valueFoot pointit' onClick={() => copyToClipBoard("highschoolshreeganesh@gmail.com")} style={{letterSpacing: "2px"}}>
                  <b>highschoolshreeganesh@gmail.com </b>{" "}
                </span>
              </Tooltip>
            </Box>
            <Box
              sx={{
                paddingTop: "10px",
                fontSize: {
                  xs: "x-Small",
                  sm: "Small",
                  md: "small",
                  lg: "small",
                  xl: "small",
                },
              }}
              className='content marginzero'
            >
              <span className=''>
                <span className='iconFoot crimsonColor'>
                  <PhoneIcon />
                </span>
                Contact. No. :{" "}
              </span>
              <Tooltip title='Click to copy contact number to clipboard'>
                <span className='valueFoot pointit' onClick={() => copyToClipBoard("7058164535")} style={{letterSpacing: "2px"}}>
                  <b>7058164535 </b>{" "}
                </span>
              </Tooltip>
            </Box>
            <Box
              sx={{
                paddingTop: "10px",
                fontSize: {
                  xs: "x-Small",
                  sm: "Small",
                  md: "small",
                  lg: "small",
                  xl: "small",
                },
              }}
              className='content marginzero'
            >
              <span className='iconFoot crimsonColor'>
                <LocationOnIcon />
              </span>{" "}
              <span className='locateme'>
                {" "}
                <a href='https://maps.app.goo.gl/c1xP8kw5bZPCBbwJA' target='_blank' style={{ color: "white" }}>
                  Location
                </a>
              </span>
            </Box>
            <Box
              sx={{
                paddingTop: "10px",
                fontSize: {
                  xs: "x-Small",
                  sm: "Small",
                  md: "small",
                  lg: "small",
                  xl: "small",
                },
              }}
              className='content marginzero'
            >
              <span>
                <YouTubeIcon className='iconFoot crimsonColor' style={{ backgroundColor: "white" }} />
              </span>
              <span className='valueFoot locateme'>
                {" "}
                <a href='https://youtube.com/@shreeganeshvidyamandir?si=fgyN4_B_lFbw_Zwj' target='_blank' style={{ color: "white" }}>
                  School YouTube Channel
                </a>
              </span>
            </Box>
            <Box
              sx={{
                paddingTop: "10px",
                fontSize: {
                  xs: "x-Small",
                  sm: "Small",
                  md: "small",
                  lg: "small",
                  xl: "small",
                },
              }}
              className='content marginzero'
            >
              {" "}
              <span>
                <FacebookIcon className='iconFoot ' style={{ backgroundColor: "white", color: "#0866ff" }} />
              </span>
              <span className='valueFoot locateme'>
                <a href='https://www.facebook.com/shreeganesh.vidyamandir?mibextid=ZbWKwL' target='_blank' style={{ color: "white" }}>
                  School Facebook Page 
                </a>
              </span>
            </Box>
            <Box
            sx={{
              paddingTop: "60px",
            }}
          >
            Copyright © 2024 Shree Ganesh Vidyamandir High School. All rights reserved
          </Box>
          </Box>
          
        </Stack>
      </Container>
    </>
  );
}

export default Footer;
