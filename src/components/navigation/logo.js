import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Icon from '../../images/icon.png'

const Logo = () => {
    const query = useStaticQuery(graphql`
        query LogoQuery {
            site {
                siteMetadata {
                    title                    
                }
            }
        }
    `);
    return (
        <img
            className="logo"
            src={Icon}
            alt={query.site.siteMetadata.title}
        />
    );
}

export default  Logo;