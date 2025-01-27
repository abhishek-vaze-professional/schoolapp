import React from "react";

import photoData from "../../data/photodata.json";
import "../common/common.css";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Carousel from '../carousel/Carousel';
import PhotoContainer from "./PhotoContainer";
import { whiteBoxStyle } from "../common/commonUtil";

function LifeAtSGVM() {
  const photos = photoData.photoData;
  return (
    <div className="textColorGray">
      <p className='sHeader capriolafont' id="head">Photo Gallery </p>
      <br></br>
      <Box className='content textColorGray' sx={whiteBoxStyle}>
        {photos.map((photo, i) => (
          <PhotoContainer folder={photo.folder} title={photo.heading} photoes={photo.photoes}/>
        ))}
      </Box>
    </div>
  );
}

export default LifeAtSGVM;
