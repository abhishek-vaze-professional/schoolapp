import React, { useState } from "react";
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
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
    <div className="carousel">
      <ArrowCircleLeftRoundedIcon onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, idx) => {
          const { loading, error, image } = useImage(item.img, "photoes");
          return (
            <img
              src={image}
              alt={"image"}
              key={idx}
              className={slide === idx ? "slide" : "slide slide-hidden"}
            />
          );
      })}
      <ArrowCircleRightRoundedIcon
        onClick={nextSlide}
        className="arrow arrow-right"
      />
    </div>
  );
};
