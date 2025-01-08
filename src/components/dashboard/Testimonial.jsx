import React from 'react'
import TestimonialCard1 from './TestimonialCard1';
import "./dashboard.css";
import "../common/common.css";
import { Box, Grid2 } from "@mui/material";
import { whiteBoxStyle } from "../common/commonUtil";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

function Testimonial(props) {
    const user = props.user;
  return (
    <>
        <Grid2 container spacing={2}>
        {/*<Grid2 item size={{xs:12, sm:12, md:12, lg:12, xl:12}}>
          <Box>
            <TestimonialCard user={user}></TestimonialCard>
          </Box>
  </Grid2>*/}
          <Grid2 item size={{xs:12, sm:12, md:12, lg:12, xl:12}} >
          <Box sx={{alignSelf: "center", fontSize:{xs:"small", sm:"medium", md:"large", lg:"larger", xl:"x-large"}}}>
            <p ><FormatQuoteIcon></FormatQuoteIcon></p>
          <p dangerouslySetInnerHTML={{__html: user.text}}/>
          </Box>
          </Grid2>
          <Grid2 item size={{xs:12, sm:12, md:12, lg:12, xl:12}}>
          <Box>
            <TestimonialCard1 user={user}></TestimonialCard1>
          </Box>
  </Grid2>
        </Grid2>
    </>
  )
}

export default Testimonial;