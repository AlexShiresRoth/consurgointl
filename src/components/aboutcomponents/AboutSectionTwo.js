import React from "react"
import PropTypes from "prop-types"
import { IconContext } from "react-icons"
import { FaPlane, FaRegClock } from "react-icons/fa"
import layoutStyles from "./aboutstyles/About.module.scss"
const SectionTwo = () => {
  return (
    <div className={layoutStyles.about__section}>
      <div className={layoutStyles.container__columns}>
        <div className={layoutStyles.column}>
          <IconContext.Provider value={{ className: `${layoutStyles.icon}` }}>
            <FaPlane />
          </IconContext.Provider>

          <p>
            Consurgo International serves as USA buying office for customers
            around the world.
          </p>

          <p>
            Our knowledge and ability to integrate technology, with our
            international experience in foreign trade enables us to provide a
            competitive advantage to our customers by improving market-to-market
            operations and efficiency.
          </p>

          <p>
            We can source US made products and deliver them quickly, efficiently
            and economically to any location around the world.
          </p>
        </div>
        <div className={layoutStyles.column}>
          <IconContext.Provider value={{ className: `${layoutStyles.icon}` }}>
            <FaRegClock />
          </IconContext.Provider>

          <p>
            For the International customer we provide quick and economic access
            to US products, such as process control instruments, gaming
            equipment, and a wide range of food items through our vast network
            of supply chains. We serve as a buying and logistics office inside
            the US.
          </p>
          <p>
            For US manufacturer's we provide a value added service by providing
            a quick access to foreign markets regardless of the size and scope
            of the transaction. We eliminate all risks associated with selling
            the product overseas. We handle all of the technical, financial and
            logistics support. We provide the after sale support through our
            extensive network of distributors across 4 continents.
          </p>
        </div>
      </div>
    </div>
  )
}

SectionTwo.propTypes = {
  layoutStyles: PropTypes.object,
}
SectionTwo.defaultpropTypes = {
  layoutStyles: ``,
}

export default SectionTwo
