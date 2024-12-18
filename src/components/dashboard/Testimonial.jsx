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
        <Stack direction={'row'} spacing={2}>
          <Box>
            <TestimonialCard user={user}></TestimonialCard>
          </Box>
          <Box sx={{alignSelf: "center", fontSize:{xs:"small", sm:"medium", md:"large", lg:"larger", xl:"x-large"}}}>
          <p dangerouslySetInnerHTML={{__html: user.text}}/>
          </Box>
        </Stack>
    </>
  )
}

export default Testimonial;