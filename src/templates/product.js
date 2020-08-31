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
`

const Product = (props) => {
  return (
    <Layout>
      <div className="flex justify-between">
        <h2>{props.data.prismicProduct.data.productname.text}</h2>
        <h2>{props.data.prismicProduct.data.productprice.text}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        <img src={props.data.prismicProduct.data.productimage.url} alt=""/>

        <div>
          <h4>Product Details</h4>
          <p>{props.data.prismicProduct.data.productdescription.text}</p>
        </div>
      </div>
    </Layout>
  )
}

export default Product