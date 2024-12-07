import React from "react";
import ProfileCard from "./ProfileCard";
import { staffData } from "../../data/staffdata.json";
import { Grid2 } from "@mui/material";
import StaffProfile from './StaffProfile';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import './staff.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function Staff() {
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState(false);
  const handleOpen = (user) => {
    setOpen(true);
    setUser(user);
  }
  const handleClose = () => setOpen(false);
  return (
    <div className=''>
      <p className="sHeader capriolafont">Staff</p>
      <Grid2 container spacing={2}>
        {staffData.map((object, i) => (
          <Grid2 item>
            <ProfileCard user={object} className="card" handleOpen={handleOpen}></ProfileCard>
          </Grid2>
        ))}
      </Grid2>

      {/*<StaffProfile user={staffData[0]}></StaffProfile>*/}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <StaffProfile user={user}></StaffProfile>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default Staff;
