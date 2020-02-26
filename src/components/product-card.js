import React from "react"
import Img from "gatsby-image/withIEPolyfill"

function ProductCard({
  name = "No Product",
  image = "https://www.zenzonegym.com/wp-content/uploads/2019/04/test-product.jpg",
  price = 0,
  variants = [],
  rating = 0,
  reviews = [],
}) {
  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <Img fixed={image} />
      <div className="p-6">
        <h4 className="font-semibold text-lg">{name}</h4>
        <div className="text-gray-600">{price}</div>
        <div className="mt-4">
          <span className="text-teal-600 font-semibold">{rating}/5 stars</span>
          <span className="text-gray-600 text-sm">
            {" "}
            (based on {reviews.length}) reviews
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
