import React from "react"
import PropTypes from "prop-types"
import SectionTwo from "./SectionTwo"
import layoutStyles from "./aboutstyles/About.module.scss"
const About = ({ aboutCopy }) => {
  return (
    <section className={layoutStyles.about__section}>
      <div className={layoutStyles.container}>
        <h3>
          ABOUT CONSURGO <span>INTERNATIONAL, INC.</span>
        </h3>
        <hr></hr>
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
      <SectionTwo layoutStyles={layoutStyles} />
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
