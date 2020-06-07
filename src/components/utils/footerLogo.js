import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Icon from '../../images/icon.png'

import styled from 'styled-components';

const Container = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

   & img{
    margin-bottom: 10px;
  width:75px;
  height:70px;
    @media ${props => props.theme.mediaQueries.small} {
     width: 60px;
         height: 55px;
    margin-bottom: 7px;
    
  }

   }
   

`;

const TextContainer = styled.div `
  display: flex;
  flex-direction: column;
 font-weight:bolder;
 align-items:center;

    @media ${props => props.theme.mediaQueries.small} {
    line-height: 1.5rem;
  }
`;

const PrimaryText = styled.div `
  font-size: xxx-large;

  @media ${props => props.theme.mediaQueries.small} {
    font-size: xx-large;
  }
`;
const SecondaryText = styled.div `
  font-size: smaller ;
  color: #dc5c95;

  @media ${props => props.theme.mediaQueries.small} {
    font-size: x-small;
  }
`;

const FooterLogo = () => {
    const query = useStaticQuery(graphql `
        query FooterLogoQuery {
            site {
                siteMetadata {
                    title                    
                }
            }
        }
    `);
    return (
        <Container>
          <img
              className="logo"
              src={Icon}
              //style={{width:'78px', heigth:'30px'}}
              alt={query.site.siteMetadata.title}
          />
          <TextContainer>
              <PrimaryText>
              Nivedha
              </PrimaryText>
              <SecondaryText>
              {'<Front-end Developer/>'}
              </SecondaryText>
           </TextContainer>
        </Container>
    );
}

export default FooterLogo;