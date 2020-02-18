import React from "react"
import { Helmet } from 'react-helmet'

//import Image from "../components/image"
//import SEO from "../components/seo"
import Header from "../components/header"
import Landing from "../components/landing"

import "../styles/styles.scss"

const IndexPage = () => (
  <main>
    <Helmet>
      <html lang="hr" />
      <title>ARTERION obrt za dizajn</title>
      <description>ARTERION obrt za dizajn radi 3D vizualizacije interijera, eksterijera i raznih proizvoda.</description>
    </Helmet>

    <div>
      <Header />
      <Landing />
    </div>

  </main>
)

export default IndexPage
