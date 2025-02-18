import React from "react";
import Photo from "./Photo";
import photoData from "../../data/photos.json";
import { Grid2, useMediaQuery, useTheme } from "@mui/material";
import "../common/common.css";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Carousel from '../carousel/Carousel';
import QuiltedImageList from "../common/QuiltedImageList";


const style1 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  width:'80vw !important',
  p: 4,
};

function Photoes() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
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
      <p className='sHeader capriolafont' id="head">Life At SVGM</p>
      <br></br>
      {!isMatch ? (<Grid2 container spacing={2}>
        {photos.map((object, i) => (
          <Grid2 item>
            <Photo photo={object} handleOpen={handleOpen} />
          </Grid2>
        ))}
      </Grid2>):(<QuiltedImageList images={photos} handleOpen={handleOpen}></QuiltedImageList>)}

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
          <Box sx={style1}>
            <Carousel photoes={photos} selectedPhoto ={photo}/>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default Photoes;
