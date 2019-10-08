import React from "react"
import PropTypes from "prop-types"
import layoutStyles from "./servicesstyles/ServicesPage.module.scss"
const ServicesPage = props => {
  return (
    <section className={layoutStyles.contact__section}>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.container__columns}>
          <div className={layoutStyles.column}>
            <h4>
              CONTACT{" "}
              <span>
                <a href="mailto:sales@consurgointl.com">
                  CONSURGO INTERNATIONAL INSTRUMENTS
                </a>
              </span>{" "}
              for any of the below products and services:
            </h4>
            <p>
              Pressure, Flow, and Level measuring instruments, Transmitters,
              Gauges, Controllers, Sensors, Thermometers, Indicators, Testing
              Device, Arcade Machines, Safeguard Equipment, Monitoring and
              Control Systems, Refrigeration Parts, Automotive Parts, Industrial
              Machinery components, Wind Power Products, Turbines, Motors.
            </p>
            <p>
              <a href="tel:516-455-3185">Phone:(516)-455-3185</a>
            </p>
          </div>
          <div className={layoutStyles.column}>
            <h4>
              CONTACT{" "}
              <span>
                <a href="mailto:sales@consurgointl.com">
                  CONSURGO INTERNATIONAL SPECIALTIES
                </a>
              </span>{" "}
              for any on the below products:
            </h4>
            <p>
              Agricultural products, food ingredients, ready foods,
              non-alcoholic beverages, energy drinks and snacks from trusted
              brands.
            </p>
            <p>
              <a href="tel:516-445-0719">Phone:516-455-0719</a>
            </p>
          </div>
        </div>
        <div className={layoutStyles.container__columns}>
          <div className={layoutStyles.column}>
            <h4>USA BUYING OFFICE</h4>
            <p>
              Please contact Consurgo International for special purchasing
              requests from US manufactures.
            </p>
          </div>
          <div className={layoutStyles.column}>
            <h4>SHIPPING AND LOGISTICS SUPPORT</h4>
            <p>
              Please contact Consurgo International for logistics support.
              Courier and air freight shipments from the USA to any location
              around the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

ServicesPage.propTypes = {}

export default ServicesPage
