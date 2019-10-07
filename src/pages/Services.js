import React from "react"

import "../style/main.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ServicesPage from "../components/servicescomponents/ServicesPage"

const Services = () => {
  return (
    <Layout>
      <SEO title="Services Page" />
      <ServicesPage />
    </Layout>
  )
}

export default Services
