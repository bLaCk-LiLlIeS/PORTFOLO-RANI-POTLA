// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
// import NavBarr from '../NavBarr/index';
// import Footer from '../Footer/index';

const Layout = () => {
  return (
    <div className="layout">
      {/* <NavBarr /> */}
      <main className="content">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
