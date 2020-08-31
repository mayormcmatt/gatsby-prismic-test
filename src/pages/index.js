import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
// import { graphql, useStaticQuery } from 'gatsby'

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const content = useStaticQuery(graphql`
    query {
      allPrismicProduct {
        edges {
          node {
            id
            uid
            data {
              productname {
                text
              }
              productdescription {
                text
              }
              productprice {
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
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {content.allPrismicProduct.edges.map((edge) => {
          const productPath = `/product/${edge.node.uid}`

          return (
            <Link to={productPath}>
              <li key={edge.node.id}>
                <img src={edge.node.data.productimage.url} alt=""/>
                <h2>{edge.node.data.productname.text}</h2>
                <p>{edge.node.data.productprice.text}</p>
                <p>{edge.node.data.productdescription.text}</p>
              </li>
            </Link>
          )
        })}
      </ul>
    </Layout>
  )
}

export default IndexPage
