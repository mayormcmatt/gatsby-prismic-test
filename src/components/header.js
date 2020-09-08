import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => {
  const logo = useStaticQuery(graphql`
    query {
      prismicGeneralimage (
        uid: {
          eq: "stick-it-logo-main"
        }
      ) {
        data {
          image {
            url
            alt
          }
        }
      }
    }
  `)

  return (
    <header>
      <nav className="container flex mx-auto p-2 border-b-4 border-blue-500 dark:bg-gray-800">
        <img
          src={logo.prismicGeneralimage.data.image.url}
          alt={logo.prismicGeneralimage.data.image.alt}
          className="w-10 mx-4"
        />

        <h1
          style={{ margin: 0 }}
          className="font-display dark:text-white">
          <Link to="/">
            Stick It Good!
          </Link>
        </h1>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
