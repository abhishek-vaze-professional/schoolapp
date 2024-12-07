import React from "react";
import { Grid2 } from "@mui/material";
import schoolImg1 from "../../assets/images/Picture1.jpg";
import schoolImg2 from "../../assets/images/Picture2.jpg";
import schoolImg3 from "../../assets/images/Picture3.jpg";
import "./dashboard.css";
import "../common/common.css";

function dashboard() {
  return (
    <>
      <Grid2 container spacing={2} className=''>
        <Grid2 item xs={12} sm={12} md={4} className=''>
          <img src={schoolImg1} className='schoolimg' />
        </Grid2>
        <Grid2 item xs={12} sm={12} md={4} className=''>
          <img src={schoolImg2} className='schoolimg' />
        </Grid2>
        <Grid2 item xs={12} sm={12} md={4} className=''>
          <img src={schoolImg3} className='schoolimg' />
        </Grid2>
      </Grid2>
      <br></br>
      <div container spacing={2} className='padding1'>
        <p className=' textFont textColorGray'>
          {" "}
          Goa VidyaPratishthan’s SHREE GANESH VIDYAMANDIR was founded in 19____ by ______ . It is recognized by the Directorate of Education and the Goa S.S.C. Board. The School is managed
          by___________. The School is situated at the top of a hill in a healthy locality.
        </p>
        <br></br>
        <p className=' textFontLarge textColorGray'>“MISSION STATEMENT”</p>

        <p className=' textFont textColorGray'>
          We are here to achieve an Holistic development and Nationalist spirit in every Student. The Excellency in every sphere of life and Experimentative nature. To develop every potential with
          Equity and Engaged them with social agencies looking after the upliftment of humanity and culture. To produce Empowered citizen who are fit to be Employ with Ethics.
        </p>
      </div>
    </>
  );
}

export default dashboard;
