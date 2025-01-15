import React from "react";
import ProfileCard from "./ProfileCard";
import { staffData } from "../../data/staffdata.json";
import { Grid2 } from "@mui/material";
import StaffProfile from "./StaffProfile";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import "./staff.css";
import "../common/common.css";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { whiteBoxStyle } from "../common/commonUtil";
import staffpic from "../../assets/images/staff-all.jpg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "300",
    sm: "350",
    md: "400",
    lg: "500",
    xl: "800",
  },
  height: { xs: "500", sm: "auto" },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function Staff() {
  const HIGH_SCHOOL = "highSchool";
  const PRIMARY = "primary";
  const PREPRIMARY = "preprimary";
  const NON_TEACHING = "nonTeaching";
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState(false);
  const handleOpen = (user) => {
    setOpen(true);
    setUser(user);
  };
  const handleClose = () => setOpen(false);
  return (  
    <div className=''>
      <p className='sHeader capriolafont textColorGray' id='head'>
        Staff
      </p>
      <Box className='content whiteText' sx={whiteBoxStyle}>
          <img src={staffpic} className="staffimg" />
        </Box>
      <Box className='content whiteText' sx={whiteBoxStyle}>
        
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1-content' id='panel1-header' className='accordion-odd subHeaders'>
            Secondary School Staff
          </AccordionSummary>
          <AccordionDetails>
            <Grid2 container spacing={2}>
              {staffData.map((object, i) => {
                if (object.type === HIGH_SCHOOL)
                  return (
                    <Grid2 item>
                      <ProfileCard user={object} className='card' handleOpen={handleOpen}></ProfileCard>
                    </Grid2>
                  );
              })}
            </Grid2>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1-content' id='panel1-header' className='accordion-odd subHeaders'>
            Primary School Staff
          </AccordionSummary>
          <AccordionDetails>
            <Grid2 container spacing={2}>
              {staffData.map((object, i) => {
                if (object.type === PRIMARY)
                  return (
                    <Grid2 item>
                      <ProfileCard user={object} className='card' handleOpen={handleOpen}></ProfileCard>
                    </Grid2>
                  );
              })}
            </Grid2>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1-content' id='panel1-header' className='accordion-odd subHeaders'>
            Pre primary School Staff
          </AccordionSummary>
          <AccordionDetails>
            <Grid2 container spacing={2}>
              {staffData.map((object, i) => {
                if (object.type === PREPRIMARY)
                  return (
                    <Grid2 item>
                      <ProfileCard user={object} className='card' handleOpen={handleOpen}></ProfileCard>
                    </Grid2>
                  );
              })}
            </Grid2>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1-content' id='panel1-header' className='accordion-odd subHeaders'>
            Non Teaching School Staff
          </AccordionSummary>
          <AccordionDetails>
            <Grid2 container spacing={2}>
              {staffData.map((object, i) => {
                if (object.type === NON_TEACHING)
                  return (
                    <Grid2 item>
                      <ProfileCard user={object} className='card' handleOpen={handleOpen}></ProfileCard>
                    </Grid2>
                  );
              })}
            </Grid2>
          </AccordionDetails>
        </Accordion>
      </Box>

      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
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
      <br></br>
    </div>
  );
}

export default Staff;
