import React from "react"

import "../style/main.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactPage from "../components/contactcomponents/ContactPage"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact Page"></SEO>
      <ContactPage />
    </Layout>
  )
}

export default Contact
