import React from "react"
import { graphql } from "gatsby"
import Product from "../components/product"
const ProductTemplate = ({ data: { commerceProductDefault } }) => {
  const product = {
    title: commerceProductDefault.title,
    body: commerceProductDefault.body.value,
    price: commerceProductDefault.field_price.formatted,
    imageProps:
      commerceProductDefault.relationships.field_main_image.localFile
        .childImageSharp.fluid,
  }

  return <Product {...product} />
}

export const query = graphql`
  query($productId: String!) {
    commerceProductDefault(id: { eq: $productId }) {
      title
      body {
        value
      }
      field_price {
        currency_code
        formatted
      }
      field_sku
      relationships {
        field_main_image {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default ProductTemplate
