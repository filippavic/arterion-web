import React, { useEffect } from "react"
import Helmet from "react-helmet"
import translate from "translate-js"
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

  //localization
  function getLocale() {
    var lang = "";
    if (typeof navigator !== "undefined"){
      if (navigator.languages !== undefined) lang = navigator.languages[0]; 
      else lang = navigator.language;

      if (lang.substring(0,2).localeCompare("hr") !== 0) return "en"
      else return "hr"
    }
  }

  var locale = getLocale();

  translate.add({metaTitle: 'ARTERION | 3D vizualizacije interijera, eksterijera i proizvoda',
  metaDesc: 'ARTERION obrt za dizajn pruža usluge izrade realističnih 3D vizualizacija interijera i eksterijera te raznih proizvoda.'}, 'hr');
  translate.add({metaTitle: 'ARTERION | 3D interior, exterior and product visualization',
  metaDesc: 'ARTERION offers 3D visualization services, ranging from high-quality interior and exterior renders to 3D product modeling and rendering.'}, 'en');

  return (
    <main>
      <Helmet>
        <html lang="hr" />
        <title>{translate('metaTitle', null, {locale: locale})}</title>
        <meta name="description" content={translate('metaDesc', null, {locale: locale})} />
        <meta name="google-site-verification" content="ErRyGpuFwE1Gita3NspBPxJes2cGWcl8swkuUNB3-00" />
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
