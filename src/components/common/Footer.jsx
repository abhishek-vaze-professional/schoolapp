import React from "react";
import { Container, Box, Stack, Divider, Tooltip } from "@mui/material";
import "./common.css";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Footer() {

  function copyToClipBoard (text) {
    navigator.clipboard.writeText(text);
  }
  return (
    <>
      <Container
        className=""
        maxWidth="xxl"
        sx={{
          height: "300px",
          width: "100vw",
          backgroundColor: "slategrey",
          position: "absolute",
          left: 0,
          zIndex: 1100,
          color: "white",
        }}
      >
        <Stack direction="column" divider={<Divider orientation="vertical" flexItem />}
  spacing={2}>
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
              className="capriolafont marginzero "
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
              className="capriolafont marginzero"
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
              className="capriolafont marginzero"
            >
              (Recognised by the Goa Board of Secondary and Higher Secondary
              Education, Porvorim)
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
              className="capriolafont marginzero"
            >
              <span className="">Index No. : </span>{" "}
              <span className="valueFoot">
                <b>01.58</b>{" "}
              </span>
              <span className="lableFoot">UDISE CODE : </span>{" "}
              <span className="valueFoot">
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
              className="capriolafont marginzero"
            >
              Ganeshpuri, Mhapsa, Bardez, Goa - 403 507. (Affiliated to Vidya
              Bharati, Goa)
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
              className="capriolafont marginzero"
            >
              <span className="">
                <span className="iconFoot crimsonColor">
                  <MailIcon />
                </span>
                Email :{" "}
              </span>
              <Tooltip title="Click to copy email to clipboard">
              <span className="valueFoot pointit" onClick={() => copyToClipBoard("highschoolshreeganesh@gmail.com")}>
                <b>highschoolshreeganesh@gmail.com </b>{" "}
              </span>
              </Tooltip>
              <span className="lableFoot">
                <span className="iconFoot crimsonColor">
                  <PhoneIcon />
                </span>
                Contact. No. :{" "}
              </span>
              <Tooltip title="Click to copy contact number to clipboard">
              <span className="valueFoot pointit" onClick={() => copyToClipBoard("7058164535")}>
                <b>7058164535 </b>{" "}
              </span>
              </Tooltip>
              <br></br>
              <span className="iconFoot crimsonColor">
                  <LocationOnIcon />
                </span> <span className="locateme"> <a href="https://maps.app.goo.gl/c1xP8kw5bZPCBbwJA" target="_blank" style={{color:'white'}}>Location</a></span>
            </Box>
          </Box>
          <Box
            sx={{
              paddingTop: "30px",
            }}
          >
            Copyright © 2024 Shree Ganesh Vidyamandir High School. All rights
            reserved
          </Box>
        </Stack>
      </Container>
    </>
  );
}

export default Footer;
