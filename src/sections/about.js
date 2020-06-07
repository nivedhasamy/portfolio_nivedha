import React, { useEffect } from "react"
import { useStaticQuery, graphql } from 'gatsby';
import SectionTitle from "../components/utils/sectionTitle";
import styled from 'styled-components';

const Container = styled.section `
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5.5rem 0rem;
  visibility: hidden;
 z-index: 50;
    
  @media ${props => props.theme.mediaQueries.small} {
    padding: 1rem 1rem;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    padding: 1rem 1rem;
  }
`;

const ContentWrapper = styled.section `
  text-align: center;
    padding: 0rem 11rem;
    color: var(--textSecondary);

    
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
    

    @media ${props => props.theme.mediaQueries.small} {
      font-size: 0.9rem;
      
    line-height: 1.3rem;
    }
    
    @media ${props => props.theme.mediaQueries.smallest} {
     
      font-size: 0.9rem;
    line-height: 1rem;
    }
    }

    
  
    @media ${props => props.theme.mediaQueries.medium} {
      padding: 1rem 3rem;
    }

    @media ${props => props.theme.mediaQueries.large} {
      padding: 1rem 5rem;
    }
    @media ${props => props.theme.mediaQueries.small} {
      padding: 1rem 1rem;
    }
    
    @media ${props => props.theme.mediaQueries.smallest} {
      padding: 1rem 1rem;
    }
`;


const About = () => {

    const { aboutMe, siteUrl } = useStaticQuery(graphql `
    query  {
        aboutMe: file(relativePath: {regex: "/about.md/"}) {
          childMarkdownRemark {
            frontmatter {
              stack
            }
            html
          }
        }
        siteUrl: site {
          siteMetadata {
            siteUrl
          }
        }
      }      
`)

    const { frontmatter: { resume, stack }, html } = aboutMe.childMarkdownRemark

    useEffect(() => {
 
  function checkPosition() {
    let element = document.getElementById('about');
    let windowHeight = window.innerHeight;
     let positionFromTop = element.getBoundingClientRect().top;
     if (positionFromTop - windowHeight <= -100) {

        element.classList.add('animateTopToBottom');
          element.style.visibility = 'visible';
      }    
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', checkPosition);

  checkPosition();
    }, [])

    return (
        <Container id="about" >       
          <SectionTitle title="About" /> 
      
          <ContentWrapper>           
            <span dangerouslySetInnerHTML={{ __html: html }}/>
          </ContentWrapper>
       </Container>
    )
}

export default About