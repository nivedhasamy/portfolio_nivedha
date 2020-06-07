import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowCircleUp,    
  } from '@fortawesome/free-solid-svg-icons';
  import styled from 'styled-components';

  const ScrollToTopContainer = styled.div`
  color: var(--textBlue);
  position: absolute;
    right: 1.5rem;
    bottom:3rem;
    @media ${props => props.theme.mediaQueries.small} {
     
    right: 0.5rem;
    bottom: 4rem;
    }
  
  `;
  

const ScrollToTop = ({title}) => {
     return <ScrollToTopContainer onClick={() => window.scrollTo({top: 0, behavior: "smooth"})} title="free ride to top"><FontAwesomeIcon icon={faArrowCircleUp}  size="lg"/></ScrollToTopContainer>;
};

export default ScrollToTop;
