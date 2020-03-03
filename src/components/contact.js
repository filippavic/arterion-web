import React, { useState, useEffect } from "react"
import ScrollTrigger from "react-scroll-trigger"
import translate from "translate-js"
import gsap from "gsap"

const Contact = () => {

  //gsap timeline
  const [contacttl] = useState(gsap.timeline({paused: true}));

  useEffect(() => {
        
    //gsap animations
    contacttl.from(".contact-top", {
      autoAlpha: 0,
      y: -15,
      ease: "power4.out",
      skewY: 2,
      duration: 1,
      stagger: {ammount: 0.7}
    }).from(".contact-left", {
      autoAlpha: 0,
      y: 25,
      skewY: 3,
      ease: "power4.out",
      stagger: {amount: 0.4},
      duration: 0.5
    }).from(".contact-right", {
      autoAlpha: 0,
      y: 20,
      skewY: -3,
      ease: "power4.out",
      stagger: {amount: 0.4},
      duration: 0.5
    })

  }, [contacttl]);

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
      country: "Hrvatska",
      owner: "Siniša Slovenec",
      title1: "Sviđa Vam se što vidite?",
      title2: "Slobodno se javite.",
    },
    "hr"
  )
  translate.add(
    {
      country: "Croatia",
      owner: "Siniša Slovenec",
      title1: "Like what you see?",
      title2: "Feel free to contact me.",
    },
    "en"
  )

  //scroll trigger
  const onEnterViewport = () => {
      contacttl.play()
  }

  const onExitViewport = () => {
      contacttl.reverse(0);
  }

  // //Lottie options
  // if (typeof locale !=="undefined") {
  //     var defaultOptions = {
  //         loop: false,
  //         autoplay: false,
  //         animationData:
  //             locale.localeCompare("hr") === 0
  //                 ? contactAnimationDataHR.default
  //                 : contactAnimationDataEN.default,
  //         rendererSettings: {
  //         preserveAspectRatio: 'xMidYMid slice'
  //       }
  //     }
  // }

  return (
    <div className="contact-cont">
      
      <div className="contact-top">
        <h2>{translate("title1", null, { locale: locale })}</h2>
        <h1>{translate("title2", null, { locale: locale })}</h1>
      </div>

      <ScrollTrigger onEnter={() => onEnterViewport()} onExit={() => onExitViewport()}>
      <div className="contact-middle">
        <div className="contact-left">
          <a href="mailto:info@arterion.design">info@arterion.design</a>
          <a href="tel:385 123 456">+385 123 456</a>
        </div>
        

        <div className="contact-right"> 
          <h3 id="company-title">ARTERION obrt za dizajn</h3>
          <h3>{translate("owner", null, { locale: locale })}</h3>
          <h3>Jalšje 22, Veliko Trgovišće</h3>
          <h3>{translate("country", null, { locale: locale })}</h3>
        </div>
      </div>
      </ScrollTrigger>

      <div className="contact-bottom">
        <a href="https://apeiron.media">Made with &hearts; by apeiron</a>
      </div>
    </div>
  )
}

export default Contact
