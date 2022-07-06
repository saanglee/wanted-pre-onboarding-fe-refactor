import { useState, useEffect, useRef } from 'react';

const options = {
  root: null, // 객체의 가시성 확인할 뷰포트 요소
  rootMargin: '0px', // root가 가진 여백
  threshold: 0.5, // observer의 콜백이 실행될 대상 요소의 가시성 퍼센티지를 나타내는 단일 숫자 혹은 숫자 배열
};

const useLazyImageObserver = ({ src }) => {
  const [isLoad, setIsLoad] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const imgRef = useRef(null);
  const observerRef = useRef();

  const onIntersection = (entries, io) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target);
        setImageSrc(src);
        setIsLoad(true);
      }
    });
  };

  useEffect(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        onIntersection,
        options,
      );
    }
    imgRef.current && observerRef.current.observe(imgRef.current);
  }, []);

  return { imageSrc, imgRef, isLoad };
};

export default useLazyImageObserver;
