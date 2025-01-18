import React, { useState } from "react";
import TestimonialCard1 from './TestimonialCard1';
import "./dashboard.css";
import "../common/common.css";
import { Box, Grid2, Button } from "@mui/material";
import { whiteBoxStyle } from "../common/commonUtil";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import MoreIcon from '@mui/icons-material/More';

function Testimonial(props) {
  const [expand, setExpand] = useState(false);
    const user = props.user;
    function expandText () {
      console.log("expand called");
      setExpand(true);
    }
    let userText = (user.text.length > 600 && !expand)? (user.text.substr(0, 600)): user.text;
  return (
    <>
        <Grid2 container spacing={2}>
        {/*<Grid2 item size={{xs:12, sm:12, md:12, lg:12, xl:12}}>
          <Box>
            <TestimonialCard user={user}></TestimonialCard>
          </Box>
  </Grid2>*/}
          <Grid2 item size={{xs:12, sm:12, md:12, lg:12, xl:12}} >
          <Box sx={{ alignSelf: "center", fontSize: { xs: "small", sm: "small", md: "medium", lg: "medium", xl: "medium" } }}>
            <p ><FormatQuoteIcon></FormatQuoteIcon></p>
          <p dangerouslySetInnerHTML={{__html: userText}}/>
          {user.text.length > 600 && !expand &&
          <Button
          style={{backgroundColor: "orangered"}}
          onClick={() => expandText()}
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<MoreIcon />}
        >
          Click to Read More
        </Button>
          }
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