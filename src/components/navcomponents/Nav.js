import React, { Component } from "react"
import { IconContext } from "react-icons"
import { FaBars, FaTimes } from "react-icons/fa"
import layoutStyles from "./navstyles/Nav.module.scss"
import NavLinks from "./NavLinks"

export default class Nav extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showMenu: false,
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    !this.state.showMenu
      ? this.setState({ showMenu: true })
      : this.setState({ showMenu: !this.state.showMenu })
  }

  componentDidMount() {
    this.setState({ showMenu: false })
  }

  render() {
    return (
      <nav className={layoutStyles.main__nav}>
        <div className={layoutStyles.nav__top}>
          <figure className={layoutStyles.logo}>
            <img
              src={
                "https://res.cloudinary.com/snackmanproductions/image/upload/v1570237318/consurgointl/conlogo_yixikm.jpg"
              }
              alt="Consurgo International Logo"
            />
          </figure>
          <h1>
            <span>
              Consurgo{" "}
              <span className={layoutStyles.span}>International, Inc.</span>
            </span>
          </h1>
        </div>
        <div className={layoutStyles.nav__bottom} onClick={this.toggleMenu}>
          <IconContext.Provider value={{ className: `${layoutStyles.icon}` }}>
            {this.state.showMenu ? <FaTimes /> : <FaBars />}
          </IconContext.Provider>{" "}
          <h3>Menu</h3>
        </div>
        <NavLinks layoutStyles={layoutStyles} showMenu={this.state.showMenu} />
      </nav>
    )
  }
}
