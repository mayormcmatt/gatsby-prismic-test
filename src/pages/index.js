import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const landingPageContent = useStaticQuery(graphql`
    query {
      prismicGeneralimage (
        uid: {
          eq: "landing-page-hero"
        }
      ) {
        data {
          image {
            url
            alt
          }
        }
      }
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

      <section className="hero-section my-4">
        <img
          src={landingPageContent.prismicGeneralimage.data.image.url}
          alt={landingPageContent.prismicGeneralimage.data.image.url}
          className="w-full"
        />
      </section>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {landingPageContent.allPrismicProduct.edges.map((edge) => {
          const productPath = `/product/${edge.node.uid}`

          return (
            <li key={edge.node.id}>
              <Link to={productPath}>
                <img src={edge.node.data.productimage.url} alt=""/>
                <h4 className="py-2 font-sans font-semibold border-b-2 border-blue-500">{edge.node.data.productname.text}</h4>
                <p>{edge.node.data.productprice.text}</p>
                <p className="font-sans">{edge.node.data.productdescription.text}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default IndexPage
