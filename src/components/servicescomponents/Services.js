import React from "react"
import PropTypes from "prop-types"

import ServicesCopy from "./ServicesCopy"
import layoutStyles from "./servicesstyles/Services.module.scss"

const Services = props => {
  return (
    <section className={layoutStyles.services}>
      <header className={layoutStyles.services__header}>
        <div className={layoutStyles.overlay}></div>
        <h2>
          What <span>We</span> Provide
        </h2>
      </header>
      <div className={layoutStyles.container}>
        <ServicesCopy layoutStyles={layoutStyles} />
      </div>
    </section>
  )
}

Services.propTypes = {}

export default Services
