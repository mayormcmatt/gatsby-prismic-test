import React from "react"
import { Link, graphql } from "gatsby"

import Layout from '../components/layout'

export const query = graphql`
  query($slug: String!) {
    prismicProduct(uid: {eq: $slug}) {
      data {
        productname {
          text
        }
        productdescription {
          text
        }
      }
    }
  }
`

const Product = (props) => {
  return (
    <Layout>
      <h1>{props.data.prismicProduct.data.productname.text}</h1>
    </Layout>
  )
}

export default Product