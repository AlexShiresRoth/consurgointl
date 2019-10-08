import React from "react"

import "../style/main.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import About from "../components/aboutcomponents/About"
import HomeServices from "../components/homecomponents/HomeServices"

const IndexPage = () => {
  const pageData = {
    img:
      "https://res.cloudinary.com/snackmanproductions/image/upload/v1570296503/consurgointl/ross-parmly-rf6ywHVkrlY-unsplash_olpoik.jpg",
    pageTitle: null,
  }
  return (
    <Layout>
      <SEO title="Consurgo International Inc." />
      <Header pageData={pageData} />
      <div className="container">
        <About />
        <HomeServices />
      </div>
    </Layout>
  )
}

export default IndexPage
