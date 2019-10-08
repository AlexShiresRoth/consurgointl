import React from "react"

import "../style/main.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactPage from "../components/contactcomponents/ContactPage"
import Header from "../components/header"

const Contact = () => {
  const pageData = {
    img: `https://res.cloudinary.com/snackmanproductions/image/upload/v1570489094/consurgointl/thomas-thompson-KSm1Fh8wQtc-unsplash_hzhrxv.jpg`,
    pageTitle: "Contact Us",
  }
  return (
    <Layout>
      <SEO title="Contact Page"></SEO>
      <Header pageData={pageData} />
      <div className="container">
        <ContactPage />
      </div>
    </Layout>
  )
}

export default Contact
