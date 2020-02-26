import React, { useState } from "react"
import Image from "../components/image"
import { Parallax } from "react-scroll-parallax"
import translate from "translate-js"

// import Zoom from 'react-medium-image-zoom'

// import Lottie from "react-lottie"
// import ScrollTrigger from "react-scroll-trigger"
// import * as interiorAnimationDataHR from "../images/interior_hr.json"
// import * as interiorAnimationDataEN from "../images/interior_en.json"
// import * as exteriorAnimationDataHR from "../images/exterior_hr.json"
// import * as exteriorAnimationDataEN from "../images/exterior_en.json"
// import * as productAnimationDataHR from "../images/products_hr.json"
// import * as productAnimationDataEN from "../images/products_en.json"

import "./gallery.scss"

function Gallery() {
  // //Lotie toggle
  // const [isStopped1, setStopped1] = useState(true)
  // const [isStopped2, setStopped2] = useState(true)
  // const [isStopped3, setStopped3] = useState(true)

  // //scroll trigger
  // const onEnterViewport1 = () => {
  //   setStopped1(false)
  // }
  // const onEnterViewport2 = () => {
  //   setStopped2(false)
  // }
  // const onEnterViewport3 = () => {
  //   setStopped3(false)
  // }

  // const onExitViewport1 = () => {
  //   setStopped1(true)
  // }
  // const onExitViewport2 = () => {
  //   setStopped2(true)
  // }
  // const onExitViewport3 = () => {
  //   setStopped3(true)
  // }

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
      description1: "Lorem ipsum na hrvatskom bla bla",
      description2: "Lorem ipsum na hrvatskom bla bla",
      description3: "Lorem ipsum na hrvatskom bla bla",
      description4: "Lorem ipsum na hrvatskom bla bla",
      description5: "Lorem ipsum na hrvatskom bla bla",
      description6: "Lorem ipsum na hrvatskom bla bla",
    },
    "hr"
  )
  translate.add(
    {
      description1: "Lorem ipsum na engleskom bla bla",
      description2: "Lorem ipsum na engleskom bla bla",
      description3: "Lorem ipsum na engleskom bla bla",
      description4: "Lorem ipsum na engleskom bla bla",
      description5: "Lorem ipsum na engleskom bla bla",
      description6: "Lorem ipsum na engleskom bla bla",
    },
    "en"
  )

  // if (typeof locale !== "undefined") {
  //   var defaultOptions1 = {
  //     loop: false,
  //     autoplay: false,
  //     animationData:
  //       locale.localeCompare("hr") === 0
  //         ? interiorAnimationDataHR.default
  //         : interiorAnimationDataEN.default,
  //     rendererSettings: {
  //       preserveAspectRatio: "xMidYMid slice",
  //     },
  //   }

  //   var defaultOptions2 = {
  //     loop: false,
  //     autoplay: false,
  //     animationData:
  //       locale.localeCompare("hr") === 0
  //         ? exteriorAnimationDataHR.default
  //         : exteriorAnimationDataEN.default,
  //     rendererSettings: {
  //       preserveAspectRatio: "xMidYMid slice",
  //     },
  //   }

  // var defaultOptions3 = {
  //   loop: false,
  //   autoplay: false,
  //   animationData:
  //     locale.localeCompare("hr") === 0
  //       ? productAnimationDataHR.default
  //       : productAnimationDataEN.default,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // }
  // }

  return (
    <div className="gallery">
      <div className="galleryContainer">
        <div className="leftTopGallery"></div>
        <div className="rightTopGallery">
          <Parallax className="custom-class" y={[-15, 15]} tagOuter="figure">
            <Image alt="Interior visualization" filename="interior_1.jpg" />
          </Parallax>
          <h3 className="description">
            {translate("description1", null, { locale: locale })}
          </h3>
        </div>
      </div>
      <div className="bottomGalleryContainer">
        <div className="leftBottomGallery">
          <Parallax className="custom-class" y={[-15, 15]} tagOuter="figure">
            <Image alt="Interior visualization" filename="interior_2.jpg" />
          </Parallax>
          <h3 className="description">
            {translate("description2", null, { locale: locale })}
          </h3>
        </div>
        <div className="rightBottomGallery"></div>
      </div>
      <div className="galleryContainer">
        <div className="leftTopGallery"></div>
        <div className="rightTopGallery">
          <Parallax className="custom-class" y={[-15, 15]} tagOuter="figure">
            <Image alt="Exterior visualization" filename="exterior_1.jpg" />
          </Parallax>
          <h3 className="description">
            {translate("description3", null, { locale: locale })}
          </h3>
        </div>
      </div>
      <div className="bottomGalleryContainer">
        <div className="leftBottomGallery">
          <Parallax className="custom-class" y={[-15, 15]} tagOuter="figure">
            <Image alt="Exterior visualization" filename="exterior_2.jpg" />
          </Parallax>
          <h3 className="description">
            {translate("description4", null, { locale: locale })}
          </h3>
        </div>
        <div className="rightBottomGallery"></div>
      </div>
      <div className="galleryContainer">
        <div className="leftTopGallery"></div>
        <div className="rightTopGallery">
          <Parallax className="custom-class" y={[-15, 15]} tagOuter="figure">
            <Image alt="Product visualization" filename="product_1.jpg" />
          </Parallax>
          <h3 className="description">
            {translate("description5", null, { locale: locale })}
          </h3>
        </div>
      </div>
      <div className="bottomGalleryContainer">
        <div className="leftBottomGallery">
          <Parallax className="custom-class" y={[-15, 20]} tagOuter="figure">
            <Image alt="Product visualization" filename="product_2.jpg" />
          </Parallax>
          <h3 className="description">
            {translate("description6", null, { locale: locale })}
          </h3>
        </div>
        <div className="rightBottomGallery"></div>
      </div>
    </div>
  )
}

export default Gallery
