import React from "react"
import Img from "gatsby-image/withIEPolyfill"
function Product({ title, body, price, imageProps }) {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <Img fluid={imageProps} />
      </div>
    </div>
  )
}

export default Product
