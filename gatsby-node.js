const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "PrismicProduct") {
    const slug = node.uid;
    createNodeField({
      node,
      name: 'slug',
      value: slug
    });
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve(`./src/templates/product.js`)

  const res = await graphql(`
    query {
      allPrismicProduct {
        edges {
          node {
            uid
          }
        }
      }
    }
  `)

  res.data.allPrismicProduct.edges.forEach((edge) => {
    createPage({
      component: productTemplate,
      // Build dynamic path based on UID
      // Strip out all characters that are not hyphens
      path: `/product/${edge.node.uid.replace(/[.,\/#!$%\^&\*;:{}=\_`~()]/g,"")}`,
      context: {
        slug: edge.node.uid
      }
    })
  })
}