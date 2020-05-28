import React,{useEffect} from "react";
import SectionTitle from "../components/utils/sectionTitle";
import { StaticQuery, graphql } from "gatsby";
import SocialLinks from "../components/socialLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarked } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';

const Container = styled.section `
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem 0rem;
  
 visibility:hidden;
    & p{
        @media ${props => props.theme.mediaQueries.small} {
            font-size : 1rem;
          }
        
          @media ${props => props.theme.mediaQueries.smallest} {
            font-size : 0.9rem;
          }
    }
  @media ${props => props.theme.mediaQueries.small} {
    padding: 7rem 4rem;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    padding: 6rem 2rem;
  }
`;

const ContentWrapper = styled.section `
  text-align: center;
    padding: 0rem 11rem;
    color: var(--textSecondary);

    @media ${props => props.theme.mediaQueries.small} {
      padding: 1rem 2rem;
    }
  
    @media ${props => props.theme.mediaQueries.smallest} {
      padding: 1rem 0rem;
    }
`;


const IconWrapper = styled.span `
padding-right:0.5rem;
`;

const EmailWrapper = styled.p `
color: var(--textBlue);
    & a{
        color: var(--textBlue);
        text-decoration: none;
    }
`;

const AddressWrapper = styled.span `
    display:inline-flex;
`;



const Contact = ({
    contact: {
        description,
        mail,
        address
    }
}) => {

   useEffect(() => {
 
  function checkPosition() {
    let element = document.getElementById('contact');
    let windowHeight = window.innerHeight;
     let positionFromTop = element.getBoundingClientRect().top;
     if (positionFromTop - windowHeight <= -200) {
        element.classList.add('animateTopToBottom');
          element.style.visibility = 'visible';
      }    
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', checkPosition);

  checkPosition();
    }, [])

  return(
    <Container id="contact" >       
            <SectionTitle title="Contact" /> 
      
            <ContentWrapper>           
                 <div dangerouslySetInnerHTML={{ __html: description }}/>
                <EmailWrapper>
                    <IconWrapper >
                        <FontAwesomeIcon icon={faEnvelope}  size="lg"/>
                    </IconWrapper>
                    <a href={"mailto:" + mail}>{mail} </a>
                </EmailWrapper>
                <AddressWrapper>
                    <IconWrapper >
                        <FontAwesomeIcon icon={faMapMarked}  size="lg"/>
                    </IconWrapper>
                    <span dangerouslySetInnerHTML={{ __html: address }}/>
                </AddressWrapper>
                <SocialLinks/>
            </ContentWrapper>
        </Container>
)};

export default () => (
    <StaticQuery
        query={
            graphql`
                query {
                    site {
                        siteMetadata {
                            contact {
                                description
                                mail
                                address
                            }
                        }
                    }
                }
        `}
        render={data => <Contact contact={data.site.siteMetadata.contact} />
        }
    />
);