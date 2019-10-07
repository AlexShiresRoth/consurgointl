import React from "react"
import { Link } from "gatsby"
import { IconContext } from "react-icons"
import { FaPlaneDeparture, FaEnvelope, FaUsers } from "react-icons/fa"
import layoutStyles from "./homestyles/ServiceButtons.module.scss"
const ServiceButtons = () => {
  const buttons = [
    { title: "Services", icon: <FaPlaneDeparture />, path: "Services" },
    { title: "About", icon: <FaUsers />, path: "About" },
    { title: "Contact", icon: <FaEnvelope />, path: "Contact" },
  ]
  const buttonsList = buttons.map((item, i) => {
    return (
      <div className={layoutStyles.container__column}>
        <IconContext.Provider value={{ className: layoutStyles.icon }}>
          {item.icon}
        </IconContext.Provider>{" "}
        <Link to={`/${item.path}`}>{item.title}</Link>
      </div>
    )
  })
  return <div className={layoutStyles.container__columns}>{buttonsList}</div>
}

export default ServiceButtons
