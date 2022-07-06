import React, { useState } from 'react';
import useLazyImageObserver from '../../hooks/useLazyImageObserver';
import IMG_BASE from '../../assets/images/img_base.jpeg';
import styled from 'styled-components';

const LazyImg = ({ src, alt, onLoaed }) => {
  const { imageSrc, imgRef, isLoad } = useLazyImageObserver({
    src,
  });

  const [showBtn, setShowBtn] = React.useState(false);
  const outerRef = React.useRef(null);
  // const imgRef = React.useRef(null);

  const handleButtonClick = React.useCallback(
    (event) => {
      event.stopPropagation();
      if (outerRef.current === null || imgRef.current === null) {
        return;
      }
      if (outerRef.current.clientHeight > 384) {
        outerRef.current.style.height = '384px';
      } else {
        outerRef.current.style.height = `${imgRef.current.clientHeight}px`;
      }
      setShowBtn((state) => !state);
    },
    [showBtn]
  );


  return (
    <>
    <ContentsWrapper ref={outerRef}>
    <img
      ref={imgRef}
      src={isLoad ? imageSrc : IMG_BASE}
      onLoad={onLoaed}
      alt={alt}
    />
    </ContentsWrapper>
    <AccordionButton
        onClick={handleButtonClick}
        style={
          imgRef.current?.clientHeight < 384
            ? { display: 'none' }
            : { display: 'flex' }
        }
      >
        더보기 버튼
      </AccordionButton>
    </>
  );
};

export default LazyImg;

const ContentsWrapper = styled.div`
  height: 24rem;
  width: 100%;
  overflow: hidden;
  object-fit: cover;
  transition: height 1s ease;
  & > img {
    object-fit: cover;
    width: 100%;
  }
`;

const AccordionButton = styled.div`
  width: 100%;
  height: 2.5rem;
  text-align: center;
  z-index: 10;
  position: relative;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-bottom: 1px solid #dbdbdb;
  color: #139ef2;
`;
