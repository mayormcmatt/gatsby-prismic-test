import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/layout'
import SEO from "../components/seo"

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
      <SEO
        title={props.data.prismicProduct.data.productname.text}
        description={props.data.prismicProduct.data.productdescription.text}
      />
      <div className="flex justify-between my-4">
        <h2 className="font-sans font-semibold">{props.data.prismicProduct.data.productname.text}</h2>
        <h2>{props.data.prismicProduct.data.productprice.text}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        <img src={props.data.prismicProduct.data.productimage.url} alt=""/>

        <div>
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded my-4 w-full">Add to Cart</button>
          <h4 className="font-sans font-semibold">Product Details</h4>
          <p className="font-sans">{props.data.prismicProduct.data.productdescription.text}</p>
        </div>
      </div>
    </Layout>
  )
}

export default Product