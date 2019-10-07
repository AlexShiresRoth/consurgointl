import React from "react"
import ServiceButtons from "./ServiceButtons"
import ServicesCopy from "../homecomponents/ServicesCopy"
import layoutStyles from "./homestyles/HomeServices.module.scss"
const HomeServices = () => {
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
