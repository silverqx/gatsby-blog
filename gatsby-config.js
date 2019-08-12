/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config()

module.exports = {
    siteMetadata: {
        author: 'Silver Zachara',
        email: 'silver.zachara@gmail.com',
    },
    plugins: ['gatsby-plugin-sass'],
}
