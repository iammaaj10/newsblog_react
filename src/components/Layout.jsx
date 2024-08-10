import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function Layout() {
  return (
    <>
     <Navbar/>
      <Outlet /> {/* Routed components will appear here */}
    </>
  );
}

export default Layout;
