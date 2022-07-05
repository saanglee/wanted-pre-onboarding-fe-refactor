import React, { useState } from 'react';
import useLazyImageObserver from '../../hooks/useLazyImageObserver';
import IMG_BASE from '../../assets/images/img_base.jpeg';

const LazyImg = ({ src, alt, onLoaed }) => {
  const { imageSrc, imgRef, isLoad } = useLazyImageObserver({
    src,
  });

  return (
    <img
      ref={imgRef}
      src={isLoad ? imageSrc : IMG_BASE}
      onLoad={onLoaed}
      alt={alt}
    />
  );
};

export default LazyImg;
