import React from 'react'
import useImage from '../common/useImage';
import Box from '@mui/material/Box';
import '../common/common.css';
function Photo(props) {
    const photo = props.photo;
    const handleCardClick = () => {
        props.handleOpen(photo);
      };
    const { loading, error, image } = useImage(photo.img, "photoes");
  return (
    <Box className='pointit' onClick={handleCardClick}>
        <Box className=''>
            <img src={image} className='schoolimg phot'/>
        </Box>
        <div className='capriolafont paddingTop5'>{photo.desc}</div>
    </Box>
  )
}

export default Photo;