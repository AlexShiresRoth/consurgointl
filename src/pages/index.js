import React from "react"

import "../style/main.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import HomeAbout from "../components/aboutcomponents/HomeAbout"
import HomeServices from "../components/homecomponents/HomeServices"

const IndexPage = () => {
  const pageData = {
    img: `https://res.cloudinary.com/snackmanproductions/image/upload/v1570580759/consurgointl/vidar-nordli-mathisen-y8TMoCzw87E-unsplash_esb5hq.jpg`,
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
