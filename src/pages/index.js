import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
// import { graphql, useStaticQuery } from 'gatsby'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const content = useStaticQuery(graphql`
    query {
      allPrismicProduct {
        edges {
          node {
            id
            data {
              productname {
                text
              }
              productdescription {
                text
              }
              productimage {
                url
                alt
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <ul>
        {content.allPrismicProduct.edges.map((edge) => {
          return (
            <li key={edge.node.id}>
              <img src="" alt=""/>
              <h2>{edge.node.data.productname.text}</h2>
              <p>{edge.node.data.productdescription.text}</p>
            </li>
          )
        })}
      </ul>


      {/* <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> */}
      <Link to="/page-2/">Go to page 2</Link> <br />
    </Layout>
  )
}

export default IndexPage
