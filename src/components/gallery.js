import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Lottie from "react-lottie"
import ScrollTrigger from "react-scroll-trigger"
import * as interiorAnimationDataHR from "../images/interior_hr.json"
import * as interiorAnimationDataEN from "../images/interior_hr.json"
import * as exteriorAnimationDataHR from "../images/exterior_hr.json"
import * as exteriorAnimationDataEN from "../images/exterior_hr.json"
import * as productAnimationDataHR from "../images/products_hr.json"
import * as productAnimationDataEN from "../images/products_hr.json"

import "./gallery.scss"

function Gallery(props) {
  //Lotie toggle
  const [isStopped, setStopped] = useState(true)

  //scroll trigger
  const onEnterViewport = () => {
    setStopped(false)
  }

  const onExitViewport = () => {
    setStopped(true)
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

  if (typeof locale !== "undefined"){
    var defaultOptions1 = {
      loop: false,
      autoplay: false,
      animationData:
        locale.localeCompare("hr") === 0
          ? interiorAnimationDataHR.default
          : interiorAnimationDataEN.default,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      }  
    }

    var defaultOptions2 = {
      loop: false,
      autoplay: false,
      animationData:
        locale.localeCompare("hr") === 0
          ? exteriorAnimationDataHR.default
          : exteriorAnimationDataEN.default,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      }
    }

    var defaultOptions3 = {
      loop: false,
      autoplay: false,
      animationData:
        locale.localeCompare("hr") === 0
          ? productAnimationDataHR.default
          : productAnimationDataEN.default,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      }
    }
  }


  return (
    <div className="gallery">
      <div className="galleryContainer">
        <div className="titleGallery" id="trigger1">
          <ScrollTrigger
            onEnter={() => onEnterViewport()}
            onExit={() => onExitViewport()}
          />

          <Lottie
            options={defaultOptions1}
            isStopped={isStopped}
            isClickToPauseDisabled={true}
            className="interior-animation"
            id="interior-animation"
          />
        </div>
        <div className="leftTopGallery"></div>
        <div className="rightTopGallery">
          <img src={props.imagetop1} className="grayscale" />
        </div>
      </div>
      <div className="bottomGalleryContainer">
        <div className="leftBottomGallery">
          <img src={props.imagebottom1} className="grayscale" />
        </div>
        <div className="rightBottomGallery"></div>
      </div>
      <div className="galleryContainer">
        <div className="titleGallery" id="trigger2">
          <ScrollTrigger
            onEnter={() => onEnterViewport()}
            onExit={() => onExitViewport()}
          />

          <Lottie
            options={defaultOptions2}
            isStopped={isStopped}
            isClickToPauseDisabled={true}
            className="interior-animation"
            id="interior-animation"
          />
        </div>
        <div className="leftTopGallery"></div>
        <div className="rightTopGallery">
          <img src={props.imagetop2} className="grayscale" />
        </div>
      </div>
      <div className="bottomGalleryContainer">
        <div className="leftBottomGallery">
          <img src={props.imagebottom2} className="grayscale" />
        </div>
        <div className="rightBottomGallery"></div>
      </div>
      <div className="galleryContainer">
        <div className="titleGallery" id="trigger3">
          <ScrollTrigger
            onEnter={() => onEnterViewport()}
            onExit={() => onExitViewport()}
          />

          <Lottie
            options={defaultOptions3}
            isStopped={isStopped}
            isClickToPauseDisabled={true}
            className="product-animation"
            id="product-animation"
          />
        </div>
        <div className="leftTopGallery"></div>
        <div className="rightTopGallery">
          <img src={props.imagetop3} className="grayscale" />
        </div>
      </div>
      <div className="bottomGalleryContainer">
        <div className="leftBottomGallery">
          <img src={props.imagebottom3} className="grayscale" />
        </div>
        <div className="rightBottomGallery"></div>
      </div>
    </div>
  )
}

export default Gallery
