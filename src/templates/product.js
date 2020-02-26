import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

const Product = ({ data: { commerceProductDefault } }) => {
  const product = {
    title: commerceProductDefault.title,
    body: commerceProductDefault.body.value,
    field_price: commerceProductDefault.field_price.formatted,
    field_main_image_fluid:
      commerceProductDefault.relationships.field_main_image.localFile
        .childImageSharp.fluid,
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <Img fluid={product.field_main_image_fluid} />
    </div>
  )
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

export default Product
