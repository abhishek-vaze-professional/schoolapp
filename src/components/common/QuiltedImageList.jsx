import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useImage from './useImage';

function srcset(img, size, rows = 1, cols = 1) {
  const { loading, error, image } = useImage(img, "photoes");
  
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList(props) {
  const photos = props.images;
  console.log(photos);
  const handleCardClick = (photo) => {
    props.handleOpen(photo);
  };
  return (
    <ImageList
      sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {photos.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title} className='pointit'
            loading="lazy" onClick={() =>handleCardClick(item)}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

