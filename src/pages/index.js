import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ProductCard from "../components/product-card"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query AllProducts {
      allCommerceProductDefault {
        edges {
          node {
            title
            path {
              alias
            }
            field_price {
              currency_code
              formatted
            }
            relationships {
              field_main_image {
                localFile {
                  childImageSharp {
                    fixed(fit: COVER) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <div className="flex">
        {data.allCommerceProductDefault.edges.map(product => {
          return (
            <Link to={product.node.path.alias}>
              <ProductCard
                name={product.node.title}
                price={product.node.field_price.formatted}
                image={
                  product.node.relationships.field_main_image.localFile
                    .childImageSharp.fixed
                }
              />
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage
