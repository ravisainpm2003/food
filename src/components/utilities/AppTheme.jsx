import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

const AppTheme = ({ children }) => {
  const location = useLocation(); // Get the current location

  return (
    <>
      <NavBar />
      {children}
      <Footer path={location.pathname} /> {/* Pass the current path to Footer */}
    </>
  );
};

export default AppTheme;

