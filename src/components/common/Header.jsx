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
      }} className=""><img src={schoolbg} alt="School" className="resIg"/></Box>
      <Box sx={{ background: "transparent", top:10, left: 30, position: "absolute", zIndex:1100, height: 'calc((10vw*262)/202)',
        width: "10 vw" }}>
      <img src={schoolLogo} className="resIg" />
      </Box>
      <Box sx={{ background: "transparent", top:{xl:90, lg:75, md: 60,sm:20,xs:10}, left: {xl:240, lg:200, md: 180,sm:140,xs:100}, position: "absolute", zIndex:1100 }}>
            <Box sx= {{color: "#036EA4",  textAlign: "start",fontSize: {
              xs:"x-Small", sm:"small", md:"medium",lg:"large",xl:"x-large"
            }}} className='capriolafont marginzero paddingTop15'>Goa Vidya Pratishthan’s</Box>
            <Box sx= {{color: "#036EA4",  fontWeight: "bolder",fontSize: {
              xs:"Small", sm:"medium", md:"large",lg:"xx-large",xl:"xxx-large"
            }}} className='capriolafont marginzero paddingTop5'>SHREE GANESH VIDYA MANDIR</Box>
      </Box>
      <TabHeader></TabHeader>
    </Container>
      {/*<div className='header'>
        <Grid2 container spacing={20} className=''>
          <Grid2 item xs={12} sm={12} md={2} className=''>
            <img src={schoolLogo} />
          </Grid2>
          <Grid2 item xs={12} sm={12} md={10}>
            <p className='subtitle marginzero paddingTop15'>Goa Vidya Pratishthan’s</p>
            <p className='titleFont marginzero paddingTop5'>SHREE GANESH VIDYA MANDIR</p>
            <p className='subtitle2 marginzero paddingTop5'>(Recognised by the Goa Board of Secondary and Higher Secondary Education, Porvorim)</p>
            <p className='subtitle2 marginzero paddingTop5'>
              <span className=''>Index No. : 01.58 </span>
              <span className='paddingLeft100'>UDISE CODE : 30010200223</span>{" "}
            </p>
            <p className='subtitle2 marginzero paddingTop5'>Ganeshpuri, Mhapsa, Bardez, Goa - 403 507. (Affiliated to Vidya Bharati, Goa)</p>
            <p className='subtitle2 marginzero paddingTop5'>
              Email :{" "}
              <span className='paddingLeft15'>
                <b>highschoolshreeganesh@gmail.com</b>
              </span>{" "}
              <span className='paddingLeft30'>Contact. No. :</span>
              <span className='paddingLeft15'>
                <b>7058164535</b>
              </span>
            </p>
          </Grid2>
        </Grid2>
        <Divider variant='middle' sx={{ borderColor: "#036EA4", borderWidth: "2px", marginBottom: "10px" }}></Divider>
        <div className='paddingTab'>
          <TabHeader></TabHeader>
        </div>
        <Divider variant='middle' sx={{ borderColor: "#036EA4", borderWidth: "2px", marginBottom: "10px" }}></Divider>
  </div>*/}
  </>
  );
}

export default Header;
