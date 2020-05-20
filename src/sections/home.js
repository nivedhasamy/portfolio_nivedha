import React from "react"
import { StaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typist from 'react-typist';
import {
    faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Container = styled.section `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
   height:100vh;
  margin: auto;
  @media ${props => props.theme.mediaQueries.small} {
    padding: 5rem 1rem;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    padding: 5rem 1rem;
  }
`;

const ContentWrapper = styled.section `
    text-align: center;
    color: var(--textSecondary);
    
    transform: translate(-50%, -50%);
    & a{
          color:  var(--textSecondary);
          text-decoration: underline;
          &:hover{
            ${props => props.theme.gradientTextMixin(props.theme.colors.primaryColor,props.theme.colors.secondaryColor)};  
            opacity:var(--opacity);   
          }
    }
    & p{
      font-size: 1.1rem;
    line-height: 1.6rem;
    }

  
    
    @media ${props => props.theme.mediaQueries.small} {
      padding: 1rem 2rem;
    }
  
    @media ${props => props.theme.mediaQueries.smallest} {
      padding: 1rem 2rem;
    }
`;

const TitleWrapper = styled.section `
    display: flex ;
    justify-content: center ; 
    flex-direction: column;
    
    color: var(--titleColor);
    h2{
        font-size:100px;
        margin-block-end: 1rem;
        @media ${props => props.theme.mediaQueries.medium} {
          font-size:90px;
        }
        
        @media ${props => props.theme.mediaQueries.small} {
            font-size:60px;
          }
        
          @media ${props => props.theme.mediaQueries.smallest} {
            font-size:45px;
          }
    }
    & span  {  
        font-family: Work Sans;
        display:inline-block;
        ${props => props.theme.gradientTextMixin(props.theme.colors.primaryColor,props.theme.colors.secondaryColor)}; 
        opacity:var(--opacity);    
    }
    
`;

const IntroLine = styled.p `
    color:var(--textBlue);
    @media ${props => props.theme.mediaQueries.smallest} {
        font-size:12px;
      }
`;

const Caption = styled.h2`
    font-size: 35px;
    & span{
        font-family: Work Sans;
    }
`;

const TagLine = styled.p`
     font-family: monospace;
     font-size:15px;
     color:var(--textSecondary);
     @media ${props => props.theme.mediaQueries.small} {
        font-size:12px;
      }
    
      @media ${props => props.theme.mediaQueries.smallest} {
        font-size:10px;
      }
`;

const GradientLink = styled.a`
  text-decoration: none !important;
  height: 40px !important;
	line-height: 40px !important;
	font-size: 16px !important;
	letter-spacing: 1px;
	margin: 25px 0;
	padding: 0 30px !important;
	color: #fff !important;
	border: none !important;
   box-shadow: none;
   border-radius: 7px;
   ${props => props.theme.gradientBgMixin(props.theme.colors.primaryColor,props.theme.colors.secondaryColor)};    
   opacity:var(--opacity); 

     @media ${props => props.theme.mediaQueries.small} {
    height: 35px !important;
	line-height: 34px !important;
	font-size: 14px !important;
  }
  @media ${props => props.theme.mediaQueries.smallest} {
    height: 30px !important;
    line-height: 30px !important;
    font-size: 10px !important;
  }

`;


const FontAwesomeDiv = styled(FontAwesomeIcon)`
padding-left:0.3rem;
`;


const Home = ({
    data: {
      greeting,
        introTag,
        tagLine,
    }
}) => (
      <Container>
         <TitleWrapper>

            <Typist cursor={{element : ""}}>
                <h2> {greeting}👋</h2>
                <Typist.Delay ms={200} />
                <Caption> I’m             
                    <span className="title">&nbsp; Nivedha</span>              
                </Caption>
            </Typist>

         </TitleWrapper>

         <IntroLine>
             {introTag}
         </IntroLine>         
        
         <TagLine>
             {tagLine}
         </TagLine>
        
         <GradientLink href="#portfolio" >
             See Work
            <span> <FontAwesomeDiv  icon={faBriefcase} size="lg"/></span>
         </GradientLink>
     </Container> 
)


export default () => (
    <StaticQuery
         query={graphql`
         query {
          site {
              siteMetadata {
                greeting
                  capitalizeTitleOnHome
                  tagLine
                  introTag
                  intro
                 
              }
          }
      }
         `}
         render={data => <Home data={data.site.siteMetadata} />
}
/>
);