import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDesktop } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const TemplateContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 3rem 0rem;
  align-items: center;
  visibility: hidden;

  &:nth-child(2n) {
    flex-direction: row-reverse;
  }

  @media ${props => props.theme.mediaQueries.large} {
    padding: 3rem 3rem;
  }

  @media ${props => props.theme.mediaQueries.medium} {
    padding: 3rem 1rem;
    flex-direction: column;
    flex-direction: column;
    &:nth-child(2n) {
      flex-direction: column;
    }
  }
  @media ${props => props.theme.mediaQueries.small} {
    padding: 3rem 0rem;
    flex-direction: column;
    &:nth-child(2n) {
      flex-direction: column;
    }
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    padding: 3rem 0rem;
    flex-direction: column;
    &:nth-child(2n) {
      flex-direction: column;
    }
  }
`

const ImageWrapper = styled.div`
  width: 45%;
  & img {
    padding: 0.1rem;
    background-color: var(--textSecondary);
    border-radius: 0.3rem;
  }

  @media ${props => props.theme.mediaQueries.medium} {
    width: 80%;
  }

  @media ${props => props.theme.mediaQueries.small} {
    width: 120%;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    width: 100%;
  }
`

const DetailsContainer = styled.div`
  text-align: start;
  width: 45%;
  align-self: center;

  @media ${props => props.theme.mediaQueries.medium} {
    width: 80%;
  }
  @media ${props => props.theme.mediaQueries.small} {
    width: 120%;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    width: 100%;
  }
`

const AboutApp = styled.span`
  color: var(--textSecondary);

  & a {
    color: var(--textTertiary);
    text-decoration: underline;
    &:hover {
      ${props =>
        props.theme.gradientTextMixin(
          props.theme.colors.primaryColor,
          props.theme.colors.secondaryColor
        )};
      opacity: var(--opacity);
    }
  }
`

const Stack = styled.p`
  color: var(--textSecondary);
  font-weight: bold;
  font-size: 1.1rem;
  line-height: 1.6rem;

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 0.9rem;
    line-height: 1.4rem;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    font-size: 0.9rem;
    line-height: 1.4rem;
  }
`

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15rem;
  & a {
    margin: 0rem;
    color: var(--textBlue);
    text-decoration: none;
    font-weight: 550;
    &:hover {
      color: var(--textBlue) !important;
    }
  }

  @media ${props => props.theme.mediaQueries.medium} {
    width: auto;
  }
  @media ${props => props.theme.mediaQueries.small} {
    width: auto;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    width: auto;
  }
`

const FontAwesomeDiv = styled(FontAwesomeIcon)`
  padding-right: 0.1rem;
`

const PortfolioItem = ({ portfolio }) => {
  const { title, live, source, stack, image } = portfolio.frontmatter

  return (
    <TemplateContainer className="portfolioWrapper">
      <ImageWrapper>
        {!!image && (
          <Img
            style={{ width: "100%", height: "100%" }}
            fluid={image.childImageSharp.fluid}
          />
        )}
      </ImageWrapper>
      <DetailsContainer>
        <h2> {title} </h2>
        <AboutApp dangerouslySetInnerHTML={{ __html: portfolio.html }} />
        <Stack> {stack} </Stack>
        <BtnWrapper>
          <a target="_blank" solid href={live} rel="noreferrer">
            <span>
              {" "}
              <FontAwesomeDiv icon={faDesktop} />{" "}
            </span>
            Demo
          </a>
          <a target="_blank" href={source} rel="noreferrer">
            <span>
              {" "}
              <FontAwesomeDiv icon={faGithub} />{" "}
            </span>
            Source
          </a>
        </BtnWrapper>
      </DetailsContainer>
    </TemplateContainer>
  )
}

export default PortfolioItem
