import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faYoutube,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const SocialContainer = styled.div`
margin-top: 1.5rem;
& a{
  margin: 1rem;
  color:var(----navHightlight);
  &:hover{
      color:var(--textBlue);
  }
}
`;


const Social = () => {
  const { site } = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        social {
          twitter
          instagram
          linkedin
          github
        }
      }  
  }
}
  `);

  return (
    <>
      <SocialContainer>
        <a
          rel="noreferrer"
          target="_blank"
          aria-label="Github"
          href={`https://github.com/${site.siteMetadata.social.github}`}
        >
          <FontAwesomeIcon icon={faGithub} size="lg"/>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          aria-label="Linkedin"
          href={`https://www.linkedin.com/in/${
            site.siteMetadata.social.linkedin
          }`}
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="lg"/>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          aria-label="Instagram"
          href={`https://www.instagram.com/${
            site.siteMetadata.social.instagram
          }`}
        >
          <FontAwesomeIcon icon={faInstagram} size="lg"/>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          aria-label="Twitter"
          href={`https://www.twitter.com/${site.siteMetadata.social.twitter}`}
        >
          <FontAwesomeIcon icon={faTwitter} size="lg"/>
        </a>
      </SocialContainer>
    </>
  );
};

export default Social;
