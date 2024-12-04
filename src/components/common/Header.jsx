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
          <Grid2 item xs={12} sm={12} md={10} className='padding2'>
            <Grid2 container spacing={2} className=''>
              <Grid2 item offset={3} xs={12} sm={12} sx={{ textAlign: "start", fontSize: "x-large" }} className=''>
                Goa Vidya Pratishthan’s
              </Grid2>
            </Grid2>
            <Grid2 container spacing={2} className=''>
              <Grid2 item offset={0} xs={12} sm={12} sx={{ textAlign: "start" }} noWrap className=' titleFont'>
                SHREE GANESH VIDYA MANDIR
              </Grid2>
            </Grid2>
            <Grid2 container spacing={2} className=''>
              <Grid2 item offset={1} xs={12} sm={12} sx={{ textAlign: "start", fontSize: "small" }} className=' nowrap'>
                (Recognised by the Goa Board of Secondary and Higher Secondary Education, Porvorim)
              </Grid2>
            </Grid2>
            <Grid2 container spacing={2} className=''>
              <Grid2 item offset={2} xs={12} sm={12} sx={{ textAlign: "start", fontSize: "medium" }} className=' nowrap'>
                Index No. : 01.58 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; UDISE CODE : 30010200223
              </Grid2>
            </Grid2>
            <Grid2 container spacing={2} className=''>
              <Grid2 item offset={1} xs={12} sm={12} sx={{ textAlign: "start", fontSize: "medium" }} className=' nowrap'>
                Ganeshpuri, Mhapsa, Bardez, Goa - 403 507. (Affiliated to Vidya Bharati, Goa)
              </Grid2>
            </Grid2>
            <Grid2 container spacing={2} className=''>
              <Grid2 item offset={1} xs={12} sm={12} sx={{ textAlign: "start", fontSize: "medium" }} className=' nowrap'>
                Email : &nbsp;&nbsp;&nbsp;<b>highschoolshreeganesh@gmail.com</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Contact. No. :&nbsp;&nbsp; &nbsp;<b>7058164535</b>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
        <Divider variant='middle' sx={{ borderColor: "#036EA4", borderWidth: "2px", marginBottom: '10px' }}></Divider>
        <div className='paddingTab'>
          <TabHeader></TabHeader>
        </div>
        <Divider variant='middle' sx={{ borderColor: "#036EA4", borderWidth: "2px", marginBottom: '10px' }}></Divider>
      </div>
    </div>
  );
}

export default Header;
