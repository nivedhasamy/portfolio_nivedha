import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
    const { site } = useStaticQuery(
        graphql `
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            imageSeo
          }
          
        }
      }
    `
    )

    const metaDescription = description || site.siteMetadata.description
    const metaImage = `${site.siteMetadata.siteUrl}/${
    site.siteMetadata.imageSeo
  }`;



    return (
        <Helmet
      htmlAttributes={{
        lang,
      }}
      title='Nivedha'
      titleTemplate={`%s | Front-end Developer`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          name: "keywords",
          content: site.siteMetadata.keywords.join(","),
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat([
          {
            property: 'og:image',
            content: metaImage,
          },
          {
            name: 'twitter:image',
            content: metaImage,
          },
        ])
      .concat(meta)}
    />
    )
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
}

export default SEO