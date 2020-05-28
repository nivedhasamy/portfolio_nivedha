import React, { useEffect } from "react"

import { useStaticQuery, graphql } from 'gatsby';
import SectionTitle from "../components/utils/sectionTitle";
import styled from 'styled-components';
import PortfolioItem from '../templates/portfolio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
} from '@fortawesome/free-brands-svg-icons';


const Container = styled.section `
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5.5rem 0rem;
  visibility:hidden;
  @media ${props => props.theme.mediaQueries.small} {
    padding: 5rem 1rem;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    padding: 5rem 0.5rem;
  }
  
`;

const ContentWrapper = styled.section `
  text-align: center;
    padding: 0rem 11rem;
    color: var(--textSecondary);
   
    & p{
      font-size: 1.1rem;
    line-height: 1.6rem;
      
@media ${props =>  props.theme.mediaQueries.large  } {
  font-size: 0.9rem;

}

   
    @media ${props => props.theme.mediaQueries.medium} {
      font-size: 1rem;
    }
    @media ${props => props.theme.mediaQueries.small} {
      
      font-size: 0.9rem;
    }
  
    @media ${props => props.theme.mediaQueries.smallest} {
      
      font-size: 0.9rem;
    }

    }

    
@media ${props =>  props.theme.mediaQueries.large  } {
  font-size: 0.9rem;
  padding: 1rem 3rem;

}    
    @media ${props => props.theme.mediaQueries.medium} {
      padding: 1rem 3rem;
       font-size: 1rem;
    }
    @media ${props => props.theme.mediaQueries.small} {
      padding: 1rem 3rem;
      font-size: 0.9rem;
    }
  
    @media ${props => props.theme.mediaQueries.smallest} {
      padding: 1rem 2rem;
      font-size: 0.9rem;
    }
`;


const GradientLink = styled.a `
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
    font-size: 14px !important;
  }
`;


const FontAwesomeDiv = styled(FontAwesomeIcon)
`
padding-right:0.1rem;
`;

const Portfolio = () => {
    const { allFile: items } = useStaticQuery(graphql `
query {
     allFile(
       filter: {
         sourceInstanceName: { eq: "content" }
         extension: { eq: "md" }
         relativeDirectory: { regex: "/portfolio/" }
       }
       sort: { fields: [dir], order: DESC }
     ) {
       edges {
         node {
           id
           childMarkdownRemark {
             frontmatter {
               title
               live
               source
               stack
               image  {
                    childImageSharp {
                      fluid(maxWidth: 800, quality: 80) {
                        ...GatsbyImageSharpFluid_tracedSVG
                      }
                    }
                  }
             }
             html
           }
         }
       }
     }
   }
   `);


    useEffect(() => {

        function checkPosition() {
            let element = document.getElementById('portfolio');
            let windowHeight = window.innerHeight;
            let portfolio = document.getElementsByClassName('portfolioWrapper');
            let positionParentFromTop = element.getBoundingClientRect().top;

            if (positionParentFromTop - windowHeight <= -200) {

                element.style.visibility = 'visible';

                for (let i = 0; i < portfolio.length; i++) {

                    let positionFromTop = portfolio[i].getBoundingClientRect().top;
                    if (positionFromTop - windowHeight <= -100) {
                        // portfolio[i].classList.add('animateTopToBottom');
                        portfolio[i].style.visibility = 'visible';
                        if (i % 2 === 0) {
                            portfolio[i].classList.add('animateLeftToRight');
                        } else {
                            portfolio[i].classList.add('animateRightToLeft');
                        }
                    }
                }

            }

        }

        window.addEventListener('scroll', checkPosition);
        window.addEventListener('resize', checkPosition);

        checkPosition();
    }, [])

    return (

        <Container id="portfolio">
      
               <SectionTitle title="My Recent Work" />
        
           <ContentWrapper>
           <div >
              {items.edges.map(item => (
                  <PortfolioItem
                    key={item.node.id}
                    portfolio={item.node.childMarkdownRemark}
                  />
                ))}
            </div>
            </ContentWrapper>
           <GradientLink href="https://github.com/NihilisticNive25/" >
            
            More on <span> <FontAwesomeDiv  icon={faGithub} size="lg"/> </span>
           </GradientLink>
      </Container>
    )
}


export default Portfolio;