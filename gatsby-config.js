/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

  module.exports = {

    siteMetadata: {
      appName: 'Notes Viewer',
      companyName: 'A Cool Company, Inc',

      siteNav: {
        Home: '/',
        About: '/about', 
        Feedback: '/feedback',
      },
    },



  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
  ],
}
