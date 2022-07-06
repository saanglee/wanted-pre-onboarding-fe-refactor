import React, { useEffect, useState } from 'react';
import useLazyImageObserver from '../../hooks/useLazyImageObserver';
import IMG_BASE from '../../assets/images/img_base.jpeg';

const LazyImg = ({ src, onLoaded }) => {
  const { imageSrc, imgRef, isLoad } = useLazyImageObserver({
    src,
  });

  const matchImg = src === imageSrc ? imageSrc : src;

  return (
    <img
      ref={imgRef}
      src={isLoad ? matchImg : IMG_BASE}
      onLoad={onLoaded}
    />
  );
};

export default LazyImg;
