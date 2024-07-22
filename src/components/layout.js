import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Seo from "./seo"
import Header from "./header"
import Footer from "./footer"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          publicURL
          twitterUsername
        }
      }
    }
  `)

  const { title, description, siteUrl, publicURL, twitterUsername } =
    data.site.siteMetadata

  return (
    <>
      <Helmet>
        <script
          defer
          data-domain="gravitaldigital.com"
          src="https://plausible.io/js/script.js"
        ></script>
      </Helmet>
      <Seo
        title={title}
        description={description}
        publicURL={publicURL}
        twitterUsername={twitterUsername}
        siteUrl={siteUrl}
      />
      <Header siteTitle={title} />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
