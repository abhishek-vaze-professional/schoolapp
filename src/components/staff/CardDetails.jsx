import React from "react";
import './user.css';
import { Grid2 } from '@mui/material';
import Typography from '@mui/material/Typography';

function CardDetails(props) {
  return (
    <Grid2 container xs={12} spacing={2}>
      <Grid2 sx={{ textAlign: "right" }} item xs={3}>
        <p className='sub-heading' sx={{ marginBottom: 2 }}>
          {props.icon}
        </p>
      </Grid2>
      <Grid2 item xs={8} sx={{ textAlign: "Left"}}>
        <p className='sub-heading' sx={{ marginBottom: 2 }}>
          {props.text}
        </p>
      </Grid2>
    </Grid2>
  );
}

export default CardDetails;
