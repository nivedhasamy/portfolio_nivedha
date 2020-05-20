import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from './navigation/logo';
import styled from 'styled-components';
import ScrollToTop from './utils/scrollToTop';

const FooterContainer = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    line-height: 2rem;
    position:relative;
    color:var(--textSecondary);
`;

const Footer = ({ siteTitle }) => (
  <footer>
    <FooterContainer>
      <Logo/>
      Copyright © {new Date().getFullYear()}, Nivedha    
      
   <ScrollToTop/>  
    </FooterContainer>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
