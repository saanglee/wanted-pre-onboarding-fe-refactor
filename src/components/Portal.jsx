import { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children }) => {
  const [mount, setMount] = useState(false);
  const body = useRef(document.body);

  useEffect(() => {
    setMount(true);
  }, []);

  if (mount) {
    return createPortal(children, body.current);
  }
  return null;
};

export default Portal;
