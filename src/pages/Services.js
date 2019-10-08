import React from "react"

import "../style/main.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ServicesPage from "../components/servicescomponents/ServicesPage"
import Header from "../components/header"
const Services = () => {
  const pageData = {
    img: `https://res.cloudinary.com/snackmanproductions/image/upload/v1570500801/consurgointl/1jZfeherI3et-L_jwvUP9pA_j3r76b.jpg`,
    pageTitle: "Products and Services",
  }
  return (
    <Layout>
      <SEO title="Services Page" />
      <Header pageData={pageData} />
      <div className="container">
        <ServicesPage />
      </div>
    </Layout>
  )
}

export default Services
