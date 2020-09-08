import React from "react"
import { Helmet } from "react-helmet"

const ProductPageSeo = (props) => {
  return (
    <Helmet>
      <title>
        Stick it Good | {props.productData.data.prismicProduct.data.productname.text}
      </title>
      <meta
        name="description" content={props.productData.data.prismicProduct.data.productdescription.text}
      />
      <meta
        name="og:title" content={props.productData.data.prismicProduct.data.productname.text}
      />
      <meta
        name="og:description" content={props.productData.data.prismicProduct.data.productdescription.text}
      />
      <meta
        name="og:type" content="website"
      />
      <meta
        name="twitter:card" content="summary"
      />
      <meta
        name="twitter:creator" content="Bit Kabosu"
      />
      <meta
        name="twitter:title" content={props.productData.data.prismicProduct.data.productname.text}
      />
      <meta
        name="twitter:description" content={props.productData.data.prismicProduct.data.productdescription.text}
      />
    </Helmet>
  )
}

ProductPageSeo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

export default ProductPageSeo
