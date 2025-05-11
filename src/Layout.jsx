import React from 'react';
import Nav from './Nav';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Layout = () => {
   return (
      <div>
         <useScrollToTop />
         <Nav />
         <ScrollToTop />
         <Outlet />
         <Footer />
      </div>
   );
};

export default Layout;