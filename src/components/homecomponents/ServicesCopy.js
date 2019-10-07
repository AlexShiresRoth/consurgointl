import React from "react"
import PropTypes from "prop-types"

const ServicesCopy = ({ layoutStyles }) => {
  return (
    <div className={layoutStyles.container__columns}>
      <div className={layoutStyles.column}>
        <h4>
          CONSURGO <span>LOGISTICS</span> SOLUTIONS
        </h4>
        <hr></hr>
        <p>
          An attractive alternative to broadline franchised Distributors and
          general- purpose logistics service providers, tailored to your
          technology supply chain.{" "}
          <span className={layoutStyles.subtext}>
            <em>Shipping,Documentation,Packaging.</em>
          </span>
        </p>
      </div>
      <div className={layoutStyles.column}>
        <h4>
          CONSURGO <span>VALUE-ADDED</span> SERVICES
        </h4>
        <hr></hr>
        <p>
          <strong>EXPORT PROGRAMS</strong>, Sourcing of US Made Products and
          parts for International Customers, Market research, Logistics and
          technical support.
        </p>
      </div>
    </div>
  )
}

ServicesCopy.propTypes = {
  layoutStyles: PropTypes.object,
}
ServicesCopy.defaultPropTypes = {
  layoutStyles: {},
}

export default ServicesCopy
