import React from "react"
import PropTypes from "prop-types"
import { IconContext } from "react-icons"
import { FaCopyright } from "react-icons/fa"

import layoutStyles from "./footerstyles/Footer.module.scss"
const Footer = props => {
  return (
    <footer className={layoutStyles.footer}>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.container__columns}>
          <div className={layoutStyles.column}>
            <a href="mailto:sales@consurgointl.com">sales@consurgointl.com </a>
            <a href="tel:516-445-0719">(516)-445-0719</a>
          </div>
          <div className={layoutStyles.column}>
            <ul>
              <li>CONSURGO INTERNATIONAL INC.</li>
              <li>56 DAVIS STREET</li>
              <li>LOCUST VALLEY </li>
              <li>NEW YORK 11560</li>
            </ul>
          </div>
        </div>
        <p>
          <IconContext.Provider value={{ className: `${layoutStyles.icon}` }}>
            <FaCopyright />
          </IconContext.Provider>{" "}
          Copyright 2019 CONSURGO INTERNATIONAL INC. - ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  )
}

Footer.propTypes = {}

export default Footer
