import React from "react"
import { IconContext } from "react-icons"
import { FaEnvelopeOpen, FaAddressCard } from "react-icons/fa"
import layoutStyles from "./contactstyles/Contact.module.scss"

const ContactPage = () => {
  return (
    <section className={layoutStyles.contact__section}>
      <form className={layoutStyles.contact__form}>
        <div className={layoutStyles.form__column}>
          <label htmlfor="name">Name or Business:</label>
          <div className={layoutStyles.form__row}>
            <IconContext.Provider
              value={{ className: `${layoutStyles.icon__box}` }}
            >
              <FaAddressCard />
            </IconContext.Provider>
            <input
              type="text"
              name="name"
              placeholder="Name or Business"
            ></input>
          </div>
        </div>
        <div className={layoutStyles.form__column}>
          <label htmlfor="email">Email:</label>
          <div className={layoutStyles.form__row}>
            <IconContext.Provider
              value={{ className: `${layoutStyles.icon__box}` }}
            >
              <FaEnvelopeOpen />
            </IconContext.Provider>
            <input
              type="email"
              name="email"
              placeholder="Please Enter Your Email"
            ></input>
          </div>
        </div>
        <div className={layoutStyles.form__column}>
          <label htmlfor="message">Enter your message:</label>
          <textarea
            type="text"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>
        </div>
        <div className={layoutStyles.form__column}>
          <button className={layoutStyles.submit__button}>Submit</button>
        </div>
      </form>
    </section>
  )
}

export default ContactPage
