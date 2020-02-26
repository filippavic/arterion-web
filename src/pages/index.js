import React, { useEffect } from "react"
import Helmet from "react-helmet"
import gsap from "gsap"
import translate from "translate-js"
import { ParallaxProvider } from "react-scroll-parallax"

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

    tl.set(".landing-text", {
      autoAlpha: 0,
      y: 50,
      skewY: 2,
    })
      .set(".header-menu, .logo", {
        autoAlpha: 0,
        y: 10,
      })
      .set(".icon-scroll", {
        autoAlpha: 0,
        y: -10,
      })
      .to(".landing-text", 2, {
        autoAlpha: 1,
        y: 0,
        ease: "power4.out",
        skewY: 0,
        stagger: { amount: 0.3 },
      })
      .to(".header-menu, .logo", 1.5, {
        autoAlpha: 1,
        y: 0,
        ease: "power4.out",
        stagger: { amount: 0.3 },
      })
      .to(".icon-scroll", 4, {
        autoAlpha: 1,
        y: 0,
        ease: "power4.out",
      })
  }, [])

  //localization
  function getLocale() {
    var lang = ""
    if (typeof navigator !== "undefined") {
      if (navigator.languages !== undefined) lang = navigator.languages[0]
      else lang = navigator.language

      if (lang.substring(0, 2).localeCompare("hr") !== 0) return "en"
      else return "hr"
    }
  }

  var locale = getLocale()

  translate.add(
    {
      metaTitle:
        "ARTERION | 3D vizualizacije interijera, eksterijera i proizvoda",
      metaDesc:
        "ARTERION obrt za dizajn pruža usluge izrade realističnih 3D vizualizacija interijera i eksterijera te raznih proizvoda.",
    },
    "hr"
  )
  translate.add(
    {
      metaTitle: "ARTERION | 3D interior, exterior and product visualization",
      metaDesc:
        "ARTERION offers 3D visualization services, ranging from high-quality interior and exterior renders to 3D product modeling and rendering.",
    },
    "en"
  )

  return (
    <ParallaxProvider>
      <main>
        <Helmet>
          <title>{translate("metaTitle", null, { locale: locale })}</title>
          <meta
            name="description"
            content={translate("metaDesc", null, { locale: locale })}
          />
          <meta
            name="google-site-verification"
            content="ErRyGpuFwE1Gita3NspBPxJes2cGWcl8swkuUNB3-00"
          />
        </Helmet>

        <div>
          <Header />
          <Landing />
          <Gallery />
          <Contact />
        </div>
      </main>
    </ParallaxProvider>
  )
}

export default IndexPage
