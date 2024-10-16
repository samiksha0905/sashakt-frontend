import React from 'react';

const ImageWithJs = ({ src, alt }) => {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + src} alt={alt} />
    </div>
  );
};

export default ImageWithJs;