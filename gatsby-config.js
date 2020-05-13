module.exports = {
  siteMetadata: {
    title: `The Last Dragon`,
    description: `Website for Dungeons and Dragons Campaign: The Last Dragon`,
    author: `mikesinc`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: `rndhkl6kzhsk`,
    //     accessToken: process.env.GATSBY_CONTENTFUL_DELIVERY_API,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Last Dragon`,
        short_name: `TLD`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-layout`
  ],
}
