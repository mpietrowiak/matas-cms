import React from 'react';
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver';

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver primaryImg="/static/1a.jpg" 
                              secondaryImg="/static/1b.jpg"
                              alt="" width="300" />
      &nbsp;&nbsp;&nbsp;
      <ImageToggleOnMouseOver primaryImg="/static/2a.jpg" 
                              secondaryImg="/static/2b.jpg"
                              alt="" width="300" />
    </div>
  );
}

export default ImageChangeOnMouseOver;