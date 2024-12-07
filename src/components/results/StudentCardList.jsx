import React from 'react';
import { Grid2 } from '@mui/material';
import StudentProfile from './StudentProfile';

function StudentCardList(props) {
  const sscData = props.sscData;
  console.log(sscData);
  return (<>
    <br></br>
      <Grid2 container spacing={2}>
        {sscData.map((object, i) => (
          <Grid2 item>
            <StudentProfile student={object} className="card"></StudentProfile>
          </Grid2>
        ))}
      </Grid2>
      </>
  )
}

export default StudentCardList;