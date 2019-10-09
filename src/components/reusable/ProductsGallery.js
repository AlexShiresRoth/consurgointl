import React from "react"
import layoutStyles from "./reusablestyles/ProductsGallery.module.scss"

const ProductsGallery = ({ imgs }) => {
  const productImgsMap = imgs.map((img, i) => {
    return (
      <picture key={i}>
        <img className={layoutStyles.product__img} src={img} alt="products" />
      </picture>
    )
  })
  return (
    <div className={layoutStyles.products__container}>{productImgsMap}</div>
  )
}

export default ProductsGallery
