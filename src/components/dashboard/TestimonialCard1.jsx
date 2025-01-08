import React from "react";
import Grid2 from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import "../staff/user.css";
import useImage from "../common/useImage";
import "../common/common.css";


function TestimonialCard1(props) {
    const user = props.user;
    console.log(user);
    const { loading, error, image } = useImage(user.img, "testimonials");
    console.log(image);
  return (
    <Grid2 container>
        <Grid2 item offset={{ md: 4,lg:4,xl:4 }}><img alt='profile pic' src={image} className="testiImage"></img></Grid2>
      
      <Grid2 item sx={{fontSize:{xs:"small", sm:"small", md:"medium", lg:"large"}}}>
        <br></br>
        <br></br>
        <br></br>
        <p className='centerit wrapit' sx={{ marginBottom: 2 }}>
          {user.name}
        </p>
        <p className="centerit wrapit">{user.designation}</p>
        <p className="centerit">{user.year}</p>
      </Grid2>
    </Grid2>
  );
}

export default TestimonialCard1;
