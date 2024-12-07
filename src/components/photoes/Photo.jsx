import React from 'react'
import useImage from '../common/useImage';
function Photo(props) {
    const photo = props.photo;
    const handleCardClick = () => {
        props.handleOpen(photo);
      };
    const { loading, error, image } = useImage(photo.img, "photoes");
  return (
    <div className='pointit' onClick={handleCardClick}>
        <div className='schoolimg'>
            <img src={image} className='schoolimg'/>
        </div>
        <div className='capriolafont'>{photo.desc}</div>
    </div>
  )
}

export default Photo;