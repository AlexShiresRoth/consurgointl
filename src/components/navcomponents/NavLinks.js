import React from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"

const NavLinks = ({ layoutStyles, showMenu }) => {
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/About" },
    { title: "Services", path: "/Services" },
    { title: "Contact", path: "/Contact" },
  ]
  const navListMap = navLinks.map((item, i) => {
    return (
      <li key={i} className={layoutStyles.nav__link}>
        <Link to={item.path}>{item.title}</Link>
      </li>
    )
  })
  return (
    <>
      <ul
        className={
          showMenu
            ? `${layoutStyles.nav__list}`
            : `${layoutStyles.nav__list} ${layoutStyles.hide}`
        }
      >
        {navListMap}
      </ul>
    </>
  )
}

NavLinks.propTypes = {
  layoutStyles: PropTypes.object,
}

export default NavLinks
