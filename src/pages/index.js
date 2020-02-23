import React, { useEffect } from "react"
import Helmet from "react-helmet"
import gsap from "gsap"
import './i18n';
import { useTranslation } from "react-i18next"

//import Image from "../components/image"
//import SEO from "../components/seo"
import Header from "../components/header"
import Landing from "../components/landing"
import Contact from "../components/contact"
import Gallery from "../components/gallery"

import "../styles/styles.scss"

function IndexPage() {

  //react-i18next translation
  const { t } = useTranslation();

  useEffect(() => {
    //gsap timeline
    const tl = gsap.timeline()

    tl.set(".landing-text", {
      autoAlpha: 0,
      y: 50,
      skewY: 2
    })
    .set(".header-menu, .logo", {
      autoAlpha: 0,
      y: 10
    })
    .set(".icon-scroll", {
      autoAlpha: 0,
      y: -10
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

  
  return (
    <main>
      <Helmet>
        <title>{t("siteTitle")}</title>
        <meta name="description" content={t("siteDesc")} />
        <meta name="google-site-verification" content="ErRyGpuFwE1Gita3NspBPxJes2cGWcl8swkuUNB3-00" />
      </Helmet>

      <div>
        <Header />
        <Landing />
        <Gallery />
        <Contact />
      </div>
    </main>
  )
}

export default IndexPage
