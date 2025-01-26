import React, { useState } from "react";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import useImage from '../common/useImage';
import "./Carousel.css";

export default function Carousel(props)  {
  const data = props.photoes;
  const selectedPic = props.selectedPhoto;
  const [slide, setSlide] = useState(selectedPic.id - 1);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel-my">
      <ArrowCircleLeftIcon onClick={prevSlide} className="arrow arrow-left" sx={{zIndex: 2, width:"3rem", height:"3rem", position: "absolute", color: "white"}} />
      {data.map((item, idx) => {
          const { loading, error, image } = useImage(item.img, props.folder);
          return (
            <img
              src={image}
              alt={"image"}
              key={idx}
              className={slide === idx ? "slide-my carimg" : "slide-my slide-hidden carimg"}
            />
          );
      })}
      <ArrowCircleRightIcon
        onClick={nextSlide}
        className="arrow arrow-right"
        sx={{zIndex: 2, width:"3rem", height:"3rem", position: "absolute", color: "white"}} 
      />
    </div>
  );
};
