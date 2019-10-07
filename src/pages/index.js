import React from "react"

import "../style/main.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/aboutcomponents/About"
import HomeServices from "../components/homecomponents/HomeServices"

const IndexPage = () => (
  <Layout>
    <SEO title="Consurgo International" />
    <About />
    <HomeServices />
  </Layout>
)

export default IndexPage
