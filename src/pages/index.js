import React from "react"

import "../style/main.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/aboutcomponents/About"
import Services from "../components/servicescomponents/Services"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Consurgo International" />
    <About />
    <Services />
    <Contact />
  </Layout>
)

export default IndexPage
