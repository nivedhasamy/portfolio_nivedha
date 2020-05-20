import React from "react";
import styled from 'styled-components';


const SectionTitleWrapper = styled.h2`
     text-align:center;
     display:inline-block;
     ${props => props.theme.gradientTextMixin(props.theme.colors.primaryColor,props.theme.colors.secondaryColor)};
     opacity:var(--opacity);  
     font-size: 5rem;
     text-transform: uppercase;
    

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 3rem;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    font-size: 2.3rem;
  }
`;

const SectionTitle = ({title}) => {
     return <SectionTitleWrapper>{title}</SectionTitleWrapper>;
};

export default SectionTitle;
