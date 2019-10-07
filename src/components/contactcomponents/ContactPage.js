import React from "react"
import { IconContext } from "react-icons"
import { FaEnvelopeOpen } from "react-icons/fa"

const ContactPage = () => {
  return (
    <div>
      <IconContext.Provider value={{}}>
        <FaEnvelopeOpen />
      </IconContext.Provider>
    </div>
  )
}

export default ContactPage
