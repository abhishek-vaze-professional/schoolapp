import React from "react";
import "./common.css";
import schoolLogo from "../../assets/images/logo.jpg";
import { Container, Divider, Grid2 } from "@mui/material";
import TabHeader from "./TabHeader";

function Header() {
  return (
    <div>
      <div className='header'>
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
      </div>
    </div>
  );
}

export default Header;
