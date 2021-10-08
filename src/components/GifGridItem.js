import React from 'react';

const GifGridItem = ({ img: { title, src, alt } }) => {
  return (
    <div className="animate__animated animate__fadeInLeftBig card">
      <img src={src} alt={alt} />
      <p>{title}</p>
    </div>
  );
};

export default GifGridItem;
