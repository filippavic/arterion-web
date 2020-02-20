import { React, useEffect } from "react"
import { Helmet } from 'react-helmet'
import { gsap } from "gsap"

//import Image from "../components/image"
//import SEO from "../components/seo"
import { Header } from "../components/header"
import { Landing } from "../components/landing"
import { Menu } from "../components/menu"
import { Contact } from "../components/contact"

import "../styles/styles.scss"


function IndexPage() {

 
  useEffect(() => {
    //gsap timeline
    const tl = gsap.timeline();

    tl.from(".landing-text", 2, {
      display: 'none',
      opacity: 0,
      y: 50,
      ease: "power4.out",
      skewY: 2,
      stagger: {amount: 0.3}
    }).from(".header-menu, .logo", 1.5, {
      display: 'none',
      opacity: 0,
      y: 10,
      ease: "power4.out",
      stagger: {amount: 0.3}
    }).from(".icon-scroll", 4, {
      display: 'none',
      opacity: 0,
      y: -10,
      ease: "power4.out"
    })

}, []);


  return (
    <main>
    <Helmet>
      <html lang="en" />
      <title>ARTERION obrt za dizajn</title>
    </Helmet>

    <div>
      <Header/>
      <Landing />
      <Contact />
    </div>

  </main>
  );
}


export default IndexPage
