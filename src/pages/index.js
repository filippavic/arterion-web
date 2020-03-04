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

    //scroll to top
    window.scrollTo(0, 0);

    //gsap timeline
    const tl = gsap.timeline()

    tl.set(".header-menu, .logo", {
        autoAlpha: 0,
        y: 10,
      })
      .set(".icon-scroll", {
        autoAlpha: 0,
        y: -10,
      })
      .to(".header-menu, .logo", 1.5, {
        autoAlpha: 1,
        y: 0,
        ease: "power4.out",
        delay: 4,
        stagger: { amount: 0.2 },
      })
      .to(".icon-scroll", 4, {
        autoAlpha: 1,
        y: 0,
        ease: "power4.out",
      })
  }, [])

  //mobile viewport
  if(typeof window !== "undefined"){
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

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
            content={translate("metaDesc", null, { locale: locale })} />
            <meta name="theme-color" content="#997658" />
            <meta name="msapplication-navbutton-color" content="#997658" />
            <meta name="apple-mobile-web-app-status-bar-style" content="#997658" />
          
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
