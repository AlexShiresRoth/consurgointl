import React from "react"

import "../style/main.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import HomeAbout from "../components/aboutcomponents/HomeAbout"
import HomeServices from "../components/homecomponents/HomeServices"

const IndexPage = () => {
  const pageData = {
    img: `https://res.cloudinary.com/snackmanproductions/image/upload/v1570582409/consurgointl/juliana-kozoski-IoQioGLrz3Y-unsplash_skkr95.jpg`,
    pageTitle: null,
  }
  return (
    <Layout>
      <SEO title="Consurgo International Inc." />
      <Header pageData={pageData} />
      <div className="container">
        <HomeAbout />
        <HomeServices />
      </div>
    </Layout>
  )
}

export default IndexPage
