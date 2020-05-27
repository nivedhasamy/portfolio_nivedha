import React,{useEffect} from "react";
import SectionTitle from "../components/utils/sectionTitle";
import { useStaticQuery, graphql } from "gatsby";
import BlogItem from '../templates/blog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import {  
    faBookReader,
  } from '@fortawesome/free-solid-svg-icons';

  
const Container = styled.section `
display: flex;
flex-direction: column;
align-items: center;
padding: 5.5rem 0rem;
//visibility:hidden;
@media ${props => props.theme.mediaQueries.small} {
  padding: 5rem 1rem;
}

@media ${props => props.theme.mediaQueries.smallest} {
  padding: 5rem 1rem;
}
`;

const ContentWrapper = styled.section `
text-align: left;
padding: 40px 150px;
color: var(--textSecondary);
width:100%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;

align-content: center;
& p{
 text-align: left;
 left: 10px;
 bottom: 168px;
}
${props => props.theme.animateBottomToTop()};

  @media ${props => props.theme.mediaQueries.large} {
   flex-direction:row;
   width:100%;
   padding:40px 70px;
   justify-content: space-around;
  }

  @media ${props => props.theme.mediaQueries.small} {
    padding: 1rem 1rem;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    padding: 1rem 1rem;
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
    font-size: 14px !important;
  }
`;

const FontAwesomeDiv = styled(FontAwesomeIcon)`
padding-right:0.1rem;
`;


const Blog = () => {
  const { allFile: items } = useStaticQuery(graphql`
  query {
    allFile(filter: { extension: {eq: "md"}, relativeDirectory: {regex: "/blog/"}}, sort: {fields: [dir], order: DESC}) {
      edges {
        node {
          id
          childMarkdownRemark {
            frontmatter {
              title
              blogUrl
              date
              image {
                id
                childImageSharp {
                  fluid(maxWidth: 500, quality: 80) {
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
  
   // useEffect(() => {
   //      window.addEventListener("scroll", function() {
   //          if (this.scrollY > 0) {
   //              document.getElementById('blogs').style.visibility = 'visible';
   //          } else {
   //              document.getElementById('blogs').style.visibility = 'hidden';
   //          }
   //      });
   //  }, [])
   
  return (
      <Container id="blogs" >
            <SectionTitle title="FROM MY BLOG" />           
               
            <ContentWrapper>
              
                  {items.edges.map(item => (
                      <BlogItem
                        key={item.node.id}
                        blog={item.node.childMarkdownRemark}
                        html={item.node.childMarkdownRemark.html}
                      />
                  ))}

              
            </ContentWrapper>
            <GradientLink href="https://medium.com/@nivedhasamy" >
                  Read more   <span> <FontAwesomeDiv  icon={faBookReader} size="lg"/> </span>
              </GradientLink>
    </Container>
  );
}


export default Blog
