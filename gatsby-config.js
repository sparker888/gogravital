require(`dotenv`).config()

const path = require("path")
module.exports = {
  siteMetadata: {
    links: {
      facebook: `https://www.facebook.com/gogravital/`,
      twitter: `https://twitter.com/gogravital/`,
    },
    locale: `en`,
    title: `@gogravital | Website Developers`,
    titleTemplate: `Gravital Digital | Website Developers`,
    description: `Blazing fast websites powered by Jamstack.`,
    siteUrl: `https://www.gravitaldigital.com`, // No trailing slash allowed!
    twitterUsername: `@gogravital`,
    publicURL: `/gogravital-social-card.jpg`, // This will be the default 'social' image for social media shares (in the static folder)
    organization: `Gravital Digital`,
    author: `@gogravital`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`, // See https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/
      options: {
        name: `Gravital Digital Website Developers`,
        short_name: `Gravital`,
        start_url: `/`,
        background_color: `#CA8A04`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#CA8A04` which is amber-600 from Gravital Branding.
        display: `minimal-ui`,
        icon: `src/images/gravital.png`, // This path is relative to the root of the site.
        theme_color_in_head: false, // This will avoid adding theme-color meta tag.
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
      __key: `images`,
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
      __key: `pages`,
    },
    "gatsby-plugin-mdx-embed",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.md`, `.mdx`],
        defaultLayouts: {
          pages: path.join(__dirname, "./src/templates/pages.jsx"),
        },
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        // Find the Google Tag Manager ID on
        id: "GTM-TCK3QP",
        includeInDevelopment: false,
        defaultDataLayer: { platform: `gatsby` },
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
      },
    },
  ],
}
