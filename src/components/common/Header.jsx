import React from "react";
import "./common.css";
import schoolLogo from "../../assets/images/logo.jpg";
import { Container, Divider, Grid2, Box } from "@mui/material";
import TabHeader from "./TabHeader";
import schoolbg from "../../assets/images/school-bg.jpg";

function Header() {
  return (
    <>
    <Container className="" maxWidth="xxl">
      <Box sx={{
        height: 'calc((95vw*903)/1600',
        width: "95 vw"
      }} className=""><img src={schoolbg} alt="School" className="resIg fader"/></Box>
      <Box sx={{ background: "transparent", top:10, left: 30, position: "absolute", zIndex:1100, height: 'calc((10vw*262)/202)',
        width: "10 vw" }}>
      <img src={schoolLogo} className="resIg" />
      </Box>
      <Box sx={{ background: "transparent", top:{xl:90, lg:75, md: 60,sm:20,xs:10}, left: {xl:260, lg:200, md: 180,sm:140,xs:100}, position: "absolute", zIndex:1100 }}>
            <Box sx= {{color: "#036EA4",  textAlign: "start",fontSize: {
              xs:"x-Small", sm:"small", md:"medium",lg:"large",xl:"x-large"
            }}} className='capriolafont marginzero paddingTop15'>Goa Vidya Pratishthan’s</Box>
            <Box sx= {{color: "#036EA4",  fontWeight: "bolder",fontSize: {
              xs:"Small", sm:"medium", md:"large",lg:"xx-large",xl:"xxx-large"
            }}} className='capriolafont marginzero paddingTop5'>SHREE GANESH VIDYA MANDIR</Box>
      </Box>
      <TabHeader></TabHeader>
    </Container>
  </>
  );
}

export default Header;
