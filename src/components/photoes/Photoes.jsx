import React from "react";
import Photo from "./Photo";
import photoData from "../../data/photos.json";
import { Grid2 } from "@mui/material";
import "../common/common.css";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Carousel from '../carousel/Carousel';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs:"300px", sm:"400px", md:"500px",lg:"700px",xl:"800px"
  },
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Photoes() {
  const [open, setOpen] = React.useState(false);
  const [photo, setPhoto] = React.useState();
  const handleOpen = (photo) => {
    setOpen(true);
    setPhoto(photo);
  }
  const handleClose = () => setOpen(false);
  const photos = photoData.photoData;
  return (
    <div className="textColorGray">
      <p className='sHeader capriolafont'>Photoes</p>
      <br></br>
      <Grid2 container spacing={2}>
        {photos.map((object, i) => (
          <Grid2 item>
            <Photo photo={object} handleOpen={handleOpen} />
          </Grid2>
        ))}
      </Grid2>

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
            <Carousel photoes={photos} selectedPhoto ={photo}/>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default Photoes;
