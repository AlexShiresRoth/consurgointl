import React from "react"
import ServiceButtons from "./ServiceButtons"
import ServicesCopy from "../homecomponents/ServicesCopy"
import layoutStyles from "./homestyles/HomeServices.module.scss"
const HomeServices = () => {
  const imgs = [
    `https://res.cloudinary.com/snackmanproductions/image/upload/v1570571974/consurgointl/products/pic2_lucn47.png`,
    `https://res.cloudinary.com/snackmanproductions/image/upload/v1570571805/consurgointl/products/pouring-a-soft-drink-in-a-glass-PTWWEHC-min_vfkm9u.jpg`,
    `https://res.cloudinary.com/snackmanproductions/image/upload/v1570571799/consurgointl/products/1s6fn5NnHD2N8842GQC-_6Q_as0oo3.jpg`,
    `https://res.cloudinary.com/snackmanproductions/image/upload/v1570571792/consurgointl/products/the-impact-of-sugar-tax_lktjjc.jpg`,
  ]
  return (
    <>
      <header className={layoutStyles.services__header}>
        <div className={layoutStyles.overlay}></div>
        <h2>
          What <span>We</span> Provide
        </h2>
      </header>
      <section className={layoutStyles.services}>
        <ServiceButtons layoutStyles={layoutStyles} />

        <ServicesCopy layoutStyles={layoutStyles} />
      </section>
    </>
  )
}

export default HomeServices
