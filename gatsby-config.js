module.exports = {
  siteMetadata: {
    title: `ARTERION | visualization, modeling, shading, design and animation`,
    description: `ARTERION offers 3D visualization services, including interior and exterior renders, product modeling and shading, design and animation.`,
    author: `apeiron`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/arterion_icon.png`,
      },
    },
    `gatsby-plugin-sass`,
  ],
}
