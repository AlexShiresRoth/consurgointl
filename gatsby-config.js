module.exports = {
  siteMetadata: {
    title: `Consurgo International Inc.`,
    description: `Consurgo International is an independent exporter and global leader in the delivery of US manufactured product, both non-food and food related since 2009.`,
    author: `@ASRproductions`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        background_color: `#7a2a2c`,
        theme_color: `#7a2a2c`,
        display: `minimal-ui`,
        icon: `src/images/conlogo.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
