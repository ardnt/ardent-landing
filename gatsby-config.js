module.exports = {
  siteMetadata: {
    title: `Ardent`,
    description: `Hello from Ardent!`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ardent`,
        short_name: `Ardent`,
        start_url: `/`,
        background_color: `#34449c`,
        theme_color: `#87cebb`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
        include_favicon: true,
      },
    },
  ],
}
