import React, { useRef } from 'react';

const ImageChangeOnMouseOver = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null);
  return (
    <img onMouseOver={() => {
      imageRef.current.src = secondaryImg;
    }} onMouseOut={() => {
      imageRef.current.src = primaryImg;
    }}
      src={primaryImg}
      alt=""
      width="300"
      ref={imageRef}
    />
  )
}

export default ImageChangeOnMouseOver;