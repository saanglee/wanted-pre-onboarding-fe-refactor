import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="inner">{children}</div>
      </div>
    </>
  );
};

export default Layout;
