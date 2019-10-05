import React from "react"

import "../style/main.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/About"

const IndexPage = () => (
  <Layout>
    <SEO title="Consurgo International" />
    <About />
  </Layout>
)

export default IndexPage
