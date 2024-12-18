import React from 'react'
import TestimonialCard from './TestimonialCard';
import "./dashboard.css";
import "../common/common.css";
import { Box, Stack } from "@mui/material";
import { whiteBoxStyle } from "../common/commonUtil";

function Testimonial(props) {
    const user = props.user;
  return (
    <>
    <Box className='content whiteText' sx={whiteBoxStyle}>
        <Stack direction={'row'} spacing={2}>
          <Box>
            {/*<img src={chairmanPic} className=''/>*/}
            <TestimonialCard user></TestimonialCard>
          </Box>
          <Box sx={{alignSelf: "center", fontSize:{xs:"small", sm:"medium", md:"large", lg:"larger", xl:"x-large"}}}>
          {user.text}
          </Box>
        </Stack>
      </Box>
      <br></br>
    </>
  )
}

export default Testimonial;