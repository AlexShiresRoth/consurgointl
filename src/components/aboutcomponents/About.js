import React from "react"
import PropTypes from "prop-types"
import layoutStyles from "./aboutstyles/About.module.scss"
const About = () => {
  return (
    <section className={layoutStyles.about__section}>
      <div className={layoutStyles.container}>
        <p>
          Created exclusively for export, Consurgo International is an
          independent exporter and global leader in the delivery of US
          manufactured product, both non-food and food related since 2009. We
          specialize in accommodating the special needs of international end
          users. Our company operates a highly effective global sourcing network
          with agents in Asia, Europe, and the Americas, providing a broad range
          of integrated sourcing solutions to leading original equipment
          manufacturers (OEMs) and contract manufacturers (CMs) across a range
          of industries.
        </p>
      </div>
    </section>
  )
}

About.propTypes = {
  aboutCopy: PropTypes.string,
}
About.defaultProps = {
  aboutCopy: ``,
}

export default About
