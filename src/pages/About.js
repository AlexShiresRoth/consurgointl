import React from "react"
import "../style/main.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutPage from "../components/aboutcomponents/About"
import AboutSectionTwo from "../components/aboutcomponents/AboutSectionTwo"
import Header from "../components/header"
const About = () => {
  const pageData = {
    img: `https://res.cloudinary.com/snackmanproductions/image/upload/v1570241543/consurgointl/tyler-casey-CkZF0-etxU8-unsplash_l7ukhz.jpg`,
    pageTitle: "ABOUT CONSURGO INTERNATIONAL, INC.",
  }
  return (
    <Layout>
      <SEO title="About Page"></SEO>
      <Header pageData={pageData} />
      <div className="container">
        <AboutPage />
        <AboutSectionTwo />
      </div>
    </Layout>
  )
}

export default About
