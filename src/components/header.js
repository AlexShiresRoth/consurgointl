import PropTypes from "prop-types"
import React from "react"
import layoutStyles from "./headerstyles/Header.module.scss"
const Header = ({ siteTitle }) => (
  <header className={layoutStyles.header}></header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
