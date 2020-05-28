import React,{useEffect} from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,    
  } from '@fortawesome/free-solid-svg-icons';
  
const BlogContainer = styled.section `
display: flex;
flex-direction: column;
justify-content: space-between;
width: 30rem;
padding: 2rem 0rem;
visibility:hidden;
@media ${props => props.theme.mediaQueries.large} {
  width: 45%;
}


@media ${props => props.theme.mediaQueries.medium} {
  width: 30rem;
}

@media ${props => props.theme.mediaQueries.small} {
  width: 100%;
}

@media ${props => props.theme.mediaQueries.smallest} {
  width: 100%;
}
`;

const ImageContainer = styled.div`
width: 100%;
& img {
     padding: 0.1rem;      
     background-color: var(--textSecondary) ; 
}


@media ${props => props.theme.mediaQueries.small} {
  width: 100%;
}

@media ${props => props.theme.mediaQueries.smallest} {
  width: 100%;
}
`;

const ImgElement = styled(Img)`
width: 100%;
 height : 20rem;

 @media ${props => props.theme.mediaQueries.small} {
//  width: 22rem;
  height: 14rem;
}

@media ${props => props.theme.mediaQueries.smallest} {
  width: 100%;
    height: 9rem;
}
`;

const BlogDetails = styled.div`
width:100%;
    padding: 1rem 0rem;
    & p{
    @media ${props => props.theme.mediaQueries.small} {
      font-size:0.9rem;
    }
    
    @media ${props => props.theme.mediaQueries.smallest} {
      font-size:0.9rem;
    }
  }
`;

const BlogTitle = styled.a`
color:   var(--textSecondary);
text-decoration: none;
font-size: 1.3rem;
font-weight: bold;
line-height: 30px;      
text-align: start;
@media ${props => props.theme.mediaQueries.small} {
  font-size:1rem;
}

@media ${props => props.theme.mediaQueries.smallest} {
  font-size:1rem;
}
`;

const BlogTagLine = styled.span`
color:var(--textTertiary);
`;

const DateContainer = styled.p`
color:var(--textBlue)
`;

const FontAwesomeDiv = styled(FontAwesomeIcon)`
padding-right:0.3rem;
`;



const BlogItem = ({ blog, html }) => {

  const { title, blogUrl, date, image,  } = blog.frontmatter;

  


  return (

    <BlogContainer className="blogWrapper">
   
    <ImageContainer>
     {!!image &&  <ImgElement fluid={image.childImageSharp.fluid} alt="" />}
    </ImageContainer>
    <BlogDetails>
      <BlogTitle target='_blank' href={blogUrl} >{title}</BlogTitle>
      <BlogTagLine dangerouslySetInnerHTML={{ __html: html }}/> 
      <DateContainer >
         <FontAwesomeDiv icon={faCalendarAlt}/>        
        <span  dangerouslySetInnerHTML={{ __html: date }}/>
      </DateContainer> 
      </BlogDetails>
  </BlogContainer>
  );
};

export default BlogItem;



  