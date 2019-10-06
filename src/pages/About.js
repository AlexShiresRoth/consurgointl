import React from "react"
import "../style/main.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutPage from "../components/aboutcomponents/About"
import AboutSectionTwo from "../components/aboutcomponents/AboutSectionTwo"
const About = () => {
  return (
    <Layout>
      <SEO title="About Page"></SEO>
      <AboutPage />
      <AboutSectionTwo />
    </Layout>
  )
}

export default About
