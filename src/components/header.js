import PropTypes from "prop-types"
import React from "react"
import layoutStyles from "./headerstyles/Header.module.scss"
const Header = ({ pageData }) => (
  <header
    style={{ backgroundImage: `url(${pageData.img})` }}
    className={layoutStyles.header}
  >
    {" "}
    <h2>{pageData.pageTitle}</h2>
    <div className={layoutStyles.overlay}></div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
