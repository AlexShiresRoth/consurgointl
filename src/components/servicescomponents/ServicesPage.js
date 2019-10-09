import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import ProductsGallery from "../reusable/ProductsGallery"
import layoutStyles from "./servicesstyles/ServicesPage.module.scss"
const ServicesPage = props => {
  const imgs = [
    `https://res.cloudinary.com/snackmanproductions/image/upload/v1570571974/consurgointl/products/pic2_lucn47.png`,
    `https://res.cloudinary.com/snackmanproductions/image/upload/v1570571805/consurgointl/products/pouring-a-soft-drink-in-a-glass-PTWWEHC-min_vfkm9u.jpg`,
    `https://res.cloudinary.com/snackmanproductions/image/upload/v1570571799/consurgointl/products/1s6fn5NnHD2N8842GQC-_6Q_as0oo3.jpg`,
    `https://res.cloudinary.com/snackmanproductions/image/upload/v1570571792/consurgointl/products/the-impact-of-sugar-tax_lktjjc.jpg`,
    `https://res.cloudinary.com/snackmanproductions/image/upload/v1570571789/consurgointl/products/5b0098e071ffd_cb2p99.jpg`,
    `https://res.cloudinary.com/snackmanproductions/image/upload/v1570571770/consurgointl/products/cxc_02_gwgkm7.jpg`,
    `https://res.cloudinary.com/snackmanproductions/image/upload/v1570571766/consurgointl/products/car-sim-ft_htstte.jpg`,
    `https://res.cloudinary.com/snackmanproductions/image/upload/v1570578824/consurgointl/products/h1_1_fiewbu.png`,
  ]
  return (
    <section className={layoutStyles.contact__section}>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.container__columns}>
          <div className={layoutStyles.column}>
            <h4>
              CONTACT{" "}
              <span>
                <Link to="/Contact">CONSURGO INTERNATIONAL INSTRUMENTS</Link>
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
                <Link to="/Contact">CONSURGO INTERNATIONAL SPECIALTIES</Link>
              </span>{" "}
              for any on the below products:
            </h4>
            <p>
              Agricultural products, food ingredients, ready foods,
              non-alcoholic beverages, energy drinks and snacks from trusted
              brands.
            </p>
            <p>
              <a href="tel:516-445-0719">Phone:(516)-455-0719</a>
            </p>
          </div>
        </div>
        <ProductsGallery layoutStyles={layoutStyles} imgs={imgs} />
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
