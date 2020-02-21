import React from "react"
import { Helmet } from "react-helmet"

//import Image from "../components/image"
//import SEO from "../components/seo"
import Header from "../components/header"
import Landing from "../components/landing"
import Gallery from "../components/gallery"

import "../styles/styles.scss"

const IndexPage = () => (
  <main>
    <Helmet>
      <html lang="hr" />
      <title>ARTERION obrt za dizajn</title>
      <description>
        ARTERION obrt za dizajn radi 3D vizualizacije interijera, eksterijera i
        raznih proizvoda.
      </description>
    </Helmet>

    <div>
      {/* <Header /> */}
      <Landing />
      <Gallery
        title1="INTERIJER"
        imagetop1={require("../images/interior_1.jpg")}
        imagebottom1={require("../images/interior_2.jpg")}
        title2="EKSTERIJER"
        imagetop2={require("../images/exterior_1.jpg")}
        imagebottom2={require("../images/exterior_2.jpg")}
        title3="PROIZVODI"
        imagetop3={require("../images/product_2.jpg")}
        imagebottom3={require("../images/product_1.jpg")}
      />
    </div>
  </main>
)

export default IndexPage
