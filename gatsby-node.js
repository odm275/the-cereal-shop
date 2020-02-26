const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query allNodeProducts {
      allCommerceProductDefault {
        nodes {
          id
          path {
            alias
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panic(result.errors)
  }
  console.log("result", result.data.allCommerceProductDefault.nodes)

  result.data.allCommerceProductDefault.nodes.forEach(product => {
    createPage({
      path: product.path.alias,
      component: path.resolve("src/templates/product.js"),
      context: {
        productId: product.id,
      },
    })
  })
}
