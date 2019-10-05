import React from "react"
import layoutStyles from "./navstyles/Nav.module.scss"

const Nav = () => {
  return (
    <nav className={layoutStyles.main__nav}>
      <figure className={layoutStyles.logo}>
        <img
          src={
            "https://res.cloudinary.com/snackmanproductions/image/upload/v1570237318/consurgointl/conlogo_yixikm.jpg"
          }
          alt="Consurgo International Logo"
        />
      </figure>
      <h2>
        Consurgo <span className={layoutStyles.span}>International, Inc.</span>
      </h2>
    </nav>
  )
}

export default Nav
