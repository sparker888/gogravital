require(`dotenv`).config()

const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Gravital Digital | Website Producer Stephen Parker`,
    titleTemplate: `%s | Gravital Digital`,
    description: `Light. Speed. websites and apps powered by Jamstack for incredible performance.`,
    siteUrl: `https://gravitaldigital.com`, // No trailing slash allowed!
    image: `gogravital-social-card.png`, // This should be relative to the static folder
    twitterUsername: `@gogravital`,
    author: `@gogravital`,
    organization: `Gravital Digital`,
    locale: `en`,
    links: {
      facebook: `https://www.facebook.com/gogravital/`,
      twitter: `https://twitter.com/gogravital/`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gravital Digital | Website Producer Stephen Parker`,
        short_name: `Gravital`,
        start_url: `/`,
        background_color: `#CA8A04`,
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
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
      },
    },
  ],
}
