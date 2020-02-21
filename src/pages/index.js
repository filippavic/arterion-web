import React, { useEffect } from "react"
import Helmet from "react-helmet"
import gsap from "gsap"

//import Image from "../components/image"
//import SEO from "../components/seo"
import Header from "../components/header"
import Landing from "../components/landing"
import Contact from "../components/contact"
import Gallery from "../components/gallery"

import "../styles/styles.scss"

function IndexPage() {
  useEffect(() => {
    //gsap timeline
    const tl = gsap.timeline()

    tl.from(".landing-text", 2, {
      display: "none",
      opacity: 0,
      y: 50,
      ease: "power4.out",
      skewY: 2,
      stagger: { amount: 0.3 },
    })
      .from(".header-menu, .logo", 1.5, {
        display: "none",
        opacity: 0,
        y: 10,
        ease: "power4.out",
        stagger: { amount: 0.3 },
      })
      .from(".icon-scroll", 4, {
        display: "none",
        opacity: 0,
        y: -10,
        ease: "power4.out",
      })
  }, [])

  return (
    <main>
      <Helmet>
        <html lang="hr" />
        <title>ARTERION obrt za dizajn</title>
      </Helmet>

      <div>
        <Header />
        <Landing />
        <Gallery
          imagetop1={require("../images/interior_1.jpg")}
          imagebottom1={require("../images/interior_2.jpg")}
          imagetop2={require("../images/exterior_1.jpg")}
          imagebottom2={require("../images/exterior_2.jpg")}
          imagetop3={require("../images/product_2.jpg")}
          imagebottom3={require("../images/product_1.jpg")}
        />
        <Contact />
      </div>
    </main>
  )
}

export default IndexPage
