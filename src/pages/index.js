import React, { useEffect } from "react"
import Helmet from "react-helmet"
import gsap from "gsap"
import translate from "translate-js"
import { ParallaxProvider } from "react-scroll-parallax"

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
        "ARTERION | usluge vizualizacije, modeliranja, shadinga, dizajna i animacije ",
      metaDesc:
        "ARTERION obrt za dizajn pruža usluge izrade 3D vizualizacija interijera i eksterijera, modeliranja i shadinga, dizajna te animacije.",
    },
    "hr"
  )
  translate.add(
    {
      metaTitle: "ARTERION | visualization, modeling, shading, design and animation",
      metaDesc:
        "ARTERION offers 3D visualization services, including interior and exterior renders, product modeling and shading, design and animation.",
    },
    "en"
  )

  return (
    <ParallaxProvider>
      <main>
        <Helmet htmlAttributes={{ lang: locale }}>
          <title>{translate("metaTitle", null, { locale: locale })}</title>
          <meta
            name="description"
            content={translate("metaDesc", null, { locale: locale })} />
          <meta name="theme-color" content="#997658" />
          <meta name="msapplication-navbutton-color" content="#997658" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#997658" />
          <meta name="copyright"content="apeiron" />
          <meta name="og:url" content="http://arterion.design" />
          <meta
            name="og:site_name"
            content="ARTERION | visualization, modeling, shading, design and animation"/>
          <meta 
            name="og:description" 
            content="ARTERION offers 3D visualization services, including interior and exterior renders, product modeling and shading, design and animation."/>
          <meta
            name="google-site-verification"
            content="ErRyGpuFwE1Gita3NspBPxJes2cGWcl8swkuUNB3-00"
          />
           <meta
            name="twitter:site_name"
            content="ARTERION | visualization, modeling, shading, design and animation"/>
          <meta 
            name="twitter:description" 
            content="ARTERION offers 3D visualization services, including interior and exterior renders, product modeling and shading, design and animation."/>
          <script type="application/ld+json">{`{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "http://arterion.design",
            "name": "ARTERION obrt za dizajn",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jalšje 22",
              "addressLocality": "Veliko Trgovišće",
              "addressRegion": "Krapina-Zagorje County",
              "postalCode": "49214",
              "addressCountry": "HR"
            },
            "url": "http://arterion.design",
            "telephone": "+385913331810",
            "logo": {
              "@type": "ImageObject",
              "width": 800,
              "height": 89,
              "url": "https://i.ibb.co/XLkrkY6/output-onlinepngtools.png"
            },
        }`}</script>
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
