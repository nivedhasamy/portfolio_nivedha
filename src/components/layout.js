import React, { useState, useEffect } from "react"
import Navbar from "./navigation/navBar";
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../utils/global';
import theme from '../utils/theme';
import Footer from './footer';

import MobileNav from './navigation/mobileNav';

 const Layout = ({children}) => {

  const [isMobile, setisMobile] = useState(null);

  useEffect(() => {
    changeMobile();
    window.addEventListener('resize', changeMobile);
    return () => window.removeEventListener('resize', changeMobile);
  }, []);

  const changeMobile = () => {
    window.matchMedia('(max-width: 37.5em)').matches
      ? setisMobile(true)
      : setisMobile(false);
  };
  
  return (
    <ThemeProvider theme={theme}>   
       <GlobalStyles />
    { isMobile ? <MobileNav/> : <Navbar/> }
      {children}
      <Footer/>
    </ThemeProvider>
  )
}

export default Layout;