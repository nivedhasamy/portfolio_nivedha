module.exports = {
  siteMetadata: {
    title: `Nivedha | Frontend developer `,
    description: `I’m Nivedha, a self-taught Front-end developer who makes responsive web apps.`,
    greeting: `Hello! `,
    intro: `I’m <span class="title">Nivedha</span>`,
    tagLine: `Member of community that is powered by caffeine and loves to open source everything they build.`,
    author: `Nivedha`,
    siteUrl: 'http://localhost:8000',    
    capitalizeTitleOnHome: false,
    introTag: `FRONT-END DEVELOPER | BLOGGER`,
    keywords:['frontend','developer','nivedha','react','redux','gatsby','portfolio'],
    logo:'images/icon.png',
   
   social: {
      twitter: 'nive2504',
      instagram: 'nive2504',
      linkedin: 'nivedhaduraisamy',
      github: 'NihilisticNive25',
      email: 'nivedhasamy@gmail.com'
    },
contact: {
  description: `Interested in working together? Let's have a talk:`,
  mail: "nivedhasamy@gmail.com",
  address: "Chennai, India"
},
footerLinks: [
  {
      name: "PRIVACY POLICY",
      url: "/privacy-policy"
  },
  {
      name: "GitHub",
      url: "https://github.com/akzhy/gatsby-starter-elemental"
  }
],
},
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-166780752-1",
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-sass`,     
  ],
}
