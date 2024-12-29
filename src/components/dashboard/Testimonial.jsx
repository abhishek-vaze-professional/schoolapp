import React from 'react'
import TestimonialCard from './TestimonialCard';
import "./dashboard.css";
import "../common/common.css";
import { Box, Grid2 } from "@mui/material";
import { whiteBoxStyle } from "../common/commonUtil";

function Testimonial(props) {
    const user = props.user;
  return (
    <>
        <Grid2 container spacing={2}>
        <Grid2 item size={{xs:12, sm:12, md:12, lg:3, xl:3}}>
          <Box>
            <TestimonialCard user={user}></TestimonialCard>
          </Box>
          </Grid2>
          <Grid2 item size={{xs:12, sm:12, md:12, lg:9, xl:9}} >
          <Box sx={{alignSelf: "center", fontSize:{xs:"small", sm:"medium", md:"large", lg:"larger", xl:"x-large"}}}>
          <p dangerouslySetInnerHTML={{__html: user.text}}/>
          </Box>
          </Grid2>
        </Grid2>
    </>
  )
}

export default Testimonial;