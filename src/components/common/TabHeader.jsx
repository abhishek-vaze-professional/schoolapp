import React from "react";
import { Link } from "react-router-dom";
import { Grid2 } from "@mui/material";
import "./common.css";

function TabHeader() {
  return (
    <>
      <Grid2 container spacing={6} className=' menuFont textColorGray'>
        <Grid2 item xs={12} sm={6} className=''>
          <Link to='/dashboard'>Dashboard</Link>
        </Grid2>
        <Grid2 item xs={12} sm={6} className=''>
          <Link to='/home'>Home</Link>
        </Grid2>
        <Grid2 item xs={12} sm={6} className=''>
          <Link to='/school'>Our School</Link>
        </Grid2>
        <Grid2 item xs={12} sm={6} className=''>
          <Link to='/staff'>Staff</Link>
        </Grid2>
        <Grid2 item xs={12} sm={6} className=''>
          <Link to='/result'>Results</Link>
        </Grid2>
        <Grid2 item xs={12} sm={6} className=''>
          <Link to='/achievement'>Achivements</Link>
        </Grid2>
        <Grid2 item xs={12} sm={6} className=''>
          <Link to='/genesis'>Genesis of School</Link>
        </Grid2>
        <Grid2 item xs={12} sm={6} className=''>
          <Link to='/photoes'>Photoes</Link>
        </Grid2>
      </Grid2>
    </>
  );
}

export default TabHeader;
